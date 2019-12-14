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
    'desc' => array(
        'caption' => 'Описание публикации<br><span class="comment">Не более 200 символов</span>',
        'type' => 'textarea',
        'width' => '60%'
    ),
    'date' => array(
        'caption' => 'Дата публикации',
        'type' => 'date',
        'width' => '60%'
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
    )
);
