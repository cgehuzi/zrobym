// Наращивание цифры
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

/* JS для расчета стоимости */

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
	const concept_price = square_value * 21;

	// Визуализация
	const visual = $('#calc-visual');
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
	const author_price = author_on ? 1500 : 0;

	// Технический надзор
	const tech = $('#calc-tech');
	const tech_on = tech.is(':checked') ? true : false;
	const tech_price = tech_on ? 1500 : 0;

	// Личное ведение проекта основателями студии
	const self = $('#calc-self');
	const self_on = self.is(':checked') ? true : false;

	// ИТОГО
	let total_price = concept_price + visual_price + maket_price + build_price + ingeneer_price + author_price + tech_price;

	total_price *= 0.8; // умножаем на общий коэффициент

	if (maket_on && build_on && ingeneer_on && author_on && tech_on) {
		total_price *= 0.85; // если отмечены все, кроме личного ведения проекта
	}

	if (self_on) {
		total_price += total_price * 0.15; // если личное ведение проекта включено
	}

	total_price = Math.round(total_price);

	// Подставляем ИТОГО в форму
	$('#calc-total').val(total_price);
	set_number_to('#calc-total-text', 0, total_price, 1500);
};

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

/* JS для расчета стоимости интерьера */

/**
 * Интерполяция
 * @param m2_ras double площадь цену которой необходимо найти
 * @param m2_min double нижняя граница площади
 * @param dol_min double цена нижней границы площади
 * @param m2_max double площадь верхней площади
 * @param dol_max double цена верхней границы площади
 * @returns {*}
 */
function interpolation(m2_ras, m2_min, dol_min, m2_max, dol_max) {
	return dol_min + ((m2_ras - m2_min) / (m2_max - m2_min)) * (dol_max - dol_min);
}

/**
 * Калькуляция интерьера
 * @param doc
 */
function calculateInt(doc) {
	var cellHome = $('#home');
	var cellSocial = $('#social');
	var cellOffice = $('#office');

	if (cellHome.is(':checked')) {
		var inputCellValue = 75;
	}
	if (cellSocial.is(':checked')) {
		var inputCellValue = 100;
	}
	if (cellOffice.is(':checked')) {
		var inputCellValue = 500;
	}

	var cellInput = $('#inputCell');
	var cellDesign = $('#design');
	var cellVedomost = $('#vedomost');
	var cellAuthor = $('#author');
	var cellSlugba = $('#slugba');
	var cellSelf = $('#self');

	// Если площадь меньше 50 устанавливаем по умолчанию 50
	if (cellInput.val() < inputCellValue) {
		cellInput.val(inputCellValue);
		$('#attention').fadeIn();
		$('#attentionInner').html(inputCellValue);
	} else {
		inputCellValue = cellInput.val();
	}

	var cooficient = inputCellValue < 100 ? interpolation(inputCellValue, 100, 1, 50, 1.2) : inputCellValue == 100 ? 1 : inputCellValue >= 150 ? 0.9 : interpolation(inputCellValue, 150, 0.9, 100, 1);

	// СПИСОК ИСПОЛЬЗОВАННЫХ МАТЕРИАЛОВ
	var bomCoefficient = 6;
	// КОНЦЕПЦИЯ
	var conceptCoefficient = 60 * cooficient;
	// СКИДКА ПРИ ВЫБОРЕ ВСЕХ ПУНКТОВ
	var totalCoefficient = 0.9;
	// АВТОРСКОЕ СОПРОВОЖДЕНИЕ
	var authorPrice = 1500;
	var slugbaPrice = 2500;
	var total = 0;

	// Цена из суммы всех пунктов
	var price = 0;

	if (cellHome.is(':checked')) {
		if (inputCellValue < 100) {
			price = 80;
		} else {
			if (inputCellValue < 150) {
				price = Math.round(80 - (inputCellValue - 100) / 5);
			} else {
				price = 60;
				if (inputCellValue < 200) {
					price = Math.round(70 - (inputCellValue - 150) / 5);
				}
			}
		}
	}
	if (cellSocial.is(':checked')) {
		price = 35;
	}
	if (cellOffice.is(':checked')) {
		price = 20;
	}

	// СУММА
	total = inputCellValue * price;

	// Если СЛУЖБА ЗАКАЗЧИКА включено
	if (cellSlugba.is(':checked')) {
		cellAuthor.prop('checked', true);
		total = total + slugbaPrice;
	}

	// Если АВТОРСКОЕ СОПРОВОЖДЕНИЕ включено
	if (cellAuthor.is(':checked')) {
		total = total + authorPrice;
	}

	// Если Личное ведение проекта основателями студии включено
	if (cellSelf.is(':checked')) {
		total += total * 0.15;
	}

	// Вывод в поле
	// $('#outputCell').val(Math.round(total));
	set_number_to('#outputCell', 0, Math.round(total), 2000);
}
