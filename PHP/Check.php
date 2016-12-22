<?php
$Reserve=$_SESSION['reserve'];




$retval = $conn->prepare("SELECT Reservation_id from reservation where Reservation_id=?;");
$retval->bind_param('s',$Reserve);


while($row = mysql_fetch_array($retval)){
$Reseve_session=$row['Reservation_id'];
}

if(!isset($Reseve_session))
{
            
            echo "<script>";
            echo 'location.href = "index.html";';
            echo "</script>";
}
?>