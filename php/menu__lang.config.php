<?php
//@author webber (web-ber12@yandex.ru)

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
