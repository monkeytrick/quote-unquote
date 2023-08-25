<?php

require 'vendor/autoload.php';

use Symfony\Component\BrowserKit\HttpBrowser;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\CssSelector\CssSelectorConverter;

function url_call(String $query, $search_params) { 

    // Base URL
    $url = 'http://www.quotationspage.com/quotes/';

    if($search_params !== null) {
        $url = $url.$search_params;
    }

    $browser = new HttpBrowser(HttpClient::create());

    $browser->request('GET', $url);

    $response_HTML = $browser->getResponse();

    $crawler = new Crawler($response_HTML);

    if($query == 'begin') {
        // Working
      return $crawler->filter('#content > table > tr > td > a');
    }

    if($query == 'challenge') {
        //Need to keep track of quotes given
        //Randomize quote
        $num = rand(0,7);
        var_dump($crawler->filter('.quote > a')->eq($num)->text());
    }
}

?>

