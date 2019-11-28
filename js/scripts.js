// ====================================================
// Реализация функции noscroll
// ====================================================
const noscroll = function(elem, status = true) {
	if (status === true) $(elem).addClass('noscroll');
	if (status === false) $(elem).removeClass('noscroll');
	if (status === 'toggle') $(elem).toggleClass('noscroll');
};
// END ------------------------

// ====================================================
// Реализация функции active
// ====================================================
const active = function(elem, status = true) {
	if (status === true) $(elem).addClass('active');
	if (status === false) $(elem).removeClass('active');
	if (status === 'toggle') $(elem).toggleClass('active');
};
// END ------------------------

// ====================================================
// Реализация функции opened
// ====================================================
const opened = function(elem, status = true) {
	if (status === true) $(elem).addClass('opened');
	if (status === false) $(elem).removeClass('opened');
	if (status === 'toggle') $(elem).toggleClass('opened');
};
// END ------------------------

// ====================================================
// Реализация блока menu
// ====================================================
const menu = document.querySelector('.menu');
const menu_open = document.querySelector('.menu-open');
const menu_close = document.querySelector('.menu-close');
if (menu_open) {
	menu_open.addEventListener('click', function() {
		opened(menu);
		active(menu_close);
		noscroll('body');
	});
}
if (menu_close) {
	menu_close.addEventListener('click', function() {
		opened(menu, false);
		active(menu_close, false);
		noscroll('body', false);
	});
}
// END ------------------------

// ====================================================
// Реализация блока scroll
// ====================================================
const scrollInit = function() {
	const scroll_items = document.querySelectorAll('[data-scroll]');
	if (typeof IntersectionObserver === 'function') {
		const scroll_window = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					const elem = entry.target;
					setTimeout(function() {
						elem.classList.add('scrolled');
						scroll_window.unobserve(elem);
					}, 400);
				}
			});
		}, {});

		scroll_items.forEach(function(scroll_item) {
			scroll_window.observe(scroll_item);
		});
	} else {
		scroll_items.forEach(function(scroll_item) {
			scroll_item.classList.add('scrolled');
		});
	}
};
scrollInit();
// END ------------------------

// ====================================================
// Реализация блока data-more
// ====================================================
const more_buttons = document.querySelectorAll('[data-more]');
if (more_buttons) {
	more_buttons.forEach(function(more_button) {
		const more_target = document.querySelector(more_button.dataset.more);
		const more_text_closed = more_button.innerHTML;
		const more_text_opened = 'Скрыть';
		more_button.addEventListener('click', function() {
			$(more_target).slideToggle();
			active(more_button, 'toggle');
			if (more_button.classList.contains('active')) {
				more_button.innerHTML = more_text_opened;
			} else {
				more_button.innerHTML = more_text_closed;
			}
		});
	});
}
// END ------------------------

