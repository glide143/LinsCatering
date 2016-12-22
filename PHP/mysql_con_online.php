<?php
$db_name ="acsm_6b56686aed5c72c";
$conn = mysqli_connect('ap-cdbr-azure-east-c.cloudapp.net', 'b656a2145e23fc','bc52476d');

if (!$conn) {
    die('Could not connect: ' . mysql_error());
}

echo"Connected";

mysqli_select_db($conn,$db_name) or die ('No database');

?>