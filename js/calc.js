// ====================================================
// наращивание цифры
// ====================================================
const set_number_to = function(id, from, to, duration) {
	var element = $(id);
	var start = new Date().getTime();
	setTimeout(function() {
		var now = new Date().getTime() - start;
		var progress = now / duration;
		var result = Math.floor((to - from) * progress + from);
		element.html(progress < 1 ? result : to);
		if (progress < 1) setTimeout(arguments.callee, 10);
	}, 10);
};
// END ------------------------

// ====================================================
// АРХИТЕКТУРА
// ====================================================
const calc_arch = function() {
	// Площадь
	const square = $('#calc-square');
	const square_min = 50; // минимальная
	let square_value = square.val(); // текушая

	const square_value_number = Number(square_value) > 0;
	if (square_value < square_min || !square_value_number) {
		square.val(square_min);
		square_value = square_min;
	}

	square_value = square_value < 100 ? 100 : square_value; // от 50 до 100 цена одинаковая

	// АПК (архитектурно-планировочная концепция)
	const concept = $('#calc-concept');
	concept.prop('checked', true);
	const concept_on = concept.is(':checked') ? true : false;
	const concept_price = square_value * 21;

	// Визуализация
	const visual = $('#calc-visual');
	visual.prop('checked', true);
	const visual_on = visual.is(':checked') ? true : false;
	const visual_price = 900;

	// Макет
	const maket = $('#calc-maket');
	const maket_on = maket.is(':checked') ? true : false;
	const maket_price = maket_on ? 900 : 0;

	// Строительный проект
	const build = $('#calc-build');
	const build_on = build.is(':checked') ? true : false;
	const build_price = build_on ? square_value * 30 : 0;

	// Инженерные сети
	const ingeneer = $('#calc-ingeneer');
	const ingeneer_on = ingeneer.is(':checked') ? true : false;
	const ingeneer_price = ingeneer_on ? square_value * 28 : 0;

	// Авторский надзор
	const author = $('#calc-author');
	const author_on = author.is(':checked') ? true : false;
	const author_price = author_on ? 3000 : 0;

	// Служба заказчика
	const tech = $('#calc-tech');
	const tech_on = tech.is(':checked') ? true : false;
	const tech_price = tech_on ? 6000 : 0;

	// Личное ведение проекта основателями студии
	const self = $('#calc-self');
	const self_on = self.is(':checked') ? true : false;

	// ИТОГО
	let total_price = concept_price + visual_price + maket_price + build_price + ingeneer_price + author_price + tech_price;

	// total_price *= 0.8; // умножаем на общий коэффициент

	if (concept_on && visual_on && maket_on && build_on && ingeneer_on && author_on && tech_on) {
		total_price *= 0.85; // если отмечены все, кроме личного ведения проекта
	}

	if (self_on) total_price += total_price * 0.15; // если личное ведение проекта включено

	total_price = Math.round(total_price);

	// Подставляем ИТОГО в форму
	$('#calc-total').val(total_price);
	set_number_to('#calc-total-text', 0, total_price, 1500);
};
// END ------------------------

// ====================================================
// ДИЗАЙН
// ====================================================
const calc_design = function() {
	// Тип проекта
	const home = $('#calc-home');
	const home_on = home.is(':checked') ? true : false;
	const social = $('#calc-social');
	const social_on = social.is(':checked') ? true : false;
	const office = $('#calc-office');
	const office_on = office.is(':checked') ? true : false;

	// Площадь
	const square = $('#calc-square');
	let square_min = 75; // минимальная (по умолчанию)
	let square_value = square.val(); // текушая

	if (home_on) square_min = 75; // минимальная (дом, квартира)
	if (social_on) square_min = 100; // минимальная (общ. пространства)
	if (office_on) square_min = 500; // минимальная (админ. помещения)

	const square_value_number = Number(square_value) > 0;
	if (square_value < square_min || !square_value_number) {
		square.val(square_min);
		square_value = square_min;
	}

	// Цена в зависимости от типа проекта
	var type_price = 0;

	if (home_on) {
		// дом, квартира (плавное нарастание цены)
		if (square_value < 100) {
			type_price = 80;
		} else {
			if (square_value < 150) {
				type_price = Math.round(80 - (square_value - 100) / 5);
			} else {
				type_price = 60;
				if (square_value < 200) {
					type_price = Math.round(70 - (square_value - 150) / 5);
				}
			}
		}
	}
	if (social_on) type_price = 35; // общ. пространства
	if (office_on) type_price = 20; // админ. помещения

	// Дизайн-проект
	const design = $('#calc-design');
	design.prop('checked', true);
	const design_on = design.is(':checked') ? true : false;

	// Ведомость материалов
	const vedomost = $('#calc-vedomost');
	vedomost.prop('checked', true);
	const vedomost_on = vedomost.is(':checked') ? true : false;

	// Служба заказчика (контроль закупок)
	const slugba = $('#calc-slugba');
	const slugba_on = slugba.is(':checked') ? true : false;
	const slugba_price = slugba_on ? 4500 : 0;

	// Авторское сопровождение
	const author = $('#calc-author');
	if (slugba_on) {
		author.prop('checked', true);
	}
	const author_on = author.is(':checked') ? true : false;
	const author_price = author_on ? 1500 : 0;

	// Личное ведение проекта основателями студии
	const self = $('#calc-self');
	const self_on = self.is(':checked') ? true : false;

	// ИТОГО
	let total_price = square_value * type_price + author_price + slugba_price;

	if (self_on) total_price += total_price * 0.15; // если личное ведение проекта включено

	console.log('design_on = ' + design_on);
	console.log('vedomost_on = ' + vedomost_on);
	console.log('slugba_on = ' + slugba_on);
	console.log('author_on = ' + author_on);
	console.log('self_on = ' + self_on);
	console.log('total_price = ' + total_price);

	total_price = Math.round(total_price);

	// Подставляем ИТОГО в форму
	$('#calc-total').val(total_price);
	set_number_to('#calc-total-text', 0, total_price, 1500);
};
// END ------------------------

// ====================================================
// ВКЛЮЧАЕМ РАСЧЁТ
// ====================================================
const calc_square_input = document.querySelector('#calc-square');
const calc_checkboxes = document.querySelectorAll('.calc__checkbox .checkbox__input');

const calc_arch_on = document.querySelector('.calc--arch') ? true : false;
if (calc_arch_on) {
	calc_arch(); // при загрузке страницы
	calc_checkboxes.forEach(function(calc_checkbox) {
		calc_checkbox.addEventListener('change', function() {
			calc_arch(); // при изменении отмеченных работ
		});
	});
	calc_square_input.addEventListener('blur', function() {
		calc_arch(); // при расфокусировке поля площади
	});
	calc_square_input.addEventListener('keydown', function(event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			calc_square_input.blur(); // при нажатии Enter
		}
	});
}

const calc_design_on = document.querySelector('.calc--design') ? true : false;
if (calc_design_on) {
	calc_design(); // при загрузке страницы
	calc_checkboxes.forEach(function(calc_checkbox) {
		calc_checkbox.addEventListener('change', function() {
			calc_design(); // при изменении отмеченных работ
		});
	});
	calc_square_input.addEventListener('blur', function() {
		calc_design(); // при расфокусировке поля площади
	});
	calc_square_input.addEventListener('keydown', function(event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			calc_square_input.blur(); // при нажатии Enter
		}
	});
}
// END ------------------------
