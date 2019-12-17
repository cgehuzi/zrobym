# zrobym

## evoBabel

### Установка и настройка админки

1. Устанавливаем evoBabael из Extras

2. Создаём шаблон языковой версии  
   `будет присваиваться корневым папкам языков`

3. Создаём корневые папки языков

   - `alias` — url-префикс
   - `pagetitle` — название (для админки)
   - `longtitle` — название (для переключателя на сайте)

4. Настраиваем TV-параметр для связи  
   `присваиваем параметр "relation" всем шаблонам, кроме языков (п.2)`  
   _**`!!!`** - открепляем его от категории "MultiLang", чтобы не выводило вкладку в ресурсах_

5. Настраиваем конфигурацию модуля "evoBabelLexicon"

   - шаблон языка — п.2
   - TV языковых связей — п.4

6. Настраиваем редиректы на главные страницы  
   `в корневой папке в поле "description" указать ID главной страницы`

   - язык по-умолчанию — тот, у которого в "description" указан ID главной страницы (из конфигурации админки)  
     _**`!!!`** - для ресурсов этого языка url-префикс ("alias") будет опущен_

### Использование на сайте

1. Создать в модуле набор языков, как в корне сайта

2. Добавить ключ в модуле  
   `Например "lang_code" — для атрибута "lang" в теге <html>`

3. Вывести ключ на странице  
   `Например <html lang="[%config_lang_code%]">`

   - `[%config_lang_code%]` — короткая запись (благодаря плагину evoBabelPlaceholder)
   - `[[lang? &a='config_lang_code']]` — длинная запись

4. Задать основные ключи для каждого из языков

   - `Корневая папка` — ID корневой папки
   - `Главная страница` — ID главной страницы
   - `Страница не найдена` — ID страницы ошибки 404

