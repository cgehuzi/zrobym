<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
    // ТЕКСТОВОЕ ПОЛЕ
    '_________' => array(
        'caption' => '_________<br><span class="comment">_________</span>',
        'type' => 'text',
        'width' => '60%'
    ),
    // TEXTAREA
    '_________' => array(
        'caption' => '_________<br><span class="comment">_________</span>',
        'type' => 'textarea',
        'width' => '100%'
    ),
    // РЕДАКТОР КОНТЕНТА
    '_________' => array(
        'caption' => '_________<br><span class="comment">_________</span>',
        'type' => 'richtext',
        'width' => '100%'
    ),
    // ВЫБОР РЕСУРСА ИЗ ДЕРЕВА
    '_________' => array(
        'caption' => '_________<br><span class="comment">_________</span>',
        'type' => 'dropdown',
        'width' => '60%',
        'elements' => '@SELECT `pagetitle`, `id` FROM `bu0o_site_content` WHERE parent = ______ ORDER BY `menuindex` ASC'
    ),
    // ИЗОБРАЖЕНИЕ
    'thumb' => array(
        'caption' => 'Thumbnail',
        'type' => 'thumb',
        'thumbof' => 'image'
    ),
    'image' => array(
        'caption' => '_________<br><span class="comment">_________</span>',
        'type' => 'image',
        'width' => '30%'
    )
);
