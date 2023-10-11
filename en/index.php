<!DOCTYPE html>
<html lang="en">

<head>
<title>portfolio</title>
</head>

<body>
<h1>Hello, World!</h1>

    <?php
    echo 'HTTP Method: ' . $_SERVER['REQUEST_METHOD'] . '<br>';
    echo 'Requested URL: ' . $_SERVER['REQUEST_URI'] . '<br>';
    echo 'User Agent: ' . $_SERVER['HTTP_USER_AGENT'] . '<br>';

    if (isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
        echo 'Accept Language: ' . $_SERVER['HTTP_ACCEPT_LANGUAGE'] . '<br>';
    }


$filePath = '/index.html';

// Read the file contents
$fileContents = file_get_contents($filePath);

// Echo the file contents
echo $fileContents;

    ?>

</body>

</html>
