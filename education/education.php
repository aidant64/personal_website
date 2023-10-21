<!DOCTYPE html>
<html lang="en">

<head>
</head>

<body>
    <?php
    session_start();
    echo "<h2>", $_SESSION['lines'][6], "</h2>";
    ?>

    <a href="https://www.linkedin.com/in/aidanthomas128">LinkedIn</a>

    <div id="Education">

        <?php
        echo "<h4>", $_SESSION['lines'][7], "</h4>";
        echo "<p>", $_SESSION['lines'][8], "</p>";
        echo "<p>GPA: 3.77<p>";
        echo "<p>", $_SESSION['lines'][33], " GPA: 3.88</p>";
        ?>
    </div>

    <div>
        <br>
        <br>
        <?php
        echo "<p>", $_SESSION['lines'][30], "</p>";
        echo "<p>", $_SESSION['lines'][31], "</p>";
        echo "<p>", $_SESSION['lines'][32], "</p>";
        ?>
        <div>
</body>


</html>
