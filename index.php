<?php
// Get the Accept-Language header
$acceptLanguageHeader = $_SERVER['REQUEST_URI'];

// Extract the two-letter language code (3 to include /)
$language_code = substr($acceptLanguageHeader, 0, 3);

// Check if the language code is 'en' (English)
$command = escapeshellcmd("python3 /var/www/html/translate.py $language_code");
$output = shell_exec($command);
echo $output;

?>



<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-3Q2DEPB7G6"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-3Q2DEPB7G6');
  </script>

  <meta charset="UTF-8" />
  <title>Personal Website</title>
  <link rel="icon" type="image/jpg" href="/images/favicon.jpg" />
  <link rel="stylesheet" type="text/css" href="/style.css" />
</head>

<body style="display: none;">
  <header>
    <h1>Aidan Thomas</h1>
    <h4 id="mh4"> Computer Science Student in San Diego, CA</h4>
  </header>

  <div class="topnav">
    <p id="Education">Education</p>
    <p id="Projects">Project</p>
    <p id="Research">Research</p>
    <p id="About">Poll</p>
  </div>

  <div id="content"></div>

  <div id="poll">

    <link rel="stylesheet" type="text/css" href="/poll/style.css" />
    <h2 class="banner">================================================</h2>
    <h2>Viewer Poll</h2>
    <h2 class="banner">================================================</h2>

    <h4>Which operating system do you use? (compared to other viewers of aidanswebsite.com)</h4>

    <div id="question">
      <button id="op1">Mac OS</button>
      <button id="op2">Windows</button>
      <button id="op3">Linux/Unix</button>
      <button id="op4">Chrome OS</button>
    </div>


  </div>

  <script src="/script.js"></script>

  <footer></footer>



</body>

</html>
