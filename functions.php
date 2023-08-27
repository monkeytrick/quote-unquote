<?php
session_start();
require 'vendor/autoload.php';

error_reporting(E_ALL);

use Symfony\Component\BrowserKit\HttpBrowser;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\CssSelector\CssSelectorConverter;

// Keep track of quotes used
if(!isset($_SESSION['Quotes_Used'])) {
    $_SESSION['Quotes_Used'] = [];
}

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

        //Get name to append to URL
        $name = $search_params;

        // Index position of array that contains the numbers to be excluded in random. Default to last item in array
        $index_pos = 0;

       //////// Check whether name in session array
       $found = false;

       foreach ($_SESSION['Quotes_Used'] as $key => $value) {
            if($value['name'] == $name){
                // echo "Key is " . $value['name'];
                $found = true;
                //Set index position to place in array
                $index_pos = $key;
                break;
            }
        }

        ////// Add to session array if not found in above search
        if($found == false) {
            $newa['name'] = $search_params;
            $newa['quotes'] = [];
            $_SESSION['Quotes_Used'][] = $newa;
            $index_pos = count($_SESSION['Quotes_Used']) - 1;
        }

        // Generate random number, excluding those in array containing quotes already used, to be passed to crawler
        $rando = 0;
        while( in_array( ($rando = random_int(0,7)), $_SESSION['Quotes_Used'][$index_pos]['quotes']) );

        //Add number of quote to array containing quotes already used 
        array_push($_SESSION['Quotes_Used'][$index_pos]['quotes'], $rando);

        // Return quote and name of person
        var_dump($crawler->filter('.quote > a')->eq($rando)->text());
    }
}

?>