// ====================================================
// Реализация блока city
// ====================================================
if (typeof city_items_data === 'object') {
	const city_width = 960,
		city_height = 500;

	const city_circle_width = 4;

	const city_items_center = [{ name: 'Минск' }];

	const city_links_data = [];
	city_items_data.forEach(function(elem, index) {
		city_links_data.push({
			source: city_items_center[0],
			target: city_items_data[index]
		});
	});

	const city_map = d3
		.select('.city__map')
		.append('svg:svg')
		.attr('class', 'city__map-body')
		.attr('preserveAspectRatio', 'xMinYMin meet')
		.attr('viewBox', '0 0 960 500');

	const city_svg = d3.layout
		.force()
		.nodes(city_items_center.concat(city_items_data))
		.links([])
		.gravity(0.06)
		.charge(-400)
		.size([city_width, city_height]);

	const city_links = city_map
		.selectAll('.link')
		.data(city_links_data)
		.enter()
		.append('line')
		.attr('class', 'city__map-line')
		.attr('stroke', '#f5f5f5')
		.attr('fill', '#f5f5f5');

	const city_items = city_map
		.selectAll('circle.node')
		.data(city_items_center.concat(city_items_data))
		.enter()
		.append('g')
		.attr('class', 'city__map-node')

		//MOUSEOVER
		.on('mouseover', function(d, i) {
			if (i > 0) {
				//CIRCLE
				d3.select(this)
					.selectAll('circle')
					.transition()
					.duration(250)
					.style('cursor', 'grab')
					.attr('r', city_circle_width + 2)
					.attr('fill', '#FCF4DC');

				//TEXT
				d3.select(this)
					.select('text')
					.transition()
					.style('cursor', 'grab')
					.duration(250)
					.style('cursor', 'grab')
					.attr('font-size', '1.5rem')
					.attr('x', 25)
					.attr('y', 5);
			} else {
				d3.select(this)
					.selectAll('circle')
					.transition()
					.duration(250)
					.style('cursor', 'grab');
			}
		})

		//MOUSEOUT
		.on('mouseout', function(d, i) {
			if (i > 0) {
				//CIRCLE
				d3.select(this)
					.selectAll('circle')
					.transition()
					.duration(250)
					.attr('r', city_circle_width)
					.attr('fill', '#f5f5f5');

				//TEXT
				d3.select(this)
					.select('text')
					.transition()
					.duration(250)
					.attr('font-size', '1rem')
					.attr('x', 15)
					.attr('y', 5);
			}
		})
		.call(city_svg.drag);

	//CIRCLE
	city_items
		.append('svg:circle')
		.attr('cx', function(d) {
			return d.x;
		})
		.attr('cy', function(d) {
			return d.y;
		})
		.attr('r', function(d, i) {
			if (i > 0) {
				return city_circle_width;
			} else {
				return city_circle_width + 5;
			}
		})
		.attr('fill', function(d, i) {
			if (i > 0) {
				return '#f5f5f5';
			} else {
				return '#fff7d8';
			}
		});

	//TEXT
	city_items
		.append('text')
		.text(function(d, i) {
			return d.name;
		})
		.attr('x', 15)
		.attr('y', 5)
		.attr('font-family', 'Montserrat')
		.attr('fill', function(d, i) {
			return '#cda173';
		})
		.attr('font-size', function(d, i) {
			if (i > 0) {
				return '1rem';
			} else {
				return '2rem';
			}
		})
		.attr('text-anchor', function(d, i) {
			return 'beginning';
		});

	city_svg.on('tick', function(e) {
		city_items.attr('transform', function(d, i) {
			return 'translate(' + d.x + ',' + d.y + ')';
		});

		city_links
			.attr('x1', function(d) {
				return d.source.x;
			})
			.attr('y1', function(d) {
				return d.source.y;
			})
			.attr('x2', function(d) {
				return d.target.x;
			})
			.attr('y2', function(d) {
				return d.target.y;
			});
	});
	city_svg.start();
}
// END ------------------------

// ====================================================
// Реализация блока data-tabs
// ====================================================
const tabs_blocks = document.querySelectorAll('[data-tabs]');
if (tabs_blocks) {
	tabs_blocks.forEach(function(tab_block) {
		const tab_buttons = tab_block.querySelectorAll('[data-tab-open]');

		tab_buttons.forEach(function(tab__button) {
			const tab_target = document.querySelector(tab__button.getAttribute('data-tab-open'));
			const tab_group = document.querySelector(tab__button.getAttribute('data-tab-group'));
			const tab_items = tab_group.querySelectorAll('[data-tab-item]');
			const tab_buttons = tab_group.querySelectorAll('[data-tab-open]');

			tab__button.addEventListener('click', function(e) {
				tab_items.forEach(function(tab_item) {
					active(tab_item, false);
				});

				tab_buttons.forEach(function(tab_button) {
					active(tab_button, false);
				});

				active(tab_target);
				active(tab__button);
			});
		});

		tab_buttons[0].click();
	});
}
// END ------------------------
