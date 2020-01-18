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
// Реализация блока preloader
// ====================================================
const preloader = document.querySelector('.preloader');
if (preloader) {
	document.addEventListener('DOMContentLoaded', function() {
		setTimeout(function() {
			$(preloader).fadeOut(1000);
		}, 2500);
	});
}
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
	if (scroll_items) {
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
	}
};
scrollInit();
// END ------------------------

// ====================================================
// Реализация fancybox
// ====================================================
const fancy_items = $('[data-fancybox]');
if (fancy_items.length) {
	fancy_items.fancybox({
		protect: true,
		buttons: ['zoom', 'close'],
		backFocus: false
	});
}
// END ------------------------

// ====================================================
// Реализация блока data-more
// ====================================================
const more_buttons = document.querySelectorAll('[data-more]');
if (more_buttons) {
	more_buttons.forEach(function(more_button) {
		const more_target = document.querySelector(more_button.dataset.more);
		const more_text_closed = more_button.innerHTML;
		const more_text_opened = more_button.dataset.closeText;
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
// Реализация блока data-number-to
// ====================================================
const number_to = function(element, from, to, duration) {
	var start = new Date().getTime();
	setTimeout(function() {
		var now = new Date().getTime() - start;
		var progress = now / duration;
		var result = Math.floor((to - from) * progress + from);
		element.innerText = progress < 1 ? result : to;
		if (progress < 1) setTimeout(arguments.callee, 10);
	}, 10);
};

const numberToInit = function() {
	const number_to_items = document.querySelectorAll('[data-number-to]');
	if (number_to_items) {
		if (typeof IntersectionObserver === 'function') {
			const scroll_window = new IntersectionObserver(function(entries) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting) {
						const elem = entry.target;
						const elem_number_to = elem.dataset.numberTo;
						setTimeout(function() {
							number_to(elem, 0, +elem_number_to, 3000);
							scroll_window.unobserve(elem);
						}, 400);
					}
				});
			}, {});

			number_to_items.forEach(function(scroll_item) {
				scroll_window.observe(scroll_item);
			});
		} else {
			number_to_items.forEach(function(scroll_item) {
				const scroll_item_number_to = scroll_item.dataset.numberTo;
				number_to(elem, 0, +scroll_item_number_to, 3000);
			});
		}
	}
};
numberToInit();
// END ------------------------

// ====================================================
// Реализация блока city
// ====================================================
if (typeof city_items_data === 'object') {
	const city_width = 960,
		city_height = 500;

	const city_circle_width = 4;

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
const tab_blocks = document.querySelectorAll('[data-tabs]');
if (tab_blocks) {
	tab_blocks.forEach(function(tab_block) {
		const tab_buttons = tab_block.querySelectorAll('[data-tab-open]');

		tab_buttons.forEach(function(tab__button) {
			const tab_target = document.querySelector(tab__button.getAttribute('data-tab-open'));
			const tab_group = document.querySelector(tab__button.getAttribute('data-tab-group'));
			const tab_items = tab_group.querySelectorAll('[data-tab-item]');
			const tab_buttons = tab_group.querySelectorAll('[data-tab-open]');

			tab__button.addEventListener('click', function(e) {
				sessionStorage.setItem('tab_was', tab__button.getAttribute('data-tab-open'));
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

		const tab_was_selector = sessionStorage.getItem('tab_was');
		if (tab_was_selector) {
			const tab_button_was = document.querySelector('[data-tab-open="' + tab_was_selector + '"]');
			if (tab_button_was && window.location.href.split('?').length > 1) {
				if (window.location.href.split('?')[1].indexOf('-page=') > 0) {
					tab_button_was.click();
					$('html, body').animate({ scrollTop: $(tab_buttons[0]).offset().top }, 600);
				} else {
					tab_buttons[0].click();
				}
			} else {
				tab_buttons[0].click();
			}
		} else {
			tab_buttons[0].click();
		}
	});
}
// END ------------------------

// ====================================================
// Реализация блока data-filter
// ====================================================
const filter_sections = document.querySelectorAll('[data-filters]');
if (filter_sections) {
	filter_sections.forEach(function(filter_section) {
		const filter_buttons = filter_section.querySelectorAll('[data-filter-show]');
		const filter_groups = filter_section.querySelectorAll('[data-filter-group]');
		const filter_items = filter_section.querySelectorAll('[data-filter-item]');

		if (filter_buttons) {
			filter_buttons.forEach(function(filter_button) {
				const filter_show = filter_button.dataset.filterShow;

				filter_button.addEventListener('click', function() {
					active(filter_buttons, false);
					active(filter_button, true);

					filter_items.forEach(function(filter_item) {
						active(filter_item, false);
						const filter_item_links = filter_item.dataset.filterItem;
						const filter_item_links_array = filter_item_links.split('||');
						if (filter_item_links_array.includes(filter_show)) {
							active(filter_item, true);
						}
					});

					filter_groups.forEach(function(filter_group) {
						active(filter_group, false);

						const filter_group_items = filter_group.querySelectorAll('[data-filter-item]');
						filter_group_items.forEach(function(filter_group_item) {
							if (filter_group_item.classList.contains('active')) {
								active(filter_group, true);
							}
						});
					});
				});
			});

			filter_buttons[0].click();
		}
	});
}
// END ------------------------

// ====================================================
// Реализация блока data-explication
// ====================================================
const explication_items = document.querySelectorAll('[data-explication-target]');
if (explication_items) {
	explication_items.forEach(function(explication_item) {
		const explication_selector = '[data-explication="' + explication_item.dataset.explicationTarget + '"]';
		const explication_caption = explication_item.dataset.explicationCaption || '';
		document.querySelectorAll(explication_selector).forEach(function(gallery_item) {
			gallery_item.dataset.caption = explication_caption;
		});
		explication_item.addEventListener('click', function() {
			$.fancybox.open($(explication_selector), {
				protect: true,
				buttons: ['zoom', 'close'],
				backFocus: false
			});
		});
	});
}
// END ------------------------

// ====================================================
// Реализация блока data-phone
// ====================================================
const phone_buttons = document.querySelectorAll('[data-phone]');
if (phone_buttons) {
	phone_buttons.forEach(function(phone_button) {
		const phone_href = phone_button.dataset.href;
		const phone_text = phone_button.dataset.phone;
		phone_button.addEventListener('click', function(e) {
			if (phone_button.hasAttribute('data-href')) {
				e.preventDefault();
				phone_button.innerHTML = phone_text;
				phone_button.setAttribute('href', phone_href);
				phone_button.removeAttribute('data-href');
			}
		});
	});
}
// END ------------------------

// ====================================================
// Реализация проверки AntiSpam
// ====================================================
const checkSpam = function(form_id, name, time = 5000) {
	setTimeout(function() {
		$(form_id + ' form').append('<input type="text" name="' + name + '" value="unvisible" style="display:none;">');
	}, time);
};
// END ------------------------

// ====================================================
// Реализация блока project-gallery
// ====================================================
const project_gallery = document.querySelector('.project-gallery__list');
if (project_gallery) {
	project_gallery.addEventListener('scroll', function() {
		project_gallery.classList.add('off');
	});
}
// END ------------------------
