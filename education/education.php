<!DOCTYPE html>
<html lang="en">

<head>
</head>

<body>
    <h2 class="banner">================================================</h2>
    <?php
    session_start();
    echo "<h2>", $_SESSION['lines'][6], "</h2>"; 
    ?>
    <h2 class="banner">================================================</h2>

    <a href="https://www.linkedin.com/in/aidanthomas128">linkedin.com/aidanthomas128</a>

    <div id="Education">
        
        <?php
        echo "<h4>", $_SESSION['lines'][7], "</h4>";
        echo "<p>", $_SESSION['lines'][8], "</p>"
        ?>
        <p>GPA: 3.77</p>
        <p>Major GPA: 3.88</p>
    </div>

    <div>
        <br>
        <br>
    <?php
        echo "<p>", $_SESSION['lines'][30], "</p>";
        echo "<p>", $_SESSION['lines'][31], "</p>"
        ?>
    <div>
</body>


</html>