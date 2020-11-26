<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
    'thumb' => array(
        'caption' => 'Thumbnail',
        'type' => 'thumb',
        'thumbof' => 'image'
    ),
    'video' => array(
        'caption' => 'Ссылка на видео<br><span class="comment">Видео с YouTube</span>',
        'type' => 'text',
        'width' => '60%'
    ),
    'image' => array(
        'caption' => 'Превью-изображение<br><span class="comment">Размер: 1280 x 720 px</span>',
        'type' => 'image',
        'width' => '30%'
    ),
    'title' => array(
        'caption' => 'Название видео',
        'type' => 'text',
        'width' => '60%'
    )
);
