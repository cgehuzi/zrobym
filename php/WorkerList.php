<?php
$list = isset($list) ? $list : '';
$nolink = isset($nolink) ? true : false;
$multi = isset($multi) ? true : false;

if ($list == '') return '';
$currlang = 'ru';
if (!empty($_SESSION['evoBabel_curLang'])) {
    $currlang = $_SESSION['evoBabel_curLang'];
}
if ($currlang == 'ru') $workers_parent = 10;
if ($currlang == 'eng') $workers_parent = 42;
if ($currlang == 'by') $workers_parent = 41;

$workers_list = $modx->runSnippet('DocLister', [
    "parents" => $workers_parent,
    "addWhereList" => "c.template=9",
    "display" => "all",
    "tpl" => '@CODE: "[+title+]":[+id+],',
    "tplLast" => '@CODE: "[+title+]":[+id+]',
    "ownerTPL" => "@CODE:{ [+dl.wrap+] }",
    "noneTPL" => "",
    "noneWrapOuter" => 0
]);
$workers_list = json_decode($workers_list, true);

if ($multi === true) {
    // если список - это multiTV
    $list = json_decode($list, true);
    $list_array = $list["fieldValue"];
} else {
    // если список - это строка с разделителем ||
    $list_array = explode("||", $list);
}

$result = '';
foreach ($list_array as $list_item) {
    $worker_name = $list_item["name"];
    $worker_id = $workers_list[$worker_name] ? $workers_list[$worker_name] : false;

    if ($nolink === true) {
        $list_item = '<span>' . $worker_name . '</span>';
    } else {
        if ($worker_id !== false) {
            $worker_url = $modx->makeUrl($worker_id);
            $list_item = '<a href="' . $worker_url . '"><span>' . $worker_name . '</span></a>';
        } else {
            $list_item = '<a><span>' . $worker_name . '</span></a>';
        }
    }
    $result = $result . $list_item;
}

// return json_encode($list_array, JSON_UNESCAPED_UNICODE);
return $result;
