#! /bin/php
<?php echo "Content-Type: text/html\n";

$languages = array(
    "en/english",
    "es/spanish",
    "ja/japanese",
    "af/afrikaans",
    "sq/albanian",
    "am/amharic",
    "ar/arabic",
    "hy/armenian",
    "az/azerbaijani",
    "eu/basque",
    "be/belarusian",
    "bn/bengali",
    "bs/bosnian",
    "bg/bulgarian",
    "ca/catalan",
    "ceb/cebuano",
    "ny/chichewa",
    "co/corsican",
    "hr/croatian",
    "cs/czech",
    "da/danish",
    "nl/dutch",
    "en-US/english-us",
    "en-UK/english-uk",
    "eo/esperanto",
    "et/estonian",
    "tl/filipino",
    "fi/finnish",
    "fr/french",
    "fy/frisian",
    "gl/galician",
    "ka/georgian",
    "de/german",
    "el/greek",
    "gu/gujarati",
    "ht/haitian creole",
    "ha/hausa",
    "haw/hawaiian",
    "iw/hebrew",
    "hi/hindi",
    "hmn/hmong",
    "hu/hungarian",
    "is/icelandic",
    "ig/igbo",
    "id/indonesian",
    "ga/irish",
    "it/italian",
    "ja/japanese",
    "jw/javanese",
    "kn/kannada",
    "kk/kazakh",
    "km/khmer",
    "ko/korean",
    "ku/kurdish (kurmanji)",
    "ky/kyrgyz",
    "lo/lao",
    "la/latin",
    "lv/latvian",
    "lt/lithuanian",
    "lb/luxembourgish",
    "mk/macedonian",
    "mg/malagasy",
    "ms/malay",
    "ml/malayalam",
    "mt/maltese",
    "mi/maori",
    "mr/marathi",
    "mn/mongolian",
    "my/myanmar (burmese)",
    "ne/nepali",
    "no/norwegian",
    "or/odia",
    "ps/pashto",
    "fa/persian",
    "pl/polish",
    "pt/portuguese",
    "pa/punjabi",
    "ro/romanian",
    "ru/russian",
    "sm/samoan",
    "gd/scots gaelic",
    "sr/serbian",
    "st/sesotho",
    "sn/shona",
    "sd/sindhi",
    "si/sinhala",
    "sk/slovak",
    "sl/slovenian",
    "so/somali",
    "es/spanish",
    "su/sundanese",
    "sw/swahili",
    "sv/swedish",
    "tg/tajik",
    "ta/tamil",
    "te/telugu",
    "th/thai",
    "tr/turkish",
    "uk/ukrainian",
    "ur/urdu",
    "ug/uyghur",
    "uz/uzbek",
    "vi/vietnamese",
    "cy/welsh",
    "xh/xhosa",
    "yi/yiddish",
    "yo/yoruba",
    "zu/zulu"
);

?>

<!DOCTYPE html>
<html>

<head>
    <title class="translatable">Portfolio</title>
    <link rel="stylesheet" type="text/css" href="/home/home.css">
    <link rel="stylesheet" type="text/css" href="/home/tabs.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM+Mono">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Flow+Block&display=swap">

</head>

<body>
    <div class="container">

        <div class="header">
            <div>
                <h1 class="translatable">Portfolio</h1>
                <p class="translatable">Computer science student in San Diego, California</p>
            </div>
            <select id='languageSelector' class='sss' onchange="translateAll(this.value)">
                <?php
                foreach ($languages as $item) {
                    $code = explode("/", $item)[0];
                    $name = explode("/", $item)[1];
                    echo "<option value='$code'>$name</option>";
                }
                ?>
            </select>
        </div>

        <div class="tab-div">
            <p id="education" class="translatable tab selected">Education</p>
            <p id="research" class="translatable tab">Research</p>
            <p id="team" class="translatable tab">Team</p>
            <p id="project" class="translatable tab">Project</p>
            <p id="apps" class="translatable tab">Apps</p>
        </div>
        <br><br>

        <div id='education-content' class='content selectedContent'>
            <h3 class="translatable">San Diego State University</h3>
            <p class="translatable">Bachelor of Science, Computer Science</p>
            <p class="translatable">Graduation: May 2024</p>
            <p class="translatable">GPA: 3.77</p>
            <p class="translatable">Major GPA: 3.88</p>
        </div>

        <div id='research-content' class='content'>
            <h3 class="translatable">San Diego State University R.T.E.C. Lab</h3>
            <p> <a class="translatable" href='https://rtec.sdsu.edu'>RTEC Lab Website</a></p>
            <p class="translatable">Design of Priority-Driven Chain-Aware Scheduling for autonomous vehicles</p>
            <p class="translatable">September 2022 -> Current</p>
        </div>


        <div id='team-content' class='content'>
            <h3 class="translatable">San Diego State Cyber Defense Team</h3>
            <p> <a href='https://www.sdsucyberdefense.org/' class="translatable">Cyber Defense Club Website</a></p>
            <p class="translatable">Placed 24th out of more than 4000 teams in the 2023 National Cyber League</p>
            <p class="translatable">Placed 10th out of 24 teams in the 2023 CCDC Invitational Competition</p>
        </div>

        <div id='project-content' class='content'>
            <div>
                <h3>26,000+ unique downloads (statistics below)</h3>

                <div>
                    <p>Easily install and Run on any computer with Java (JDK) installed:</p>
                    <code>git clone https://github.com/aidant64/marketsim.git && cd marketsim/ && javac -d . Main/Main.java && java Main.Main</code>
                </div>

                <p>
                    Developed a desktop application in Java that queries live public stock prices and allows users to
                    build a
                    portfolio of mock stocks based on real-time, real-life prices</p>

                <img src="/images/basic.png" alt="(Unable to Load Image)" />


                <p> Frontend GUI created with NetBeans IDE with Java Swift JFrame </p>
                <p> Live stock prices queried from FinnHub RESTfull API service </p>

                <img src="/images/reset.png" alt="(Unable to Load Image)" />


                <p>The original version I wrote for Android mobile devices had 26,000+ unique downloads on the Google
                    Play Store</p>

                <img src="/images/installs.png" alt="(Unable to Load Image)" />

                <p>Screenshot of download statistics</p>
            </div>

        </div>

        <div id='apps-content' class='content'>
            <br><a href='https://ruby.aidanswebsite.com/' class="translatable project">WAVEAPP: live buoy
                readings for
                wind and waves from NOAA
                integrated with interactive Google Maps API</a><br><br>
            <a href='/timemachine' class="translatable project">Time machine: see previous versions of my
                website (git
                history)</a><br><br>
            <a href='/weather' class="translatable project">local weather: simple weather application for
                helping my
                neighbors</a><br><br>
            <a href='/sb' class="translatable project">local weather: quickly see the local weather & surf
                forcast</a><br><br>
            <a href='/marketsim' class="translatable project">stock market simulator: Given 1,000 virtual
                dollars users
                can buy and sell U.S. traded stocks at realtime prices</a><br><br>
        </div>


        <script src='/home/translate_script.js' defer></script>
        <script src='/home/tabs.js' defer></script>

</body>

</html>