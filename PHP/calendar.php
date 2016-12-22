<?php
require_once('mysql_con_online.php');

$sql="SELECT DATE_FORMAT(Date_of_event,'%d') AS Days FROM reservation;";

$retval = mysql_query( $sql, $conn );
$rowCount = mysql_num_rows($retval);
$data = array();
while($row = mysql_fetch_array($retval)){
    
    $data[] = $row['Days'];
}
foreach($data as $a){
    echo $a.',';
}
?>