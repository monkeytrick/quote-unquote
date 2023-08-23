<?php

require 'vendor/autoload.php';

use Symfony\Component\BrowserKit\HttpBrowser;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\CssSelector\CssSelectorConverter;



echo "Fartlies";
$browser = new HttpBrowser(HttpClient::create());

$browser->request('GET', 'http://www.quotationspage.com/quotes');

$response_HTML = $browser->getResponse();

$crawler = new Crawler($response_HTML);

// $link = $dom->eq($i)->children($this->search_strings['link'])->attr('href');

// $main = $crawler->filter('#content > table > tbody > tr > td')->eq(0)->text();


// $main = $crawler->filter('#content > table')->children()->text();

$main = $crawler->filter('#content > table > tr > td > a');

// echo count($main);

$main->each(function (Crawler $node) {
    echo "<a href='{$node->text()}'>{$node->text()}</a><br>";
});




// echo $main;







?>