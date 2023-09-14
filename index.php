<?php

use Symfony\Component\DomCrawler\Crawler;

require 'functions.php';

if(isset($_GET['q']) && $_GET['q'] == 'challenge') {

    $get_quote = url_call('challenge', $_GET['p']);
}

else {
    $persons = url_call('begin', null);    
}

?>