5. Задать доп. ключи для каждого из языков

   - `config_lang_code` — Код языка (для атрибута "lang" в теге "html")  
     [Список кодов](http://htmlbook.ru/html/value/lang)
   - `config_last_mod` — Дата последнего изменения JS / CSS
   - `id_static` — Статическая информация
   - `id_main` — Главная
   - `id_office` — Наш офис | Шоурум
   - `id_team` — О нас
   - `id_vacancy` — Ищем сотрудника
   - `id_realize` — Реализованные проекты
   - `id_arch` — Архитектура
   - `id_arch_list` — Архитектура : проекты
   - `id_arch_calc` — Архитектура : расчёт
   - `id_design` — Дизайн
   - `id_design_appartment` — Дизайн : квартира
   - `id_design_cottage` — Дизайн : коттедж
   - `id_design_social` — Дизайн : общественное пространство
   - `id_design_calc` — Дизайн : расчёт
   - `id_furniture` — Мебель
   - `id_furniture_light` — Мебель : Свет
   - `id_furniture_sofa` — Мебель : Диваны, кровати
   - `id_furniture_chair` — Мебель : Стулья, кресла, лавки
   - `id_furniture_table` — Мебель : Столы
   - `id_furniture_cabinet` — Мебель : Корпусная мебель
   - `id_press` — Пресса
   - `id_contact` — Контакты

### Настройка переключателя на сайте

1. Изменить чанки вывода

   1. изменить исходную конфигурацию  
      `assets/snippets/evoBabel/config/config.php`

   2. создать отдельный php-файл и указать его в конфигурации плагина "evoBabel"  
      `assets/templates/zrobym/php/menu__lang.config.php`

   ```php
        <?php
        if (!defined('MODX_BASE_PATH')) {
            die('What are you doing? Get out of here!');
        }

        //активный язык отдельно от списка
        $activeLang = '[+name+]';

        //активный язык в списке
        $activeRow = '<li class="menu__lang-point">[+name+]</li>';

        //неактивный язык списка
        $unactiveRow = '<li class="menu__lang-point"><a href="[+url+]" class="menu__lang-link">[+name+]</a></li>';

        //обертка списка языков
        $langOuter = '<ul class="menu__lang">[+wrapper+]</ul>';
   ```

   - `[+wrapper+]` — обёртка
   - `[+name+]` — longtitle (п.3)
   - `[+alias+]` — alias (п.3)
   - `[+url+]` — ссылка на эту же страницу у другого языка

2. Вывести на сайте
   - `[+activeLang+]` — текущий язык
   - `[+switchLang+]` — переключатель языков

### Исправление ошибок 404

1. Добавить ключ для 404 страницы в модуле  
   ``

В коде плагина "evoBabel" производим следующее:

```php
// эти строки :
$modx->sendRedirect($modx->makeUrl($docid), 0, 'REDIRECT_HEADER', 'HTTP/1.0 404 Not Found');exit();

// заменяем на эту :
$modx->sendForward($docid);exit();
```

## Список проектов

от ранее добавленных к более новым

### Наши проекты

```js
[
	{
		pagetitle: 'Modern wood house',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: ' 54.21753, 27.54676',
		project_map_yes: 1,
		project_year: 2019,
		album: 59,
		link: 'http://zrobym.by/nashi-proekty-domov/modern-wood-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2579'
	},
	{
		pagetitle: 'Wine House',
		project_subtitle: 'Реконструкция фасада дома ',
		project_type: 'Реконструкция||Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '54.004283, 27.880173',
		project_map_yes: 1,
		project_year: 2019,
		album: 60,
		link: 'http://zrobym.by/nashi-proekty-domov/wine-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2580'
	},
	{
		pagetitle: 'Medical center',
		project_subtitle: '',
		project_type: 'Общественные здания||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.909306, 27.519067',
		project_map_yes: 1,
		project_year: 2019,
		album: 61,
		link: 'http://zrobym.by/nashi-proekty-domov/medical-center.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2581'
	},
	{
		pagetitle: 'Salihorsk pavilion',
		project_subtitle: '',
		project_type: 'Общественные здания||Архитектура',
		project_realize: 1,
		project_map_coordinates: '52.784124, 27.540579',
		project_map_yes: 1,
		project_year: 2019,
		album: 62,
		link: 'http://zrobym.by/nashi-proekty-domov/salihorsk-pavilion.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2582'
	},
	{
		pagetitle: 'BAU HOUSE',
		project_subtitle: 'Дизайн дома',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '54.019725, 27.853420',
		project_map_yes: 1,
		project_year: 2019,
		album: 63,
		link: 'http://zrobym.by/nashi-proekty-domov/bau-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2583'
	},
	{
		pagetitle: 'Monkey food',
		project_subtitle: 'Fast food',
		project_type: 'Общественные здания||Архитектура',
		project_realize: 1,
		project_map_coordinates: '53.891619, 27.570644',
		project_map_yes: 1,
		project_year: 2019,
		album: 64,
		link: 'http://zrobym.by/nashi-proekty-domov/monkey-food.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2584'
	},
	{
		pagetitle: 'White House',
		project_subtitle: 'Дизайн дома',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '54.167350, 27.824550',
		project_map_yes: 1,
		project_year: 2019,
		album: 65,
		link: 'http://zrobym.by/nashi-proekty-domov/white-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2585'
	},
	{
		pagetitle: 'RELIEF HOUSE',
		project_subtitle: 'Дизайн дома',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.995560, 27.681940',
		project_map_yes: 1,
		project_year: 2019,
		album: 66,
		link: 'http://zrobym.by/nashi-proekty-domov/relief-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2586'
	},
	{
		pagetitle: 'REC HOUSE',
		project_subtitle: 'Реконструкция фасада дома ',
		project_type: 'Реконструкция||Частные дома||Архитектура',
		project_realize: 1,
		project_map_coordinates: '54.016110, 27.457751',
		project_map_yes: 1,
		project_year: 2019,
		album: 67,
		link: 'http://zrobym.by/nashi-proekty-domov/rec-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2587'
	},
	{
		pagetitle: 'TILTED HOUSE',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.9456527, 27.7735109',
		project_map_yes: 1,
		project_year: 2019,
		album: 68,
		link: 'http://zrobym.by/nashi-proekty-domov/tilted-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2588'
	},
	{
		pagetitle: 'ЭКСПО-2020',
		project_subtitle: '',
		project_type: 'Общественные здания||Архитектура',
		project_realize: 0,
		project_map_coordinates: '25.0657000, 55.1712800',
		project_map_yes: 1,
		project_year: 2018,
		album: 69,
		link: 'http://zrobym.by/nashi-proekty-domov/ekspo-2020.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2589'
	},
	{
		pagetitle: 'CNA HOUSE',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.987558, 27.586113',
		project_map_yes: 1,
		project_year: 2019,
		album: 70,
		link: 'http://zrobym.by/nashi-proekty-domov/cna-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2590'
	},
	{
		pagetitle: 'MATSKI HOUSE',
		project_subtitle: 'Проект дома',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '54.082873, 27.332958',
		project_map_yes: 1,
		project_year: 2019,
		album: 71,
		link: 'http://zrobym.by/nashi-proekty-domov/matski-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2591'
	},
	{
		pagetitle: 'Kindergarten',
		project_subtitle: 'Разработка фасадов детского сада ',
		project_type: 'Общественные здания||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.947097, 27.332213',
		project_map_yes: 1,
		project_year: 2018,
		album: 81,
		link: 'http://zrobym.by/nashi-proekty-domov/kindergarten.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2592'
	},
	{
		pagetitle: 'Реконструкция здания tomography',
		project_subtitle: '',
		project_type: 'Реконструкция||Архитектура||Общественные здания',
		project_realize: 1,
		project_map_coordinates: '53.878718, 27.633238',
		project_map_yes: 1,
		project_year: 2018,
		album: 82,
		link: 'http://zrobym.by/nashi-proekty-domov/rekonstrukcziya-zdaniya-tomography.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2593'
	},
	{
		pagetitle: '189 HOUSE',
		project_subtitle: 'Дизайн дома',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.145889, 29.224702',
		project_map_yes: 1,
		project_year: 2018,
		album: 83,
		link: 'http://zrobym.by/nashi-proekty-domov/189-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2594'
	},
	{
		pagetitle: 'L-HOUSE',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '54.136307, 27.530552',
		project_map_yes: 1,
		project_year: 2018,
		album: 84,
		link: 'http://zrobym.by/nashi-proekty-domov/l-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2595'
	},
	{
		pagetitle: 'Архитектурный проект дома FLYING HOUSE',
		project_subtitle: 'Проект дома',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '54.062216, 27.553055',
		project_map_yes: 1,
		project_year: 2018,
		album: 85,
		link: 'http://zrobym.by/nashi-proekty-domov/arxitekturnyij-proekt-doma-flying-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2596'
	},
	{
		pagetitle: '#ПРОСТОКОСМОС',
		project_subtitle: 'Проект жилого квартала',
		project_type: 'Квартальная застройка||Архитектура',
		project_realize: 0,
		project_map_coordinates: '55.125056, 36.577212',
		project_map_yes: 1,
		project_year: 2018,
		album: 86,
		link: 'http://zrobym.by/nashi-proekty-domov/prostokosmos.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2597'
	},
	{
		pagetitle: 'Архитектурный проект дома ZATSEN',
		project_subtitle: '',
		project_type: 'Частные дома',
		project_realize: 0,
		project_map_coordinates: '53.958680, 27.508443',
		project_map_yes: 1,
		project_year: 2018,
		album: 150,
		link: 'http://zrobym.by/nashi-proekty-domov/arxitekturnyij-proekt-doma-zatsen.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2598'
	},
	{
		pagetitle: 'MARK HOUSE',
		project_subtitle: 'проект частного дома',
		project_type: 'Реконструкция||Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: '54.085208, 27.602857',
		project_map_yes: 1,
		project_year: 2018,
		album: 151,
		link: 'http://zrobym.by/nashi-proekty-domov/proekt-chastnogo-doma-mark-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2599'
	},
	{
		pagetitle: 'FORrest',
		project_subtitle: '',
		project_type: 'Квартальная застройка||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.955061, 27.664670',
		project_map_yes: 1,
		project_year: 2018,
		album: 152,
		link: 'http://zrobym.by/nashi-proekty-domov/forrest.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2600'
	},
	{
		pagetitle: 'проект частного дома GALITSA',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '54.093547, 27.659640',
		project_map_yes: 1,
		project_year: 2018,
		album: 153,
		link: 'http://zrobym.by/nashi-proekty-domov/proekt-chastnogo-doma-galitsa.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2601'
	},
	{
		pagetitle: 'KORDIS EXTERIOR',
		project_subtitle: '',
		project_type: 'Общественные здания||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.873319, 27.558561',
		project_map_yes: 1,
		project_year: 2018,
		album: 154,
		link: 'http://zrobym.by/nashi-proekty-domov/kordis-exterior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2602'
	},
	{
		pagetitle: 'Архитектурный проект VESNINKA',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.943260, 27.476797',
		project_map_yes: 1,
		project_year: 2017,
		album: 155,
		link: 'http://zrobym.by/nashi-proekty-domov/arxitekturnyij-proekt-vesninka.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2603'
	},
	{
		pagetitle: 'ZHD HOUSE',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.969512, 27.427811',
		project_map_yes: 1,
		project_year: 2018,
		album: 156,
		link: 'http://zrobym.by/nashi-proekty-domov/zhd-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2604'
	},
	{
		pagetitle: 'kastryčnickaja',
		project_subtitle: '',
		project_type: 'Общественные здания||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.903324, 27.560259',
		project_map_yes: 1,
		project_year: 2018,
		album: 157,
		link: 'http://zrobym.by/nashi-proekty-domov/kastrycnickaja.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2605'
	},
	{
		pagetitle: 'Архитектурный проект DRRZD',
		project_subtitle: '',
		project_type: 'Реконструкция||Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.988834, 27.623968',
		project_map_yes: 1,
		project_year: 2018,
		album: 165,
		link: 'http://zrobym.by/nashi-proekty-domov/arxitekturnyij-proekt-drrzd.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2606'
	},
	{
		pagetitle: 'Фасады MF',
		project_subtitle: '',
		project_type: 'Общественные здания||Архитектура',
		project_realize: 0,
		project_map_coordinates: '54.005275, 27.280572',
		project_map_yes: 1,
		project_year: 2018,
		album: 164,
		link: 'http://zrobym.by/nashi-proekty-domov/fasadyi-mf.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2607'
	},
	{
		pagetitle: 'Gedupės gatvė',
		project_subtitle: '',
		project_type: 'Квартальная застройка||Архитектура',
		project_realize: 0,
		project_map_coordinates: '54.7165995, 25.1739504',
		project_map_yes: 1,
		project_year: 2016,
		album: 163,
		link: 'http://zrobym.by/nashi-proekty-domov/gedupes-gatve.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2608'
	},
	{
		pagetitle: 'DREAM HOUSE',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '',
		project_map_yes: 0,
		project_year: 2018,
		album: 162,
		link: 'http://zrobym.by/nashi-proekty-domov/dream-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2609'
	},
	{
		pagetitle: 'Архитектурный проект STRONG HOUSE',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '',
		project_map_yes: 0,
		project_year: 2017,
		album: 161,
		link: 'http://zrobym.by/nashi-proekty-domov/arxitekturnyij-proekt-strong-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2610'
	},
	{
		pagetitle: 'Архитектурный проект SQUARE HOUSE',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '',
		project_map_yes: 0,
		project_year: 2017,
		album: 160,
		link: 'http://zrobym.by/nashi-proekty-domov/arxitekturnyij-proekt-square-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2611'
	},
	{
		pagetitle: 'HD HOUSE',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '',
		project_map_yes: 0,
		project_year: 2018,
		album: 159,
		link: 'http://zrobym.by/nashi-proekty-domov/hd-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2612'
	},
	{
		pagetitle: 'Архитектурный проект GUBICA',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '55.310160, 29.542095',
		project_map_yes: 1,
		project_year: 2018,
		album: 158,
		link: 'http://zrobym.by/nashi-proekty-domov/arxitekturnyij-proekt-gubica.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2613'
	},
	{
		pagetitle: 'LYASKOUKA',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.999431, 27.720141',
		project_map_yes: 1,
		project_year: 2017,
		album: 166,
		link: 'http://zrobym.by/nashi-proekty-domov/lyaskouka.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2725'
	},
	{
		pagetitle: 'BABYCENTER',
		project_subtitle: '',
		project_type: 'Архитектура||Общественные здания',
		project_realize: 0,
		project_map_coordinates: '53.874508, 27.495607',
		project_map_yes: 1,
		project_year: 2017,
		album: 167,
		link: 'http://zrobym.by/nashi-proekty-domov/babycenter.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2726'
	},
	{
		pagetitle: 'Архитектурный проект дома TEENY HOUSE',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.879121, 27.515280',
		project_map_yes: 1,
		project_year: 2017,
		album: 168,
		link: 'http://zrobym.by/nashi-proekty-domov/arxitekturnyij-proekt-doma-teeny-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2727'
	},
	{
		pagetitle: 'Архитектурный проект дома SUMMER HOUSE',
		project_subtitle: '',
		project_type: 'Архитектура||Частные дома',
		project_realize: 1,
		project_map_coordinates: '54.099149, 27.195013',
		project_map_yes: 1,
		project_year: 2017,
		album: 169,
		link: 'http://zrobym.by/nashi-proekty-domov/arxitekturnyij-proekt-doma-summer-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2728'
	},
	{
		pagetitle: 'MYTHOLOGICAL MUSEUM',
		project_subtitle: '',
		project_type: 'Архитектура||Общественные здания',
		project_realize: 1,
		project_map_coordinates: '54.762231, 28.321806',
		project_map_yes: 1,
		project_year: 2017,
		album: 170,
		link: 'http://zrobym.by/nashi-proekty-domov/mythological-museum.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2729'
	},
	{
		pagetitle: 'MARILY HOUSE',
		project_subtitle: 'Архитектурный проект дома ',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: '54.041575, 27.661445',
		project_map_yes: 1,
		project_year: 2017,
		album: 171,
		link: 'http://zrobym.by/nashi-proekty-domov/arxitekturnyij-proekt-doma-marily-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2730'
	},
	{
		pagetitle: 'Project 18',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.531205, 28.030985',
		project_map_yes: 1,
		project_year: 2017,
		album: 172,
		link: 'http://zrobym.by/nashi-proekty-domov/project-18.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2731'
	},
	{
		pagetitle: 'дом tresk-house',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.912733, 27.095641',
		project_map_yes: 1,
		project_year: 2017,
		album: 173,
		link: 'http://zrobym.by/nashi-proekty-domov/dom-tresk-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2732'
	},
	{
		pagetitle: 'дом smuga',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 1,
		project_map_coordinates: '53.713094, 27.686934',
		project_map_yes: 1,
		project_year: 2015,
		album: 174,
		link: 'http://zrobym.by/nashi-proekty-domov/dom-smuga.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2733'
	},
	{
		pagetitle: 'BATHS&WORKSHOP',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.708032, 27.036910',
		project_map_yes: 1,
		project_year: 2016,
		album: 175,
		link: 'http://zrobym.by/nashi-proekty-domov/baths-i-workshop.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2734'
	},
	{
		pagetitle: 'BRVLNY',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.994429, 27.672530',
		project_map_yes: 1,
		project_year: 2017,
		album: 176,
		link: 'http://zrobym.by/nashi-proekty-domov/brvlny.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2738'
	},
	{
		pagetitle: 'LEO-HOUSE',
		project_subtitle: '',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: '54.709136, 25.241255',
		project_map_yes: 1,
		project_year: 2017,
		album: 177,
		link: 'http://zrobym.by/nashi-proekty-domov/leo-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2739'
	},
	{
		pagetitle: 'VESNINKA #2',
		project_subtitle: '',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: '53.943260, 27.476797',
		project_map_yes: 1,
		project_year: 2017,
		album: 178,
		link: 'http://zrobym.by/nashi-proekty-domov/vesninka-2.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2740'
	},
	{
		pagetitle: 'ECOPARK',
		project_subtitle: '',
		project_type: 'Архитектура||Квартальная застройка',
		project_realize: 0,
		project_map_coordinates: '54.532965, 36.167350',
		project_map_yes: 1,
		project_year: 2017,
		album: 179,
		link: 'http://zrobym.by/nashi-proekty-domov/ecopark.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2741'
	},
	{
		pagetitle: 'дом BATHHOUSE',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.747027, 27.569844',
		project_map_yes: 1,
		project_year: 2017,
		album: 180,
		link: 'http://zrobym.by/nashi-proekty-domov/dom-bathhouse.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2742'
	},
	{
		pagetitle: 'Velga 4',
		project_subtitle: '',
		project_type: 'Архитектура||Квартальная застройка',
		project_realize: 0,
		project_map_coordinates: '54.672487, 25.235572',
		project_map_yes: 1,
		project_year: 2016,
		album: 181,
		link: 'http://zrobym.by/nashi-proekty-domov/velga-4.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2743'
	},
	{
		pagetitle: 'дом baranavichi 2.0',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.132368, 26.017609',
		project_map_yes: 1,
		project_year: 2017,
		album: 182,
		link: 'http://zrobym.by/nashi-proekty-domov/dom-baranavichi-2.0.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2744'
	},
	{
		pagetitle: 'дом bird house',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '',
		project_map_yes: 0,
		project_year: 2015,
		album: 183,
		link: 'http://zrobym.by/nashi-proekty-domov/dom-bird-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2745'
	},
	{
		pagetitle: 'дом longhouse',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.997795, 27.101094',
		project_map_yes: 1,
		project_year: 2015,
		album: 184,
		link: 'http://zrobym.by/nashi-proekty-domov/dom-longhouse.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2746'
	},
	{
		pagetitle: 'holmy',
		project_subtitle: 'Модульный поселок',
		project_type: 'Архитектура||Квартальная застройка',
		project_realize: 0,
		project_map_coordinates: '53.862064, 27.204859',
		project_map_yes: 1,
		project_year: 2016,
		album: 185,
		link: 'http://zrobym.by/nashi-proekty-domov/modulnyij-poselok-holmy.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2747'
	},
	{
		pagetitle: 'дом balthouse',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.939052, 27.335168',
		project_map_yes: 1,
		project_year: 2014,
		album: 186,
		link: 'http://zrobym.by/nashi-proekty-domov/dom-balthouse.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2748'
	},
	{
		pagetitle: 'дом 28 house',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '54.002003, 27.523311',
		project_map_yes: 1,
		project_year: 2016,
		album: 187,
		link: 'http://zrobym.by/nashi-proekty-domov/dom-28-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2749'
	},
	{
		pagetitle: 'poligonal house',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.685209, 27.131493',
		project_map_yes: 1,
		project_year: 2016,
		album: 188,
		link: 'http://zrobym.by/nashi-proekty-domov/poligonal-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2750'
	},
	{
		pagetitle: 'дом rectanglehouse',
		project_subtitle: '',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: ' 54.004485, 27.291241',
		project_map_yes: 1,
		project_year: 2014,
		album: 189,
		link: 'http://zrobym.by/nashi-proekty-domov/dom-rectanglehouse.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2751'
	},
	{
		pagetitle: 'energohouse',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 1,
		project_map_coordinates: '53.981194, 27.333928',
		project_map_yes: 1,
		project_year: 2014,
		album: 190,
		link: 'http://zrobym.by/nashi-proekty-domov/energohouse.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2752'
	},
	{
		pagetitle: 'Дизайн проект дома mod house',
		project_subtitle: '',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: '53.735956, 27.226885',
		project_map_yes: 1,
		project_year: 2015,
		album: 191,
		link: 'http://zrobym.by/nashi-proekty-domov/dizajn-proekt-doma-mod-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2753'
	},
	{
		pagetitle: 'cmyk',
		project_subtitle: 'Cерия модульных домов',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '',
		project_map_yes: 0,
		project_year: 2014,
		album: 192,
		link: 'http://zrobym.by/nashi-proekty-domov/ceriya-modulnyix-domov-cmyk.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2754'
	},
	{
		pagetitle: 'Landscape house',
		project_subtitle: '',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: '54.010401, 27.440253',
		project_map_yes: 1,
		project_year: 2015,
		album: 193,
		link: 'http://zrobym.by/nashi-proekty-domov/landscape-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2755'
	},
	{
		pagetitle: 'modul 3',
		project_subtitle: 'Проект дома',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: '',
		project_map_yes: 0,
		project_year: 2015,
		album: 194,
		link: 'http://zrobym.by/nashi-proekty-domov/proekt-doma-modul-3.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2756'
	},
	{
		pagetitle: 'i_house',
		project_subtitle: 'Дизайн проект дома',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: '53.971339, 27.661481',
		project_map_yes: 1,
		project_year: 2015,
		album: 195,
		link: 'http://zrobym.by/nashi-proekty-domov/dizajn-proekt-doma-i-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2757'
	},
	{
		pagetitle: '137 house',
		project_subtitle: 'Проект дома',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.999431, 27.720141',
		project_map_yes: 1,
		project_year: 2015,
		album: 196,
		link: 'http://zrobym.by/nashi-proekty-domov/proekt-doma-137-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2758'
	},
	{
		pagetitle: 'villa mm',
		project_subtitle: 'Проект дома',
		project_type: 'Архитектура||Общественные здания',
		project_realize: 0,
		project_map_coordinates: '54.002003, 27.523311',
		project_map_yes: 1,
		project_year: 2016,
		album: 197,
		link: 'http://zrobym.by/nashi-proekty-domov/proekt-doma-villa-mm.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2759'
	},
	{
		pagetitle: 'project 67',
		project_subtitle: 'Проект дома',
		project_type: 'Частные дома||Архитектура||Реконструкция',
		project_realize: 0,
		project_map_coordinates: '54.085208, 27.602857',
		project_map_yes: 1,
		project_year: 2015,
		album: 198,
		link: 'http://zrobym.by/nashi-proekty-domov/proekt-doma-project-67.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2760'
	},
	{
		pagetitle: 'ramp house',
		project_subtitle: 'Проект дома',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.387641, 27.461157',
		project_map_yes: 1,
		project_year: 2016,
		album: 199,
		link: 'http://zrobym.by/nashi-proekty-domov/proekt-doma-ramp-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2761'
	},
	{
		pagetitle: 'Place of relax',
		project_subtitle: 'дизайн проект пространства',
		project_type: 'Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.405553, 27.388693',
		project_map_yes: 1,
		project_year: 2016,
		album: 200,
		link: 'http://zrobym.by/nashi-proekty-domov/place-of-relax.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2762'
	},
	{
		pagetitle: 'sasnovaya',
		project_subtitle: 'Проект дома',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: '54.020701, 27.851412',
		project_map_yes: 1,
		project_year: 2016,
		album: 201,
		link: 'http://zrobym.by/nashi-proekty-domov/proekt-doma-sasnovaya.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2763'
	},
	{
		pagetitle: 'Kvartal-r',
		project_subtitle: '',
		project_type: 'Архитектура||Квартальная застройка',
		project_realize: 0,
		project_map_coordinates: '53.939052, 27.335168',
		project_map_yes: 1,
		project_year: 2016,
		album: 202,
		link: 'http://zrobym.by/nashi-proekty-domov/kvartal-r.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2764'
	},
	{
		pagetitle: 'baranavichi',
		project_subtitle: 'Проект дома',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: '53.132368, 26.017609',
		project_map_yes: 1,
		project_year: 2016,
		album: 203,
		link: 'http://zrobym.by/nashi-proekty-domov/proekt-doma-baranavichi.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2765'
	},
	{
		pagetitle: 'Row house',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.939052, 27.335168',
		project_map_yes: 1,
		project_year: 2017,
		album: 204,
		link: 'http://zrobym.by/nashi-proekty-domov/row-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2766'
	},
	{
		pagetitle: 'Гостиничный комплекс на браславских озерах',
		project_subtitle: '',
		project_type: 'Архитектура||Общественные здания',
		project_realize: 0,
		project_map_coordinates: '55.693120, 27.145210',
		project_map_yes: 1,
		project_year: 2016,
		album: 205,
		link: 'http://zrobym.by/nashi-proekty-domov/gostinichnyij-kompleks-na-braslavskix-ozerax.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2767'
	},
	{
		pagetitle: 'дом grid house',
		project_subtitle: '',
		project_type: 'Архитектура||Частные дома||Реконструкция',
		project_realize: 1,
		project_map_coordinates: '54.063072, 27.768129',
		project_map_yes: 1,
		project_year: 2016,
		album: 206,
		link: 'http://zrobym.by/nashi-proekty-domov/dom-grid-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2768'
	},
	{
		pagetitle: 'miori house',
		project_subtitle: 'Проект дома',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '55.618390, 27.628531',
		project_map_yes: 1,
		project_year: 2016,
		album: 207,
		link: 'http://zrobym.by/nashi-proekty-domov/proekt-doma-miori-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2769'
	},
	{
		pagetitle: 'Проект miori gast house',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '55.618390, 27.628531',
		project_map_yes: 1,
		project_year: 2016,
		album: 208,
		link: 'http://zrobym.by/nashi-proekty-domov/proekt-miori-gast-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2770'
	},
	{
		pagetitle: 'HOUSE M1',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '56.168210, 37.591467',
		project_map_yes: 1,
		project_year: 2017,
		album: 209,
		link: 'http://zrobym.by/nashi-proekty-domov/house-m1.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2771'
	},
	{
		pagetitle: 'lake house',
		project_subtitle: 'Проект дома',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: ' 53.720544, 28.122973',
		project_map_yes: 1,
		project_year: 2016,
		album: 210,
		link: 'http://zrobym.by/nashi-proekty-domov/proekt-doma-lake-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2772'
	},
	{
		pagetitle: 'Summer cafe',
		project_subtitle: '',
		project_type: 'Общественные здания||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.387641, 27.461157',
		project_map_yes: 1,
		project_year: 2015,
		album: 211,
		link: 'http://zrobym.by/nashi-proekty-domov/summer-cafe.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2773'
	},
	{
		pagetitle: 'дом house-a exterior',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 1,
		project_map_coordinates: '54.146848, 27.903692',
		project_map_yes: 1,
		project_year: 2015,
		album: 212,
		link: 'http://zrobym.by/nashi-proekty-domov/dom-house-a-exterior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2774'
	},
	{
		pagetitle: 'Austrian house',
		project_subtitle: '',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: '47.991333, 13.129111',
		project_map_yes: 1,
		project_year: 2019,
		album: 76,
		link: 'http://zrobym.by/nashi-proekty-domov/austrian-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2804'
	},
	{
		pagetitle: 'RE.COVER HOUSE',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура||Реконструкция',
		project_realize: 0,
		project_map_coordinates: '53.938564, 27.342128',
		project_map_yes: 1,
		project_year: 2019,
		album: 77,
		link: 'http://zrobym.by/nashi-proekty-domov/re.cover-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2805'
	},
	{
		pagetitle: 'Slope house',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.999154, 27.101100',
		project_map_yes: 1,
		project_year: 2019,
		album: 78,
		link: 'http://zrobym.by/nashi-proekty-domov/slope-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2806'
	},
	{
		pagetitle: 'River house',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.926331, 27.260710',
		project_map_yes: 1,
		project_year: 2019,
		album: 79,
		link: 'http://zrobym.by/nashi-proekty-domov/river-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2807'
	},
	{
		pagetitle: 'Sunica house',
		project_subtitle: '',
		project_type: 'Частные дома||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.947973, 27.302187',
		project_map_yes: 1,
		project_year: 2019,
		album: 80,
		link: 'http://zrobym.by/nashi-proekty-domov/sunica-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2808'
	},
	{
		pagetitle: "90's house",
		project_subtitle: '',
		project_type: 'Архитектура||Частные дома||Реконструкция',
		project_realize: 0,
		project_map_coordinates: '53.994596, 27.684653',
		project_map_yes: 1,
		project_year: 2019,
		album: 253,
		link: 'http://zrobym.by/nashi-proekty-domov/90s-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2812'
	},
	{
		pagetitle: 'Teplica house',
		project_subtitle: '',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: '53.920369, 27.646034',
		project_map_yes: 1,
		project_year: 2019,
		album: 254,
		link: 'http://zrobym.by/nashi-proekty-domov/teplica-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2813'
	},
	{
		pagetitle: 'Bud house',
		project_subtitle: '',
		project_type: 'Архитектура||Частные дома',
		project_realize: 0,
		project_map_coordinates: '54.081430, 27.733637',
		project_map_yes: 1,
		project_year: 2019,
		album: 255,
		link: 'http://zrobym.by/nashi-proekty-domov/bud-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2814'
	}
];
```

### Дизайн квартир

```js
[
	{
		pagetitle: 'R7',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер||Архитектура',
		project_realize: 0,
		project_map_coordinates: '53.941835, 27.459211',
		project_map_yes: 1,
		project_year: 2019,
		album: 30,
		link: 'http://zrobym.by/dizajn-kvartir/r7.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2560'
	},
	{
		pagetitle: 'cannes apartment',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '43.549273, 7.010098',
		project_map_yes: 1,
		project_year: 2019,
		album: 32,
		link: 'http://zrobym.by/dizajn-kvartir/cannes-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2561'
	},
	{
		pagetitle: 'SOUTH APARTMENT',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.914424, 27.564297',
		project_map_yes: 1,
		project_year: 2019,
		album: 33,
		link: 'http://zrobym.by/dizajn-kvartir/south-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2562'
	},
	{
		pagetitle: 'KISELEVA LOFT',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.911947, 27.570316',
		project_map_yes: 1,
		project_year: 2019,
		album: 50,
		link: 'http://zrobym.by/dizajn-kvartir/kiseleva-loft.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2563'
	},
	{
		pagetitle: 'RB INTERIOR',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.911518, 27.540026',
		project_map_yes: 1,
		project_year: 2018,
		album: 49,
		link: 'http://zrobym.by/dizajn-kvartir/rb-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2564'
	},
	{
		pagetitle: 'NB7',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.956565, 27.661232',
		project_map_yes: 1,
		project_year: 2019,
		album: 48,
		link: 'http://zrobym.by/dizajn-kvartir/nb7.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2565'
	},
	{
		pagetitle: 'UV Apartment',
		project_subtitle: 'Дизайн интерьера квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.947128, 27.331600',
		project_map_yes: 1,
		project_year: 2019,
		album: 47,
		link: 'http://zrobym.by/dizajn-kvartir/uv-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2566'
	},
	{
		pagetitle: 'Braslavsky',
		project_subtitle: 'Дизайн интерьера квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.941849, 27.459182',
		project_map_yes: 1,
		project_year: 2019,
		album: 46,
		link: 'http://zrobym.by/dizajn-kvartir/braslavsky.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2567'
	},
	{
		pagetitle: 'CHAMBER APARTMENT',
		project_subtitle: 'Дизайн интерьера гостиничных апартаментов',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '39.473817, -3.488379',
		project_map_yes: 1,
		project_year: 2018,
		album: 45,
		link: 'http://zrobym.by/dizajn-kvartir/chamber-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2568'
	},
	{
		pagetitle: 'palm apartment',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.870886, 27.545307',
		project_map_yes: 1,
		project_year: 2019,
		album: 44,
		link: 'http://zrobym.by/dizajn-kvartir/palm-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2569'
	},
	{
		pagetitle: 'BEIGE',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.9000000, 27.5666700',
		project_map_yes: 1,
		project_year: 2017,
		album: 88,
		link: 'http://zrobym.by/dizajn-kvartir/beige.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2615'
	},
	{
		pagetitle: 'Sand Flat',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.942984, 27.457312',
		project_map_yes: 1,
		project_year: 2018,
		album: 90,
		link: 'http://zrobym.by/dizajn-kvartir/sand-flat.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2616'
	},
	{
		pagetitle: 'ZAHARAVA APARTMENT',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.898379, 27.583265',
		project_map_yes: 1,
		project_year: 2018,
		album: 91,
		link: 'http://zrobym.by/dizajn-kvartir/zaharava-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2617'
	},
	{
		pagetitle: 'KNITTED FLAT',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.921950, 27.625450',
		project_map_yes: 1,
		project_year: 2018,
		album: 92,
		link: 'http://zrobym.by/dizajn-kvartir/knitted-flat.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2618'
	},
	{
		pagetitle: 'PRS',
		project_subtitle: 'Дизайн интерьера квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.906740, 27.532384',
		project_map_yes: 1,
		project_year: 2018,
		album: 93,
		link: 'http://zrobym.by/dizajn-kvartir/prs.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2619'
	},
	{
		pagetitle: 'Pink and Wood apartment',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.929998, 27.549461',
		project_map_yes: 1,
		project_year: 2018,
		album: 94,
		link: 'http://zrobym.by/dizajn-kvartir/pink-and-wood-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2620'
	},
	{
		pagetitle: 'living apartment',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.942825, 27.461795',
		project_map_yes: 1,
		project_year: 2018,
		album: 95,
		link: 'http://zrobym.by/dizajn-kvartir/living-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2621'
	},
	{
		pagetitle: 'Дизайн квартиры GH15',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.911858, 27.527345',
		project_map_yes: 1,
		project_year: 2018,
		album: 97,
		link: 'http://zrobym.by/dizajn-kvartir/dizajn-kvartiryi-gh15.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2622'
	},
	{
		pagetitle: 'Дизайн интерьера квартиры VA',
		project_subtitle: 'Дизайн интерьера',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.886923, 27.520392',
		project_map_yes: 1,
		project_year: 2018,
		album: 98,
		link: 'http://zrobym.by/dizajn-kvartir/dizajn-interera-kvartiryi-va.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2623'
	},
	{
		pagetitle: 'дизайн квартиры M125',
		project_subtitle: 'Дизайн интерьера квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.846449, 27.475728',
		project_map_yes: 1,
		project_year: 2018,
		album: 99,
		link: 'http://zrobym.by/dizajn-kvartir/dizajn-kvartiryi-m125.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2624'
	},
	{
		pagetitle: 'дизайн проект квартиры MIDNIGHT FLAT',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.942825, 27.461795',
		project_map_yes: 1,
		project_year: 2018,
		album: 100,
		link: 'http://zrobym.by/dizajn-kvartir/dizajn-proekt-kvartiryi-midnight-flat.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2625'
	},
	{
		pagetitle: 'дизайн квартиры FRIEND APARTMENT II',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '55.649870, 37.497513',
		project_map_yes: 1,
		project_year: 2018,
		album: 101,
		link: 'http://zrobym.by/dizajn-kvartir/dizajn-kvartiryi-friend-apartment-ii.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2626'
	},
	{
		pagetitle: 'интерьер квартиры BANANA FLAT',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.918333, 27.637119',
		project_map_yes: 1,
		project_year: 2018,
		album: 102,
		link: 'http://zrobym.by/dizajn-kvartir/interer-kvartiryi-banana-flat.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2627'
	},
	{
		pagetitle: 'проект квартиры chyrvonaarmeyskaya v.2.0',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.896236, 27.573321',
		project_map_yes: 1,
		project_year: 2018,
		album: 103,
		link: 'http://zrobym.by/dizajn-kvartir/proekt-kvartiryi-chyrvonaarmeyskaya-v.2.0.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2628'
	},
	{
		pagetitle: 'дизайн квартиры BYALІNSKAGA APARTMENT',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.937128, 27.594413',
		project_map_yes: 1,
		project_year: 2018,
		album: 104,
		link: 'http://zrobym.by/dizajn-kvartir/dizajn-kvartiryi-byalnskaga-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2629'
	},
	{
		pagetitle: 'дизайн квартиры FRIEND APARTMENT I',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '55.649362, 37.497773',
		project_map_yes: 1,
		project_year: 2018,
		album: 105,
		link: 'http://zrobym.by/dizajn-kvartir/dizajn-kvartiryi-friend-apartment-i.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2630'
	},
	{
		pagetitle: 'дизайн квартиры 431 PROJECT',
		project_subtitle: 'Интерьер квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.929881, 27.546748',
		project_map_yes: 1,
		project_year: 2018,
		album: 106,
		link: 'http://zrobym.by/dizajn-kvartir/dizajn-kvartiryi-431-project.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2631'
	},
	{
		pagetitle: 'дизайн интерьера квартиры OLIVE APARTMENT',
		project_subtitle: 'Интерьер квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.942046, 27.460259',
		project_map_yes: 1,
		project_year: 2018,
		album: 107,
		link: 'http://zrobym.by/dizajn-kvartir/dizajn-interera-kvartiryi-olive-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2632'
	},
	{
		pagetitle: 'дизайн квартиры ZAHAROVA FLAT',
		project_subtitle: 'Интерьер квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.894644, 27.589400',
		project_map_yes: 1,
		project_year: 2018,
		album: 109,
		link: 'http://zrobym.by/dizajn-kvartir/dizajn-kvartiryi-zaharova-flat.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2633'
	},
	{
		pagetitle: 'дизайн проект Stalin Interior',
		project_subtitle: 'Интерьер квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.901164, 27.565559',
		project_map_yes: 1,
		project_year: 2018,
		album: 111,
		link: 'http://zrobym.by/dizajn-kvartir/dizajn-proekt-stalin-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2634'
	},
	{
		pagetitle: 'дизайн квартиры MJK',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.933481, 27.655067',
		project_map_yes: 1,
		project_year: 2018,
		album: 113,
		link: 'http://zrobym.by/dizajn-kvartir/dizajn-kvartiryi-mjk.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2635'
	},
	{
		pagetitle: 'интерьер квартиры Buddha Apartment',
		project_subtitle: 'Интерьер квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.910012, 27.516736',
		project_map_yes: 1,
		project_year: 2018,
		album: 115,
		link: 'http://zrobym.by/dizajn-kvartir/interer-kvartiryi-buddha-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2636'
	},
	{
		pagetitle: 'Hygge flat',
		project_subtitle: 'Дизайн-проект квартиры',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.904140, 27.538178',
		project_map_yes: 1,
		project_year: 2017,
		album: 116,
		link: 'http://zrobym.by/dizajn-kvartir/hygge-flat.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2637'
	},
	{
		pagetitle: 'chyrvonaarmeyskaya',
		project_subtitle: 'Дизайн проект квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.896236, 27.573321',
		project_map_yes: 1,
		project_year: 2017,
		album: 117,
		link: 'http://zrobym.by/dizajn-kvartir/chyrvonaarmeyskaya.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2638'
	},
	{
		pagetitle: 'AD',
		project_subtitle: 'Дизайн интерьера квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.930279, 27.636409',
		project_map_yes: 1,
		project_year: 2017,
		album: 118,
		link: 'http://zrobym.by/dizajn-kvartir/ad.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2639'
	},
	{
		pagetitle: 'PULIHOVA',
		project_subtitle: 'Дизайн-проект интерьера',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.896729, 27.580049',
		project_map_yes: 1,
		project_year: 2017,
		album: 119,
		link: 'http://zrobym.by/dizajn-kvartir/pulihova.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2640'
	},
	{
		pagetitle: 'LIGHTHOUSE',
		project_subtitle: 'Дизайн-проект квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.931244, 27.655930',
		project_map_yes: 1,
		project_year: 2017,
		album: 120,
		link: 'http://zrobym.by/dizajn-kvartir/lighthouse.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2641'
	},
	{
		pagetitle: 'CASCADE APARTMENT',
		project_subtitle: 'Дизайн интерьера',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.909922, 27.515990',
		project_map_yes: 1,
		project_year: 2017,
		album: 121,
		link: 'http://zrobym.by/dizajn-kvartir/cascade-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2642'
	},
	{
		pagetitle: 'grey-interior',
		project_subtitle: 'Дизайн интерьера',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.934149, 27.501662',
		project_map_yes: 1,
		project_year: 2016,
		album: 122,
		link: 'http://zrobym.by/dizajn-kvartir/grey-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2643'
	},
	{
		pagetitle: 'Literaturnaya 22',
		project_subtitle: 'Интерьер квартиры',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.940737, 27.595814',
		project_map_yes: 1,
		project_year: 2017,
		album: 123,
		link: 'http://zrobym.by/dizajn-kvartir/literaturnaya-22.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2644'
	},
	{
		pagetitle: 'BEAR FLAT',
		project_subtitle: 'ДИЗАЙН ИНТЕРЬЕРА',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '',
		project_map_yes: 1,
		project_year: 2016,
		album: 213,
		link: 'http://zrobym.by/dizajn-kvartir/bear-flat.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2704'
	},
	{
		pagetitle: 'CONCRETE WALL',
		project_subtitle: 'ДИЗАЙН ИНТЕРЬЕРА',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.868271, 27.570132',
		project_map_yes: 1,
		project_year: 2015,
		album: 214,
		link: 'http://zrobym.by/dizajn-kvartir/concrete-wall.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2705'
	},
	{
		pagetitle: 'Scandinavian flat',
		project_subtitle: 'Дизайн интерьера',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.874508, 27.495607',
		project_map_yes: 1,
		project_year: 2014,
		album: 215,
		link: 'http://zrobym.by/dizajn-kvartir/scandinavian-flat.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2706'
	},
	{
		pagetitle: 'it-appartment',
		project_subtitle: 'Дизайн интерьера',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.946477, 27.712461',
		project_map_yes: 1,
		project_year: 2015,
		album: 216,
		link: 'http://zrobym.by/dizajn-kvartir/it-appartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2707'
	},
	{
		pagetitle: 'nk-appatrment',
		project_subtitle: 'Дизайн интерьера',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.929129, 27.574740',
		project_map_yes: 1,
		project_year: 2014,
		album: 217,
		link: 'http://zrobym.by/dizajn-kvartir/nk-appatrment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2708'
	},
	{
		pagetitle: 'urban flat',
		project_subtitle: 'Дизайн интерьера',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.934149, 27.501662',
		project_map_yes: 1,
		project_year: 2014,
		album: 219,
		link: 'http://zrobym.by/dizajn-kvartir/urban-flat.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2709'
	},
	{
		pagetitle: 't&y interior',
		project_subtitle: 'Дизайн проект',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.918333, 27.637119',
		project_map_yes: 1,
		project_year: 2015,
		album: 220,
		link: 'http://zrobym.by/dizajn-kvartir/t-i-y-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2710'
	},
	{
		pagetitle: 'b|a',
		project_subtitle: 'Дизайн интерьера',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.900544, 27.542113',
		project_map_yes: 1,
		project_year: 2016,
		album: 221,
		link: 'http://zrobym.by/dizajn-kvartir/ba.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2711'
	},
	{
		pagetitle: 'block 102',
		project_subtitle: 'Дизайн проект квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.902496, 27.561481',
		project_map_yes: 1,
		project_year: 2016,
		album: 222,
		link: 'http://zrobym.by/dizajn-kvartir/block-102.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2712'
	},
	{
		pagetitle: 'swedish interior',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.934149, 27.501662',
		project_map_yes: 1,
		project_year: 2015,
		album: 223,
		link: 'http://zrobym.by/dizajn-kvartir/swedish-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2713'
	},
	{
		pagetitle: 'studio f22',
		project_subtitle: 'Дизайн интерьера',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.918333, 27.637119',
		project_map_yes: 1,
		project_year: 2015,
		album: 224,
		link: 'http://zrobym.by/dizajn-kvartir/studio-f22.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2714'
	},
	{
		pagetitle: 'f|a interior',
		project_subtitle: 'Дизайн интерьера',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.941002, 27.466062',
		project_map_yes: 1,
		project_year: 2016,
		album: 225,
		link: 'http://zrobym.by/dizajn-kvartir/fa-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2715'
	},
	{
		pagetitle: '2B FLAT',
		project_subtitle: 'Проект квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.936327, 27.592994',
		project_map_yes: 1,
		project_year: 2015,
		album: 226,
		link: 'http://zrobym.by/dizajn-kvartir/2b-flat.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2716'
	},
	{
		pagetitle: 'm.street',
		project_subtitle: 'Дизайн интерьера',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.937578, 27.469430',
		project_map_yes: 1,
		project_year: 2016,
		album: 227,
		link: 'http://zrobym.by/dizajn-kvartir/m.street.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2717'
	},
	{
		pagetitle: 'viber interior',
		project_subtitle: 'Дизайн проект',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.902496, 27.561481',
		project_map_yes: 1,
		project_year: 2016,
		album: 228,
		link: 'http://zrobym.by/dizajn-kvartir/viber-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2718'
	},
	{
		pagetitle: 'd/a',
		project_subtitle: 'Дизайн интерьера',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.902496, 27.561481',
		project_map_yes: 1,
		project_year: 2016,
		album: 229,
		link: 'http://zrobym.by/dizajn-kvartir/da.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2719'
	},
	{
		pagetitle: '120 flat',
		project_subtitle: 'Дизайн проект',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.942264, 27.526545',
		project_map_yes: 1,
		project_year: 2016,
		album: 108,
		link: 'http://zrobym.by/dizajn-kvartir/120-flat.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2720'
	},
	{
		pagetitle: 'duplex apartment',
		project_subtitle: 'Интерьер квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.942264, 27.526545',
		project_map_yes: 1,
		project_year: 2016,
		album: 110,
		link: 'http://zrobym.by/dizajn-kvartir/duplex-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2721'
	},
	{
		pagetitle: 'PARUS APARTMENT',
		project_subtitle: 'Дизайн проект',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.906756, 27.532537',
		project_map_yes: 1,
		project_year: 2016,
		album: 112,
		link: 'http://zrobym.by/dizajn-kvartir/parus-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2722'
	},
	{
		pagetitle: 'Roof Terrace',
		project_subtitle: 'Дизайн проект',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.902496, 27.561481',
		project_map_yes: 1,
		project_year: 2016,
		album: 114,
		link: 'http://zrobym.by/dizajn-kvartir/roof-terrace.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2723'
	},
	{
		pagetitle: 'gomel flat',
		project_subtitle: 'Дизайн интерьера',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '52.400160, 30.911631',
		project_map_yes: 1,
		project_year: 2015,
		album: 218,
		link: 'http://zrobym.by/dizajn-kvartir/gomel-flat.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2724'
	},
	{
		pagetitle: 'Brooklyn apartment',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '40.666693, -73.941516',
		project_map_yes: 1,
		project_year: 2019,
		album: 31,
		link: 'http://zrobym.by/dizajn-kvartir/brooklyn-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2795'
	},
	{
		pagetitle: 'Aviation apartment',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.960006, 27.663403',
		project_map_yes: 1,
		project_year: 2019,
		album: 87,
		link: 'http://zrobym.by/dizajn-kvartir/aviation-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2809'
	},
	{
		pagetitle: 'Green',
		project_subtitle: 'Дизайн квартиры',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.948220, 27.332425',
		project_map_yes: 1,
		project_year: 2019,
		album: 96,
		link: 'http://zrobym.by/dizajn-kvartir/green.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2810'
	}
];
```

### Дизайн коттеджей

```js
[
	{
		pagetitle: 'BW INTERIOR',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.944590, 27.777030',
		project_map_yes: 1,
		project_year: 2019,
		album: 55,
		link: 'http://zrobym.by/dizajn-kottedzhej/bw-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2570'
	},
	{
		pagetitle: 'ZHD INTERIOR',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.969512, 27.427811',
		project_map_yes: 1,
		project_year: 2019,
		album: 56,
		link: 'http://zrobym.by/dizajn-kottedzhej/zhd-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2571'
	},
	{
		pagetitle: 'MICHIGAN HOUSE',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '43.955945, -84.824856',
		project_map_yes: 1,
		project_year: 2019,
		album: 57,
		link: 'http://zrobym.by/dizajn-kottedzhej/michigan-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2572'
	},
	{
		pagetitle: 'K-HOUSE',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.947125, 27.778520',
		project_map_yes: 1,
		project_year: 2019,
		album: 58,
		link: 'http://zrobym.by/dizajn-kottedzhej/k-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2573'
	},
	{
		pagetitle: 'HOLIDAY HOUSE',
		project_subtitle: 'Дизайн гостевого дома',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.963489, 27.513295',
		project_map_yes: 1,
		project_year: 2018,
		album: 230,
		link: 'http://zrobym.by/dizajn-kottedzhej/holiday-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2645'
	},
	{
		pagetitle: 'Дизайн дома Scandi',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '54.075943, 27.627633',
		project_map_yes: 1,
		project_year: 2018,
		album: 231,
		link: 'http://zrobym.by/dizajn-kottedzhej/dizajn-doma-scandi.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2646'
	},
	{
		pagetitle: 'Проект частного дома FR. HOUSE',
		project_subtitle: 'Дизайн интерьера дома',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '48.989933, 1.706610',
		project_map_yes: 1,
		project_year: 2018,
		album: 232,
		link: 'http://zrobym.by/dizajn-kottedzhej/proekt-chastnogo-doma-fr.-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2647'
	},
	{
		pagetitle: 'дизайн проект LOFT',
		project_subtitle: 'Дизайн загородного дома',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '',
		project_map_yes: 0,
		project_year: 2018,
		album: 233,
		link: 'http://zrobym.by/dizajn-kottedzhej/dizajn-proekt-loft.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2648'
	},
	{
		pagetitle: 'Дизайн загородного дома tarasava',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.922613, 27.387073',
		project_map_yes: 1,
		project_year: 2018,
		album: 234,
		link: 'http://zrobym.by/dizajn-kottedzhej/dizajn-zagorodnogo-doma-tarasava.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2649'
	},
	{
		pagetitle: 'Дизайн дома Gallery apartment',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.968018, 27.442086',
		project_map_yes: 1,
		project_year: 2018,
		album: 235,
		link: 'http://zrobym.by/dizajn-kottedzhej/dizajn-doma-gallery-apartment.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2650'
	},
	{
		pagetitle: 'Дизайн дома BRVLNY interior',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '54.030254, 27.643102',
		project_map_yes: 1,
		project_year: 2017,
		album: 236,
		link: 'http://zrobym.by/dizajn-kottedzhej/dizajn-doma-brvlny-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2651'
	},
	{
		pagetitle: 'Дизайн дома HD HOUSE interior',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '',
		project_map_yes: 0,
		project_year: 2018,
		album: 237,
		link: 'http://zrobym.by/dizajn-kottedzhej/dizajn-doma-hd-house-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2652'
	},
	{
		pagetitle: 'Интерьер дома IHOUSE',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.971339, 27.661481',
		project_map_yes: 1,
		project_year: 2017,
		album: 238,
		link: 'http://zrobym.by/dizajn-kottedzhej/interer-doma-ihouse.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2653'
	},
	{
		pagetitle: 'Интерьер дома DGLN',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '',
		project_map_yes: 0,
		project_year: 2017,
		album: 239,
		link: 'http://zrobym.by/dizajn-kottedzhej/interer-doma-dgln.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2654'
	},
	{
		pagetitle: 'Дизайн дома POLIGONAL HOUSE INTERIOR',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.685209, 27.131493',
		project_map_yes: 1,
		project_year: 2016,
		album: 240,
		link: 'http://zrobym.by/dizajn-kottedzhej/dizajn-doma-poligonal-house-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2655'
	},
	{
		pagetitle: 'Интерьер дома smuga',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.713094, 27.686934',
		project_map_yes: 1,
		project_year: 2015,
		album: 241,
		link: 'http://zrobym.by/dizajn-kottedzhej/interer-doma-smuga.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2656'
	},
	{
		pagetitle: 'Дизайн дома sasnovaya',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '54.020701, 27.851412',
		project_map_yes: 1,
		project_year: 2016,
		album: 242,
		link: 'http://zrobym.by/dizajn-kottedzhej/dizajn-doma-sasnovaya.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2657'
	},
	{
		pagetitle: 'Проект дома long house interior',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.997795, 27.101094',
		project_map_yes: 1,
		project_year: 2015,
		album: 243,
		link: 'http://zrobym.by/dizajn-kottedzhej/proekt-doma-long-house-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2658'
	},
	{
		pagetitle: 'Проект интерьера kolodishchi',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.950705, 27.786994',
		project_map_yes: 1,
		project_year: 2016,
		album: 244,
		link: 'http://zrobym.by/dizajn-kottedzhej/proekt-interera-kolodishchi.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2659'
	},
	{
		pagetitle: 'Дизайн загородного дома 40,7 sqm concrete',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.994429, 27.672530',
		project_map_yes: 1,
		project_year: 2016,
		album: 245,
		link: 'http://zrobym.by/dizajn-kottedzhej/dizajn-zagorodnogo-doma-407-sqm-concrete.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2660'
	},
	{
		pagetitle: 'Дизайн дома t-house interior',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '54.002003, 27.523311',
		project_map_yes: 1,
		project_year: 2016,
		album: 246,
		link: 'http://zrobym.by/dizajn-kottedzhej/dizajn-doma-t-house-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2661'
	},
	{
		pagetitle: 'Дизайн проект дома industrial house',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '54.335006, 27.460708',
		project_map_yes: 1,
		project_year: 2016,
		album: 247,
		link: 'http://zrobym.by/dizajn-kottedzhej/dizajn-proekt-doma-industrial-house.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2662'
	},
	{
		pagetitle: 'Интерьер дома 28-house interior',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '54.002003, 27.523311',
		project_map_yes: 1,
		project_year: 2016,
		album: 248,
		link: 'http://zrobym.by/dizajn-kottedzhej/interer-doma-28-house-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2663'
	},
	{
		pagetitle: 'Дизайн дома house-a interior',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '54.146848, 27.903692',
		project_map_yes: 1,
		project_year: 2015,
		album: 249,
		link: 'http://zrobym.by/dizajn-kottedzhej/dizajn-doma-house-a-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2664'
	},
	{
		pagetitle: 'Row interior',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.939052, 27.335168',
		project_map_yes: 1,
		project_year: 2019,
		album: 73,
		link: 'http://zrobym.by/dizajn-kottedzhej/row-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2801'
	},
	{
		pagetitle: 'GUBICA interior',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '55.310160, 29.542095',
		project_map_yes: 1,
		project_year: 2019,
		album: 74,
		link: 'http://zrobym.by/dizajn-kottedzhej/gubica-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2802'
	},
	{
		pagetitle: 'BAU interior',
		project_subtitle: '',
		project_type: '',
		project_realize: 0,
		project_map_coordinates: '',
		project_map_yes: 0,
		project_year: 2019,
		album: 75,
		link: 'http://zrobym.by/dizajn-kottedzhej/bau-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2803'
	},
	{
		pagetitle: 'CNA interior',
		project_subtitle: 'Дизайн коттеджа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.987558, 27.586113',
		project_map_yes: 1,
		project_year: 2019,
		album: 257,
		link: 'http://zrobym.by/dizajn-kottedzhej/cna-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2816'
	}
];
```

### Дизайн общественных пространств

```js
[
	{
		pagetitle: '32.08',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.914774, 27.563796',
		project_map_yes: 1,
		project_year: 2019,
		album: 34,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/32.08.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2574'
	},
	{
		pagetitle: 'MOBY DICK CAFFE',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.907623, 27.576226',
		project_map_yes: 1,
		project_year: 2019,
		album: 35,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/moby-dick-caffe.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2575'
	},
	{
		pagetitle: 'cafe44',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '22.653317, 45.197080',
		project_map_yes: 1,
		project_year: 2018,
		album: 36,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/cafe44.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2576'
	},
	{
		pagetitle: 'Бистро «Shtodzennіk» 2.0',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.921306, 27.566852',
		project_map_yes: 1,
		project_year: 2019,
		album: 37,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/bistro-shtodzennk-2.0.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2577'
	},
	{
		pagetitle: 'EPAM LOFT',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.928596, 27.685402',
		project_map_yes: 1,
		project_year: 2019,
		album: 38,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/epam-loft.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2578'
	},
	{
		pagetitle: 'Barber&Co',
		project_subtitle: 'Мультифункциональный барбершоп',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.942046, 27.460259',
		project_map_yes: 1,
		project_year: 2018,
		album: 40,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/barber-i-co.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2666'
	},
	{
		pagetitle: 'Kitchen Coffee Roasters',
		project_subtitle: 'Проект интерьера производственного помещения',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.889173, 27.571371',
		project_map_yes: 1,
		project_year: 2018,
		album: 41,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/kitchen-coffee-roasters.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2667'
	},
	{
		pagetitle: 'SCORUM',
		project_subtitle: 'Дизайн-проект модернизации офисного пространства для IT-стартапа',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.939577, 27.478845',
		project_map_yes: 1,
		project_year: 2018,
		album: 42,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/scorum.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2668'
	},
	{
		pagetitle: 'Дизайн бара LIVERPOOL',
		project_subtitle: 'Дизайн бара',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.897504, 27.543694',
		project_map_yes: 1,
		project_year: 2018,
		album: 43,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-bara-liverpool.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2669'
	},
	{
		pagetitle: 'cafe Connect',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.908554, 27.548599',
		project_map_yes: 1,
		project_year: 2018,
		album: 51,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/cafe-connect.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2670'
	},
	{
		pagetitle: 'Дизайн магазина ВЯЛІКІ ДЗЯКУЙ',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.890118, 27.575423',
		project_map_yes: 1,
		project_year: 2018,
		album: 52,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-magazina-vyalk-dzyakuj.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2671'
	},
	{
		pagetitle: 'Дизайн проект KORDIS INTERIOR',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.873319, 27.558561',
		project_map_yes: 1,
		project_year: 2018,
		album: 53,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-proekt-kordis-interior.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2672'
	},
	{
		pagetitle: 'Дизайн интерьера пекарни DUHOVKA',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.8947, 27.6187',
		project_map_yes: 1,
		project_year: 2018,
		album: 54,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-interera-pekarni-duhovka.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2673'
	},
	{
		pagetitle: 'BY FURNITURE SHOWROOM',
		project_subtitle: '',
		project_type: '',
		project_realize: 1,
		project_map_coordinates: '53.902220, 27.549821',
		project_map_yes: 1,
		project_year: 2017,
		album: 250,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/by-furniture-showroom.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2674'
	},
	{
		pagetitle: 'Дизайн кафе GREEN CUISINE',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.903833, 27.558705',
		project_map_yes: 1,
		project_year: 2017,
		album: 124,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-kafe-green-cuisine.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2675'
	},
	{
		pagetitle: 'Дизайн интерьера KAMПULAB',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '54.026160, 27.969037',
		project_map_yes: 1,
		project_year: 2017,
		album: 125,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-interera-kampulab.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2676'
	},
	{
		pagetitle: 'Дизайн бара MAKE-MAKE TIKI HUT',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.903371, 27.552722',
		project_map_yes: 1,
		project_year: 2017,
		album: 126,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-bara-make-make-tiki-hut.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2677'
	},
	{
		pagetitle: 'Ресторан Simple',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.889486, 27.576905',
		project_map_yes: 1,
		project_year: 2017,
		album: 127,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/restoran-simple.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2678'
	},
	{
		pagetitle: 'Дизайн интерьера AWEM office',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.902496, 27.561481',
		project_map_yes: 1,
		project_year: 2017,
		album: 128,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-interera-awem-office.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2679'
	},
	{
		pagetitle: 'Дизайн проект интерьера BELPRIME OFFICE II',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.921685, 27.565793',
		project_map_yes: 1,
		project_year: 2017,
		album: 129,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-proekt-interera-belprime-office-ii.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2680'
	},
	{
		pagetitle: 'Дизайн помещения UNIVERSAL HALL',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.891577, 27.570679',
		project_map_yes: 1,
		project_year: 2017,
		album: 130,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-pomeshheniya-universal-hall.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2681'
	},
	{
		pagetitle: 'Zrobym architects office',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.939831, 27.597458',
		project_map_yes: 1,
		project_year: 2016,
		album: 251,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/zrobym-architects-office.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2682'
	},
	{
		pagetitle: 'Дизайн офиса SCORUM office',
		project_subtitle: '',
		project_type: '',
		project_realize: 0,
		project_map_coordinates: '53.902496, 27.561481',
		project_map_yes: 1,
		project_year: 2017,
		album: 131,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-ofisa-scorum-office.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2683'
	},
	{
		pagetitle: 'Дизайн интерьера Проект MF',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '54.004485, 27.291241',
		project_map_yes: 1,
		project_year: 2017,
		album: 132,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-interera-proekt-mf.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2684'
	},
	{
		pagetitle: 'Дизайн кофейни lavazza club',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.902220, 27.549821',
		project_map_yes: 1,
		project_year: 2016,
		album: 133,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-kofejni-lavazza-club.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2685'
	},
	{
		pagetitle: 'N OFFICE',
		project_subtitle: 'Дизайн офиса',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.902496, 27.561481',
		project_map_yes: 1,
		project_year: 2017,
		album: 134,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-ofisa-n-office.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2686'
	},
	{
		pagetitle: 'Магазин Mark Formelle',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.902220, 27.549821',
		project_map_yes: 1,
		project_year: 2018,
		album: 135,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/magazin-mark-formelle.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2687'
	},
	{
		pagetitle: 'МЯТА LOUNGE',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.925879, 27.592697',
		project_map_yes: 1,
		project_year: 2016,
		album: 136,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/myata-lounge.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2688'
	},
	{
		pagetitle: 'Бистро «Shtodzennіk»',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.886472, 27.536966',
		project_map_yes: 1,
		project_year: 2017,
		album: 137,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/bistro-shtodzennk.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2689'
	},
	{
		pagetitle: 'RUBIN PLAZA',
		project_subtitle: 'интерьер ХОЛЛА БИЗНЕС-ЦЕНТРА',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.890691, 27.525566',
		project_map_yes: 1,
		project_year: 2017,
		album: 138,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/interer-xolla-biznes-czentra-rubin-plaza.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2690'
	},
	{
		pagetitle: 'Bread&vine',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '',
		project_map_yes: 0,
		project_year: 2017,
		album: 139,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/bread-i-vine.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2691'
	},
	{
		pagetitle: 'LET IT BE',
		project_subtitle: 'Дизайн интерьера кафе-пекарни Let it be',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.890150, 27.575450',
		project_map_yes: 1,
		project_year: 2018,
		album: 39,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/let-it-be.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2693'
	},
	{
		pagetitle: 'Интерьер tamerlan',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.902496, 27.561481',
		project_map_yes: 1,
		project_year: 2016,
		album: 140,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/interer-tamerlan.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2694'
	},
	{
		pagetitle: 'Дизайн помещений dispensary',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.955061, 27.664670',
		project_map_yes: 1,
		project_year: 2016,
		album: 141,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/dizajn-pomeshhenij-dispensary.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2695'
	},
	{
		pagetitle: 'интерьер стоматологии dent',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.851745, 27.480776',
		project_map_yes: 1,
		project_year: 2016,
		album: 142,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/interer-stomatologii-dent.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2696'
	},
	{
		pagetitle: 'wolfram',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.929129, 27.574740',
		project_map_yes: 1,
		project_year: 2015,
		album: 143,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/wolfram.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2697'
	},
	{
		pagetitle: 'smeg',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.855654, 27.478638',
		project_map_yes: 1,
		project_year: 2015,
		album: 144,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/smeg.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2698'
	},
	{
		pagetitle: 'Male medical center',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.902496, 27.561481',
		project_map_yes: 1,
		project_year: 2016,
		album: 145,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/male-medical-center.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2699'
	},
	{
		pagetitle: 'Пекарня лаўка',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.891577, 27.570679',
		project_map_yes: 1,
		project_year: 2016,
		album: 146,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/pekarnya-laka.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2700'
	},
	{
		pagetitle: 'tomography',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.879806, 27.636481',
		project_map_yes: 1,
		project_year: 2016,
		album: 147,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/tomography.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2701'
	},
	{
		pagetitle: 'Maserati',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.944108, 27.665946',
		project_map_yes: 1,
		project_year: 2016,
		album: 148,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/maserati.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2702'
	},
	{
		pagetitle: 'creative space',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.902496, 27.561481',
		project_map_yes: 1,
		project_year: 2016,
		album: 149,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/creative-space.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2703'
	},
	{
		pagetitle: 'EMSE',
		project_subtitle: 'Дизайн шоурума',
		project_type: 'Интерьер',
		project_realize: 0,
		project_map_coordinates: '53.907115, 30.339070',
		project_map_yes: 1,
		project_year: 2019,
		album: 72,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/emse.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2800'
	},
	{
		pagetitle: 'Zrobym architects office 2',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.908345, 27.556761',
		project_map_yes: 1,
		project_year: 2019,
		album: 252,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/zrobym-architects-office-2.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2811'
	},
	{
		pagetitle: 'BY FURNITURE SHOWROOM 2',
		project_subtitle: '',
		project_type: 'Интерьер',
		project_realize: 1,
		project_map_coordinates: '53.926526, 27.517144',
		project_map_yes: 1,
		project_year: 2019,
		album: 256,
		link: 'http://zrobym.by/dizajn-obshchestvennykh-prostranstv/by-furniture-showroom-2.html',
		manager: 'http://zrobym.by/manager/?a=resource/update&id=2815'
	}
];
```
