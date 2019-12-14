<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
    'thumb' => array(
        'caption' => 'Thumbnail',
        'type' => 'thumb',
        'thumbof' => 'image'
    ),
    'title' => array(
        'caption' => 'Заголовок публикации',
        'type' => 'text',
        'width' => '60%'
    ),
    'type' => array(
        'caption' => 'Тип публикации<br><span class="comment">Для фильтра</span>',
        'type' => 'dropdown',
        'width' => '60%',
        'elements' => 'Не выбран==0||Web==web||Журнал==magazine'
    ),
    'image' => array(
        'caption' => 'Логотип площадки<br><span class="comment">Размер: 1500 x 780 px</span>',
        'type' => 'image',
        'width' => '30%'
    ),
    'link' => array(
        'caption' => 'Ссылка на публикацию<br><span class="comment">Если тип - Web</span>',
        'type' => 'text',
        'width' => '60%'
    ),
    'file' => array(
        'caption' => 'Файл для просмотра<br><span class="comment">Если тип - Журнал</span>',
        'type' => 'file',
        'width' => '30%'
    )
);
