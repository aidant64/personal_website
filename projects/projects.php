<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        code {
            color: red;
            padding-bottom: 5px;
        }
    </style>
</head>

<body>
    <?php
    session_start();
    echo "<h2>", $_SESSION['lines'][9], "</h2>";
    ?>

    <a href="https://github.com/aidant64/marketsim">github.com/aidant64/marketsim</a>

    <?php
    echo "<p>", $_SESSION['lines'][29], "</p>";
    ?>
    <div>

        <div style="background-color: #16226b; padding: 30px;">
            <?php
            echo "<p style='background-color: #16226b;'>", $_SESSION['lines'][10], "</p>";
            ?>


            <code
                style='background-color: #16226b;'>git clone https://github.com/aidant64/marketsim.git && cd marketsim/ && javac -d . Main/Main.java && java Main.Main</code>
        </div>

        <?php
        echo "<p>", $_SESSION['lines'][11], "</p>";
        ?>

        <img src="/images/basic.png" alt="(Unable to Load Image)" />

        <?php
        echo "<p>", $_SESSION['lines'][12], "</p>";
        echo "<p>", $_SESSION['lines'][13], "</p>";
        ?>

        <img src="/images/reset.png" alt="(Unable to Load Image)" />

        <?php
        echo "<p>", $_SESSION['lines'][14], "</p>";
        ?>

        <img src="/images/UserInstalls/installs.png" alt="(Unable to Load Image)" />

        <?php
        echo "<p>", $_SESSION['lines'][15], "</p>";
        ?>
    </div>
</body>


</html>