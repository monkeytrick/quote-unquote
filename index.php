<?php

use Symfony\Component\DomCrawler\Crawler;

require 'functions.php';

// use Symfony\Component\DomCrawler\Crawler;

// require 'vendor/autoload.php';

// use Symfony\Component\BrowserKit\HttpBrowser;
// use Symfony\Component\HttpClient\HttpClient;
// use Symfony\Component\DomCrawler\Crawler;
// use Symfony\Component\CssSelector\CssSelectorConverter;

// function url_Call([query], url_affix) {

//     //if retrieve persons

//     //if retrieve quotes
            //select from one at random and pull this - return result with name

//     // JS to send fetch request to end point
//         //if(isset) call function - consider separating this into new file
//     // consider API endpoint - true
// };

if(isset($_GET['type'])) {

    //Check or sanitize GET

    $get_random = array_rand($_GET);
    $person = $_GET[$get_random];
    // echo "GET WUPTE FOR " . $person;
    // echo $get_random;
    // var_dump($_GET);

    // url_call(challenge, $person);

}

else {
    $main = url_call('begin', null);
}


//Create links for each name to pull quote
//Create second instance of scraper for this path, or consider new class or function so that URL's can be passed
//Design UI
//Consider JS and score keeping
// Autocomplete for text fields -https://www.w3schools.com/howto/howto_js_autocomplete.asp

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quote-Unquote</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
</head>
<body>
    <header>IMAGE GOES HERE</header>
    <div class="container">
        <div class="row">
            <div class="col">first person search</div>
            <div class="col">second person search</div>
        </div>
        <div class="row" id="quote-area">
            <div id="quote" class="text-align-center">QUOTE GOES HERE</div>
            <div class="col">
                <button class="btn">person one name</button>
            </div>
            <div class="col">
                <button class="btn">person two name</button>
            </div>
        </div>

        <div class="row">
            <?php 
            
                $main->each(function (Crawler $node) {
                    // echo "<a href='{$node->text()}'>{$node->text()}</a><br>";
                    echo "<div class='col col-lg-3'>
                            <a href='{$node->attr('href')}'>{$node->text()}</a>
                          </div>";
                });            
            ?>
        </div>
    </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
</body>
</html>