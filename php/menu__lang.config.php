<?php
//@author webber (web-ber12@yandex.ru)

if (!defined('MODX_BASE_PATH')) {
    die('What are you doing? Get out of here!');
}

//активный язык отдельно от списка
$activeLang = '<span class="lang__tablet">LANGUAGE</span> <span class="lang__laptop">LANG</span>';

//активный язык в списке
$activeRow = '<li class="lang__point"><span>[+name+]</span></li>';

//неактивный язык списка
$unactiveRow = '<li class="lang__point"><a href="[+url+]" class="lang__link">[+name+]</a></li>';

//обертка списка языков
$langOuter = '<ul class="lang">[+wrapper+]</ul>';
