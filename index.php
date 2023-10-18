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
  <link rel='stylesheet' type='text/css' href='/css/style.css' />
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


  <?php

  function isMobileDevice()
  {
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    $mobileDevices = array('Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'IEMobile', 'Opera Mini');

    foreach ($mobileDevices as $device) {
      if (stripos($userAgent, $device) !== false) {
        return true;
      }
    }

    return false;
  }

  if (isMobileDevice()) {
    echo "<link rel='stylesheet' type='text/css' href='/css/mobile.css'/>";
  } else {
    echo "<link rel='stylesheet' type='text/css' href='/css/desktop.css'/>";
  }


  session_start();

  echo "<title>", $lines[0], "</title>";
  ?>


  <link rel='stylesheet' type='text/css' href='/css/dropdown.css' />

</head>


<body style="display: none;">
  <?php
  $lans = array(
    "en ->english",
    "af ->afrikaans",
    "sq ->albanian",
    "am ->amharic",
    "ar ->arabic",
    "hy ->armenian",
    "az ->azerbaijani",
    "eu ->basque",
    "be ->belarusian",
    "bn ->bengali",
    "bs ->bosnian",
    "bg ->bulgarian",
    "ca ->catalan",
    "ceb ->cebuano",
    "ny ->chichewa",
    "co ->corsican",
    "hr ->croatian",
    "cs ->czech",
    "da ->danish",
    "nl ->dutch",
    "en-US ->english-us",
    "en-UK ->english-uk",
    "eo ->esperanto",
    "et ->estonian",
    "tl ->filipino",
    "fi ->finnish",
    "fr ->french",
    "fy ->frisian",
    "gl ->galician",
    "ka ->georgian",
    "de ->german",
    "el ->greek",
    "gu ->gujarati",
    "ht ->haitian creole",
    "ha ->hausa",
    "haw ->hawaiian",
    "iw ->hebrew",
    "he ->hebrew",
    "hi ->hindi",
    "hmn ->hmong",
    "hu ->hungarian",
    "is ->icelandic",
    "ig ->igbo",
    "id ->indonesian",
    "ga ->irish",
    "it ->italian",
    "ja ->japanese",
    "jw ->javanese",
    "kn ->kannada",
    "kk ->kazakh",
    "km ->khmer",
    "ko ->korean",
    "ku ->kurdish (kurmanji)",
    "ky ->kyrgyz",
    "lo ->lao",
    "la ->latin",
    "lv ->latvian",
    "lt ->lithuanian",
    "lb ->luxembourgish",
    "mk ->macedonian",
    "mg ->malagasy",
    "ms ->malay",
    "ml ->malayalam",
    "mt ->maltese",
    "mi ->maori",
    "mr ->marathi",
    "mn ->mongolian",
    "my ->myanmar (burmese)",
    "ne ->nepali",
    "no ->norwegian",
    "or ->odia",
    "ps ->pashto",
    "fa ->persian",
    "pl ->polish",
    "pt ->portuguese",
    "pa ->punjabi",
    "ro ->romanian",
    "ru ->russian",
    "sm ->samoan",
    "gd ->scots gaelic",
    "sr ->serbian",
    "st ->sesotho",
    "sn ->shona",
    "sd ->sindhi",
    "si ->sinhala",
    "sk ->slovak",
    "sl ->slovenian",
    "so ->somali",
    "es ->spanish",
    "su ->sundanese",
    "sw ->swahili",
    "sv ->swedish",
    "tg ->tajik",
    "ta ->tamil",
    "te ->telugu",
    "th ->thai",
    "tr ->turkish",
    "uk ->ukrainian",
    "ur ->urdu",
    "ug ->uyghur",
    "uz ->uzbek",
    "vi ->vietnamese",
    "cy ->welsh",
    "xh ->xhosa",
    "yi ->yiddish",
    "yo ->yoruba",
    "zu ->zulu"
  );


  echo "<div class='dropdown'>";
  echo "<button class='material-symbols-outlined dropbtn'>globe_asia</button>";
  echo "<div class='dropdown-content'>";
  echo "<a href='/'>preferred</a>";
  foreach ($lans as $element) {
    $part = explode(" ", $element)[0];
    echo "<a href='/$part'>$element</a>";
  }
  echo "</div>";
  echo "</div>";
  ?>


  <div>
    <h1>Aidan Thomas</h1>
    <?php echo "<p id='mh4'>$lines[1]</p>" ?>
  </div>

  <div class="topnav">
    <?php echo "<p class='navitem' id='Education'>$lines[2]</p>" ?>
    <?php echo "<p class='navitem' id='Projects'>$lines[3]</p>" ?>
    <?php echo "<p class='navitem' id='Research'>$lines[4]</p>" ?>
    <?php echo "<p class='navitem' id='About'>$lines[5]</p>" ?>
  </div>

  <div id="content"></div>

  <div id="poll">

    <link rel="stylesheet" type="text/css" href="/poll/style.css" />
    <?php echo "<h2>$lines[23]</h2>" ?>
    <a href="mailto:aidanthomas128@gmail.com">aidanthomas128@gmail.com</a>

    <?php echo "<h4>$lines[24]</h4>" ?>

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