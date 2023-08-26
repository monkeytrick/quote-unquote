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
      return $crawler->filter('#content > table > tr > td > a');
    }

    if($query == 'challenge') {

        // Keep track of quotes used
        $all_quotes_used = [ ['name' => 'Joe', 'quotes' => [1,2,3]], ['name' => 'Bloggs', 'quotes' => [4,5,6]],
                                ['name' => 'Jeff', 'quotes' => [7,8,9]], ['name' => 'Kam', 'quotes' => [10,20,30]] ];
        //search_parms
        $name = 'Kam';

        // Check whether quote has been given previously
        $found = false;

        // Index position of array that contains the numbers to be excluded in random. Default to last item in array
        $index_pos = 0;

        foreach ($all_quotes_used as $key => $value) {
            if($value['name'] == $name){
                $found = true;
                //Set index position to place in array
                $index_pos = $key;
                echo "Position is " . $index_pos;
                break;
            }
            
        // Add to array containing person's quotes
        if($found == false) {
            $newa['name'] = $search_params;
            $newa['quotes'] = [];
            $all_quotes_used[] = $newa;
            $index_pos = count($all_quotes_used) - 1;
        }

        // Generate random number for quote, excluding those already used
        $x = 0;

        while( in_array( ($rando = random_int(0,7)), $all_quotes_used[$index_pos]['quotes']) );

        echo "RANDO IS " . $x;
    }
}}

?>

