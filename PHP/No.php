<?php
require_once('mysql_con_online.php');
session_start();
$reserve_id=$_SESSION['reserve'];
$stmt1 = $conn->prepare("UPDATE reservation SET Paid = 'N' WHERE Reservation_id = ?");

$stmt1->bind_param('s',$reserve_id);
$stmt1->execute();



if(! $stmt1 ) {
      die('Could not update data: ' . mysql_error());
   }
   $stmt1->close();
   $conn->close();

?>