<!DOCTYPE html>
<html>
<head>
<script src="JS/jquery-2.2.0.js"></script>
<link rel="stylesheet" href="CSS/bootstrap.css">
<link rel="stylesheet" href="CSS/main.css">
<style>
    body{
        background-color: gray;
    }
</style>
</head>
<body>
<div class="container">
<div class="row row-centered">
<div id="Confirm" class="Confirm col-xs-6 col-centered">
<h1>Confirm Reservation?</h1>
<a class="btn btn-primary btn-lg 1" id="Yes" role="button">Yes</a>
<a class="btn btn-primary btn-lg" id="no" role="button">NO</a>
</div>
    </div>
<?php
require_once('PHP/mysql_con.php');

session_start();
if(isset($_POST['submit'])){
$random = date("Y") . rand(10000,100000);
$Contact = preg_replace('#[^a-z0-9 ]#i', '', $_POST['contact']);
$Name = preg_replace('#[^a-z0-9 ]#i', '', $_POST['CusName']);
$date = $_POST['date'];
$Address = $_POST['Address'];
$City = $_POST['City'];
$Package = $_POST['Package'];

$query = "SELECT Date_of_event 
FROM reservation
WHERE Date_of_event = '$date';";
    
$select = mysql_query($query,$conn);
    
if (mysql_num_rows($select)){
    echo"<div class='row row-centered'>";
    echo"<div class='pop-up col-xs-6 col-centered' id='pop'>";
    echo"<h2>Sorry! Date is already taken/ Date is Already Reserved</h2>";
    echo"<h3>*Please contact linscatering to inquire date validity</h3>";
    echo"<h4>Please choose another date</h4>";
    echo"<a class='btn btn-primary btn-lg 1' href='index.html'  role='button'>Back</a>";
    echo"</div>";
    echo"</div>";
}
else{
echo"<div class='row row-centered'>";
echo"<div class='pop-up col-xs-6 col-centered' id='pop'>";
echo"<h2>Online payment or Cash Payment?</h2>";

echo"<a class='btn btn-primary btn-lg 1' href='PHP/paypal.php'  id='' role='button'>Online</a>&nbsp;&nbsp;";      
echo"<a class='btn btn-primary btn-lg 1'   id='Cash' role='button'>Cash</a>";

echo"</div>";
echo"</div>";
$sql = "INSERT INTO reservation VALUES ($random,'$Package','$Name','$Contact','$date','$Address','$City',NOW(),'Y');";
$insert = mysql_query( $sql, $conn );
       $_SESSION['reserve']=$random;
       $_SESSION['Package']= $Package;   
if(! $insert ) {
      die('Could not enter data: ' . mysql_error());
   }
}
/*$query = "SELECT Description, Price
FROM package
WHERE Package_id = '$Package';";  
 $select = mysql_query($query,$conn);
*/
   
}
?>
<div class='row row-centered'>
<div class='pop-up col-xs-6 col-centered' id="Pop2">
    
    <h2>your date is now reserved please contact lins catering for the cash payment, failure to pay the amount with in 5 days will remove your reservation and make it available for others. Thank you</h2>
    <a class='btn btn-primary btn-lg 1' href='index.html'  role='button'>Ok</a>

</div>
    </div>
    </div>
<script>
  $(document).ready(function(){
      
      $("#Yes").click(
          function(){
              $("#pop").fadeToggle(1000);
              $("#Confirm").slideToggle(1000);
          }); 
      
  });  
</script>
<script>
$(document).ready(function(){
    
    $("#Cash").click(
        function(){
      $.ajax({  
                url:"PHP/No.php",  
                method:"POST",  
                success:function(data){  
                  $("#pop").slideToggle(1000);    
                  $("#Pop2").fadeToggle(1000);
                }  
           });
          });
          
  });  
</script>
</body>
</html>