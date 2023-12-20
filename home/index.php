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
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM+Mono">
</head>

<body>
    <div class="container">

        <div class="inline">
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



        <div class="mtable">
            <br> <br>
            <p class="translatable">Education:</p>

            <table>
                <tr>
                    <td class="translatable">San Diego State University</td>
                </tr>
                <tr>
                    <td class="translatable">Bachelor of Science, Computer Science</td>
                    <td class="translatable">GPA: 3.77</td>
                </tr>
                <tr>
                    <td class="translatable">Graduation: May 2024</td>
                    <td class="translatable">Major GPA: 3.88</td>
                </tr>
            </table>
            <br>

            <p class="translatable">Research:</p>

            <table>
                <tr>
                    <td class="translatable">San Diego State University R.T.E.C. Lab</td>
                    <td><a class="translatable" href='https://rtec.sdsu.edu'>RTEC Lab Website</a></td>
                </tr>
                <tr>
                    <td class="translatable">Design of Priority-Driven Chain-Aware Scheduling for
                        autonomous vehicles</td>
                    <td class="translatable">September 2022 -> Current</td>
                </tr>
            </table>
            <br>
            <!-- <a href='https://www.sdsucyberdefense.org/'><img
                    src='https://www.sdsucyberdefense.org/images/cdt_logo-p-500.png' width=60px, height=45px> -->
            <p class="translatable">Cyber Defense Team:</p>

            <table>
                <tr>
                    <td class="translatable">San Diego State Cyber Defense Team</td>
                    <td><a href='https://www.sdsucyberdefense.org/' class="translatable">Cyber Defense Club Website</a>
                    </td>
                </tr>
                <tr>
                    <td class="translatable">Placed 24th out of more than 4000 teams in the 2023 National Cyber League
                        Team Competition</td>
                    <td class="translatable">Placed 10th out of 24 teams in the 2023 CCDC Invitational Competition</td>
                </tr>
            </table>

            <br>
            <p class="translatable">Projects:</p>
            <br>
        </div>


        <div>
            <br><a href='/map' class="translatable project">WAVEAPP: live buoy readings for wind and waves from NOAA
                integrated with interactive Google Maps API</a><br><br>
            <a href='/timemachine' class="translatable project">Time machine: see previous versions of my website (git
                history)</a><br><br>
            <a href='/weather' class="translatable project">local weather: simple weather application for helping my
                neighbor</a><br><br>
            <a href='/marketsim' class="translatable project">stock market simulator: Given 1,000 virtual dollars users
                can buy and sell U.S. traded stocks at realtime prices</a><br><br>
        </div>

    </div>

    <script src='/home/translate_script.js' defer></script>

</body>

</html>