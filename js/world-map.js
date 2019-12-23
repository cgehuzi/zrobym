// ====================================================
// Реализация блока world-map
// ====================================================

// функция создания контента в баллунах
const getBaloonContent = function(pin) {
	return '<div class="world-map__balloon">' + '<a class="world-map__balloon-item" href="' + pin['href'] + '">' + '<img class="world-map__balloon-image" src="' + pin['image'] + '">' + '<div class="world-map__balloon-title">' + pin['title'] + '</div>' + '<div class="world-map__balloon-desc">' + pin['desc'] + '</div>' + '</a>' + '</div>';
};

const map_init = function(map_params) {
	ymaps.ready(function() {
		const myMap = new ymaps.Map(
				map_params['id'], // находим блок, в котором создадим карту
				{
					center: map_params['mapCenter'], // координаты центральной точки на карте
					zoom: map_params['mapZoom'], // увеличение карты
					controls: []
				},
				{ searchControlProvider: 'yandex#search' }
			),
			objectManager = new ymaps.ObjectManager({
				// Чтобы метки начали кластеризоваться, выставляем опцию.
				clusterize: true,
				// ObjectManager принимает те же опции, что и кластеризатор.
				gridSize: 8,
				clusterDisableClickZoom: false
			});

		myMap.controls.add('zoomControl', {
			position: {
				top: 24,
				right: 24,
				bottom: 'auto',
				left: 'auto'
			}
		});

		// Чтобы задать опции одиночным объектам и кластерам,
		// обратимся к дочерним коллекциям ObjectManager.
		objectManager.objects.options.set({
			iconLayout: 'default#image',
			iconImageHref: 'assets/templates/zrobym/images/pin.png',
			iconImageSize: [34, 52],
			iconImageOffset: [-17, -51]
		});
		objectManager.clusters.options.set({
			clusterIconColor: '#000000'
		});
		myMap.geoObjects.add(objectManager);
		// myMap.behaviors.disable('scrollZoom');
		objectManager.add(map_params['mapPins']);
	});
};
// END ------------------------
