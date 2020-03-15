<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
    'title' => array(
        'caption' => 'Название<br><span class="comment">Для вкладки-переключателя</span>',
        'type' => 'text',
        'width' => '60%'
    ),
    'thumb' => array(
        'caption' => 'Thumbnail',
        'type' => 'thumb',
        'thumbof' => 'image'
    ),
    'image' => array(
        'caption' => 'Фоновое изображение<br><span class="comment">Мин. ширина: 1900 px</span>',
        'type' => 'image',
        'width' => '30%'
    ),
    'content' => array(
        'caption' => 'Контент',
        'type' => 'richtext',
        'width' => '100%'
    ),
    'page' => array(
        'caption' => 'ID страницы либо ссылка на др. сайт<br><span class="comment">Для кнопки "Узнать больше"</span>',
        'type' => 'text',
        'width' => '60%'
    )
);
