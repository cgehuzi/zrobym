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
