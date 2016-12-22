<link href="CSS/pop.css" rel="stylesheet" />
<?php
session_start();


echo "
<div id='boxes'>
            <div id='dialog' class='window'>
                <center><h2>Thank You!</h2></center><br>
                <div id='popupfoot'> <a href='index.html'>OK!</a></div>
            </div>
            <div id='mask'></div>
         </div>";
session_destroy();
?>



<script src="JS/jquery-2.2.0.js"></script>
<script src="JS/paypal.js"></script>

