<!DOCTYPE html>
<html lang="en">

<head>
</head>

<body>
    <?php
        session_start();
        echo "<h2>", $_SESSION['lines'][16], "</h2>"; 
        ?>

    <a href="https://rtec.sdsu.edu">rtec.sdsu.edu/</a>

    <?php
        echo "<h4>", $_SESSION['lines'][17], "</h4>"; 
    ?>

    <img src="/images/car.png" alt="(Unable to Load Image)" />

    <div id="research">
        <?php
        echo "<p>", $_SESSION['lines'][18], "</p>";
        echo "<p>", $_SESSION['lines'][19], "</p>"; 
        echo "<p>", $_SESSION['lines'][20], "</p>"; 
        echo "<p>", $_SESSION['lines'][21], "</p>"; 
        echo "<p>", $_SESSION['lines'][22], "</p>"; 
        ?>
    </div>

    <img src="/images/diagram.png" alt="(Unable to Load Image)" />
</body>


</html>