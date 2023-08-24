<?php

require 'vendor/autoload.php';

use Symfony\Component\BrowserKit\HttpBrowser;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\CssSelector\CssSelectorConverter;

// $main = [];

function url_call(String $query, $url_append) { 

    $url = 'http://www.quotationspage.com/quotes/';

    if($url_append !== null) {
        $url = $url.$url_append;
    }

    // var_dump($url);

    // echo $query;

    $browser = new HttpBrowser(HttpClient::create());

    $browser->request('GET', $url);

    $response_HTML = $browser->getResponse();

    $crawler = new Crawler($response_HTML);

    // var_dump($crawler);

    if($query == 'begin') {
      return $crawler->filter('#content > table > tr > td > a');
    }
    // var_dump($main);
}


// $browser = new HttpBrowser(HttpClient::create());

// $browser->request('GET', 'http://www.quotationspage.com/quotes');

// $response_HTML = $browser->getResponse();

// $crawler = new Crawler($response_HTML);

// $main = $crawler->filter('#content > table > tr > td > a');

?>

