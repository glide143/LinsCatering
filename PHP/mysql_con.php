<?php
$db_name ="Lins_Catering_Services";
$conn = mysql_connect('localhost', 'root', '');

if (!$conn) {
    die('Could not connect: ' . mysql_error());
}


mysql_select_db($db_name) or die ('No database');

?>