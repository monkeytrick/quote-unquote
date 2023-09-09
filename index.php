<?php

use Symfony\Component\DomCrawler\Crawler;

require 'functions.php';

if(isset($_GET['q']) && $_GET['q'] == 'challenge') {
    $persons = [$_GET['p1'], $_GET['p2']];
    $random = array_rand($persons);
    $selected = $persons[$random];
    $get_quote = url_call('challenge', $selected);
}

else {
    $persons = url_call('begin', null);    
}

?>

