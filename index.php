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
  <link rel="icon" type="image/jpg" href="/images/favicon.jpg" />
  <link rel="stylesheet" type="text/css" href="/style.css" />

  <?php
  // Get the Accept-Language header
  $acceptLanguageHeader = $_SERVER['REQUEST_URI'];

  // Extract the two-letter language code (3 to include /)
  $language_code = substr($acceptLanguageHeader, 0, 3);

  // Check if the language code is 'en' (English)
  $command = escapeshellcmd("python3 /var/www/html/translate.py $language_code");
  $output = shell_exec($command);

  if ($output == "bad") {
    echo "<p>Language code, ", substr($language_code, 1, 3), " could not be found!<p>";
    exit;
  }

  $delim = '^^';
  $lines = explode($delim, $output);

  session_start();
  $_SESSION['lines'] = $lines;
  ?>

  <?php echo "<title>", $lines[0], "</title>";?>
</head>


<body style="display: none;">
  <header>
    <h1>Aidan Thomas</h1>
    <?php echo "<h4 id='mh4'>$lines[1]</h4>";?>
  </header>

  <div class="topnav">
    <?php echo "<p id='Education'>$lines[2]</p>"?>
    <?php echo "<p id='Projects'>$lines[3]</p>"?>
    <?php echo "<p id='Research'>$lines[4]</p>"?>
    <?php echo "<p id='About'>$lines[5]</p>"?>
  </div>

  <div id="content"></div>

  <div id="poll">

    <link rel="stylesheet" type="text/css" href="/poll/style.css" />
    <?php echo "<h2>$lines[23]</h2>"?>
    <a href="mailto:aidanthomas128@gmail.com">aidanthomas128@gmail.com</a>

    <?php echo "<h4>$lines[24]</h4>"?>

    <div id="question">
      <?php 
      echo "<button id='op1'>$lines[25]</button>";
      echo "<button id='op2'>$lines[26]</button>";
      echo "<button id='op3'>$lines[27]</button>";
      echo "<button id='op4'>$lines[28]</button>";
      ?>
    </div>


  </div>

  <script src="/script.js"></script>

  <footer></footer>



</body>

</html>
