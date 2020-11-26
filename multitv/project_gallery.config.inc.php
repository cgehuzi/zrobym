<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
    'thumb' => array(
        'caption' => 'Thumbnail',
        'type' => 'thumb',
        'thumbof' => 'image'
    ),
    'image' => array(
        'caption' => 'Изображение<br><span class="comment">Мин. ширина: 1000 px</span>',
        'type' => 'image',
        'width' => '30%'
    ),
    'progress' => array(
        'caption' => 'В реализации?<br><span class="comment">IN&nbsp;PROGRESS</span>',
        'type' => 'checkbox',
        'elements' => 'Да==1'
    ),
    'plan' => array(
        'caption' => 'План<br><span class="comment">на котором это помещение</span>',
        'type' => 'dropdown',
        'width' => '60%',
        'elements' => 'Не выбран==0||Цоколь==-1||План 1==1||План 2==2||План 3==3||План 4==4'
    ),
    'title' => array(
        'caption' => 'Название помещения<br><span class="comment">как в экспликации</span>',
        'type' => 'text',
        'width' => '60%'
    )
);
