<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../styles/watermark.css">
    <title>Reading form data with PHP</title>
</head>
<body bgcolor="black">
    <font color="orange" face="Verdana" size="5">
    <h1>Your inputs are:</h1>    
    <h3>Username:
        <?php
        echo $_REQUEST["username"];
        ?>
    </h3>
    <h3>Password:
        <?php
        echo $_REQUEST["password"];
        ?>
    </h3>
    <h3>Gender:
        <?php
        if (isset($_REQUEST["gender"])) {
            echo $_REQUEST["gender"];
        }
        ?>
    </h3>
    <h3>City:
        <?php
        echo $_REQUEST["city"];
        ?>
    </h3>
    <h3>Your preferences:
        <?php
        if (isset($_REQUEST["newsletters"])) {
            echo $_REQUEST["newsletters"], " ";
        }
        if (isset($_REQUEST["surveys"])) {
            echo $_REQUEST["surveys"], " ";
        }
        if (isset($_REQUEST["emails"])) {
            echo $_REQUEST["emails"], " ";
        }
        ?>
    </h3>
    <h3>Comment:
        <?php
        echo $_REQUEST["comments"];
        ?>
    </h3>
    </font>
</body>
</html>