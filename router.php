<?php
#;
#header('Cache-Control: no-cache');
#header('location: https://www.ford.com/');


#check valid page (null -> education)
$url = $_SERVER['REQUEST_URI'];
$urlParts = explode('/', trim($url, '/'));
$length = count($urlParts);

$languageCodes = array(
    'af', 'sq', 'am', 'ar', 'hy', 'as', 'ay', 'az', 'bm', 'eu', 'be', 'bn', 'bho', 'bs', 'bg', 'ca', 'ceb', 'zh-CN or zh (BCP-47)', 'zh-TW (BCP-47)', 'co', 'hr', 'cs', 'da', 'dv', 'doi', 'nl', 'en', 'eo', 'et', 'ee', 'fil', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gn', 'gu', 'ht', 'ha', 'haw', 'he or iw', 'hi', 'hmn', 'hu', 'is', 'ig', 'ilo', 'id', 'ga', 'it', 'ja', 'jv or jw', 'kn', 'kk', 'km', 'rw', 'gom', 'ko', 'kri', 'ku', 'ckb', 'ky', 'lo', 'la', 'lv', 'ln', 'lt', 'lg', 'lb', 'mk', 'mai', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mni-Mtei', 'lus', 'mn', 'my', 'ne', 'no', 'ny', 'or', 'om', 'ps', 'fa', 'pl', 'pt', 'pa', 'qu', 'ro', 'ru', 'sm', 'sa', 'gd', 'nso', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tl', 'tg', 'ta', 'tt', 'te', 'th', 'ti', 'ts', 'tr', 'tk', 'ak', 'uk', 'ur', 'ug', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu', 'en-US', 'en-UK'
);

if($urlParts[0] == null){
	$acceptLanguageHeader = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
	$lanCode = explode(',', trim($acceptLanguageHeader, ','))[0];
	if($lanCode == null){
		http_response_code(301);
 		header('location: https://www.aidanswebsite.com/es');
 		exit;
	}else{
		http_response_code(301);
		header("location: https://www.aidanswebsite.com/$lanCode");
		exit;
	}
}

$command = escapeshellcmd("python3 /var/www/html/translate.py $urlParts[0]");
$output = shell_exec($command);

if ($output == "bad") {
	require 'lnf.php';
    exit;
}

$delim = '^^';
$lines = explode($delim, $output);
session_start();
$_SESSION['lines'] = $lines;

$pageNum = 0;
if($urlParts[1] === null || $urlParts[1] === 'home'){
	$pageNum = 0; 
	require 'index.php';
    exit;
}

require 'nf.html';

?>

