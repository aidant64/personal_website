#! /bin/php
<?php echo "Content-Type: text/html\n";

function isMobileDevice()
{
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    $mobileKeywords = array('Mobile', 'Android', 'iPhone', 'iPad', 'Windows Phone');
    foreach ($mobileKeywords as $keyword) {
        if (stripos($userAgent, $keyword) !== false) {
            return true;
        }
    }
    return false;
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>SB</title>
    <?php
    if (isMobileDevice()) {
        echo "<link rel='stylesheet' type='text/css' href='/sbweather/mobile_style.css'>";
    } else {
        echo "<link rel='stylesheet' type='text/css' href='/sbweather/style.css'>";
    }
    ?>
</head>

<body>
    <div class="container">
        <div class="col">
            <h1>Harvest, CA</h1>
            <h4>34°27'6" N 120°46'47" W</h4>
            <p>10 NM West of Point Conception</p>
            <div id="table1"></div>
        </div>
        <div class="col">
            <h1>West Santa Barbara</h1>
            <h4>34°16'26" N 120°28'5" W</h4>
            <p>38 NM West of Santa Barbara, CA</p>
            <div id="table2"></div>
        </div>
        <div class="col">
            <h1>East Santa Barbara</h1>
            <h4>34°14'26" N 119°50'20" W</h4>
            <p>12NM Southwest of Santa Barbara, CA</p>
            <div id="table3"></div>
        </div>
        <div class="col">
            <h1>Santa Barbara Harbor</h1>
            <h4>34°24'17" N 119°41'33" W</h4>
            <p>Santa Barbara Harbor Ice House</p>
            <div id="table4"></div>
        </div>
    </div>


    <script src="/sbweather/script.js" defer></script>
</body>

</html>