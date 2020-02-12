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
// определение цены из промежутков
// ====================================================
const getPriceOfRange = function(square_ranges, price_ranges, square) {
	for (let i = 0; i < square_ranges.length; i++) {
		const square_range = square_ranges[i];
		const square_start = square_range[0];
		const square_end = square_range[1];
		if (square >= square_start && square < square_end) {
			const price_range = price_ranges[i];
			const price_start = price_range[0];
			const price_end = price_range[1];
			if (price_start === price_end) {
				return price_start;
			}
			const price_of_one_range = (price_start - price_end) / (square_end - square_start);
			const square_diff = square_end - square;
			return price_end + price_of_one_range * square_diff;
		}
	}
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

	// Визуализация
	const visual = $('#calc-visual');
	visual.prop('checked', true);

	const start_square_ranges = [
		[0, 100],
		[100, 200],
		[200, 250],
		[250, 350],
		[350, 500],
		[500, 1000],
		[1000, 1500],
		[1500, 3000],
		[3000, 6000],
		[6000, 12000],
		[12000, 24000],
		[24000, 35000],
		[35000, Infinity]
	];
	const start_price_ranges = [
		[30, 30],
		[30, 4500 / 200],
		[4500 / 200, 5100 / 250],
		[5100 / 250, 5800 / 350],
		[5800 / 350, 6600 / 500],
		[6600 / 500, 7500 / 1000],
		[7500 / 1000, 8000 / 1500],
		[8000 / 1500, 9000 / 3000],
		[9000 / 3000, 11000 / 6000],
		[11000 / 6000, 14000 / 12000],
		[14000 / 12000, 16000 / 24000],
		[16000 / 24000, 0.5],
		[0.5, 0.5]
	];

	const start_price = square_value * getPriceOfRange(start_square_ranges, start_price_ranges, square_value);

	// Макет
	const maket = $('#calc-maket');
	const maket_on = maket.is(':checked') ? true : false;
	const maket_price = maket_on ? 900 : 0;

	// Строительный проект
	const build = $('#calc-build');
	const build_on = build.is(':checked') ? true : false;

	const build_square_ranges = [
		[0, 100],
		[100, 150],
		[150, 200],
		[200, 250],
		[250, 350],
		[350, 500],
		[500, 1000],
		[1000, 1500],
		[1500, 3000],
		[3000, 6000],
		[6000, 12000],
		[12000, 24000],
		[24000, 35000],
		[35000, Infinity]
	];
	const build_price_ranges = [
		[30, 30],
		[30, 3500 / 150],
		[3500 / 150, 4000 / 200],
		[4000 / 200, 5000 / 250],
		[5000 / 250, 6000 / 350],
		[6000 / 350, 7000 / 500],
		[7000 / 500, 8000 / 1000],
		[8000 / 1000, 9000 / 1500],
		[9000 / 1500, 10000 / 3000],
		[10000 / 3000, 13000 / 6000],
		[13000 / 6000, 16000 / 12000],
		[16000 / 12000, 20000 / 24000],
		[20000 / 24000, 0.7],
		[0.7, 0.7]
	];

	const build_price = build_on ? square_value * getPriceOfRange(build_square_ranges, build_price_ranges, square_value) : 0;

	// Инженерные сети
	const ingeneer = $('#calc-ingeneer');
	const ingeneer_on = ingeneer.is(':checked') ? true : false;

	const ingeneer_square_ranges = [
		[0, 100],
		[100, 150],
		[150, 200],
		[200, 250],
		[250, 350],
		[350, 500],
		[500, 1000],
		[1000, 1500],
		[1500, 3000],
		[3000, 6000],
		[6000, 12000],
		[12000, 24000],
		[24000, 35000],
		[35000, Infinity]
	];
	const ingeneer_price_ranges = [
		[28, 28],
		[28, 3300 / 150],
		[3300 / 150, 3800 / 200],
		[3800 / 200, 4800 / 250],
		[4800 / 250, 5800 / 350],
		[5800 / 350, 6700 / 500],
		[6700 / 500, 7700 / 1000],
		[7700 / 1000, 8700 / 1500],
		[8700 / 1500, 9600 / 3000],
		[9600 / 3000, 12500 / 6000],
		[12500 / 6000, 15000 / 12000],
		[15000 / 12000, 19000 / 24000],
		[19000 / 24000, 0.6],
		[0.6, 0.6]
	];

	const ingeneer_price = ingeneer_on ? square_value * getPriceOfRange(ingeneer_square_ranges, ingeneer_price_ranges, square_value) : 0;

	// Авторский надзор
	const author = $('#calc-author');
	const author_on = author.is(':checked') ? true : false;
	const author_price = author_on ? 3000 : 0;

	// Служба заказчика
	const tech = $('#calc-tech');
	const tech_on = tech.is(':checked') ? true : false;
	const tech_price = tech_on ? 8000 : 0;

	// Личное ведение проекта основателями студии
	const self = $('#calc-self');
	const self_on = self.is(':checked') ? true : false;

	// ИТОГО
	let total_price = start_price + maket_price + build_price + ingeneer_price + author_price + tech_price;

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
	let type_price = 0;

	if (home_on) {
		// дом, квартира (плавное нарастание цены)
		const home_square_ranges = [
			[0, 100],
			[100, 150],
			[150, 300],
			[300, 600],
			[600, 1200],
			[1200, 2400],
			[2400, 4800],
			[4800, 6500],
			[6500, Infinity]
		];
		const home_price_ranges = [
			[80, 80],
			[80, 10500 / 150],
			[10500 / 150, 14000 / 300],
			[14000 / 300, 18000 / 600],
			[18000 / 600, 28000 / 1200],
			[28000 / 1200, 39000 / 2400],
			[39000 / 2400, 53000 / 4800],
			[53000 / 4800, 9],
			[9, 9]
		];
		type_price = getPriceOfRange(home_square_ranges, home_price_ranges, square_value);
	}

	if (social_on) {
		// общ. пространства
		const social_square_ranges = [
			[0, 200],
			[200, 350],
			[350, 400],
			[400, 500],
			[500, 750],
			[750, 1000],
			[1000, 1200],
			[1200, 2400],
			[2400, 4800],
			[4800, 6500],
			[6500, Infinity]
		];
		const social_price_ranges = [
			[35, 35],
			[35, 11000 / 350],
			[11000 / 350, 12500 / 400],
			[12500 / 400, 14000 / 500],
			[14000 / 500, 18000 / 750],
			[18000 / 750, 19000 / 1000],
			[19000 / 1000, 20000 / 1200],
			[20000 / 1200, 26000 / 2400],
			[26000 / 2400, 32000 / 4800],
			[32000 / 4800, 6],
			[6, 6]
		];
		type_price = getPriceOfRange(social_square_ranges, social_price_ranges, square_value);
	}

	if (office_on) {
		// админ. помещения
		const office_square_ranges = [
			[0, 750],
			[750, 1000],
			[1000, 2000],
			[2000, 3000],
			[3000, 6000],
			[6000, 8000],
			[8000, Infinity]
		];
		const office_price_ranges = [
			[20, 20],
			[20, 15000 / 1000],
			[15000 / 1000, 24000 / 2000],
			[24000 / 2000, 28000 / 3000],
			[28000 / 3000, 36000 / 6000],
			[36000 / 6000, 5],
			[5, 5]
		];
		type_price = getPriceOfRange(office_square_ranges, office_price_ranges, square_value);
	}

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
	const author_price = author_on ? 3000 : 0;

	// Личное ведение проекта основателями студии
	const self = $('#calc-self');
	const self_on = self.is(':checked') ? true : false;

	// ИТОГО
	let total_price = square_value * type_price + author_price + slugba_price;

	if (self_on) total_price += total_price * 0.15; // если личное ведение проекта включено

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
