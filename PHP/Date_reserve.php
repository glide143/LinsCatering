<html>
<head>
      <script type="text/javascript" src="../JS/jquery-2.2.0.js"></script><style type="text/css"></style>
      <script type="text/javascript" src="../JS/jquery.qtip.js"></script>
      <link rel="stylesheet" href="../CSS/bootstrap.css">
      <link rel="stylesheet" href="../style.css">
      <link rel="stylesheet" type="text/css" href="../CSS/jquery.qtip.css">
      <link rel="stylesheet" type="text/css" href="../CSS/jquery.fullcalendar.css">
      <script type="text/javascript" src="../JS/jquery.fullcalendar.min.js"></script>
      <script type="text/javascript" src="../JS/jquery-ui.min.js"></script>
  <style type="text/css">
    body{
   width: auto;
        background-color: white;
}

  </style>
<script type="text/javascript">
    
$(window).load(function(){
 function fetch_data()  
      {  
          var tmp = null;
         
           $.ajax({
               'async': false,
               'global': false,
                url:"calendar.php",  
                method:"POST",  
                success:function(data){  
                tmp = data.split(",");
                }  
           });
            return tmp;
      }
    
    

    
      
(function() {
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
    var x = fetch_data();
    var i;
	var tooltip = $('<div/>').qtip({
		id: 'fullcalendar',
		prerender: true,
		content: {
			text: ' ',
			title: {
				button: false
			}
		},
		position: {
			my: 'bottom center',
			at: 'top center',
			target: 'mouse',
			viewport: $('#fullcalendar'),
			adjust: {
				mouse: false,
				scroll: false
			}
		},
		show: false,
		hide: false,
		style: 'qtip-light'
	}).qtip('api');

	$('#fullcalendar').fullCalendar({
		editable: true,
		height: 300,
		header: {
			left: 'title',
			center: '',
			right: 'today prev,next'
		},
		/*eventClick: function(data, event, view) {
			var content = '<h3>'+data.title+'</h3>' + 
				'<p><b>Start:</b> '+data.start+'<br />' + 
				(data.end && '<p><b>End:</b> '+data.end+'</p>' || '');

			tooltip.set({
				'content.text': content
			})
			.reposition(event).show(event);
		},*/
        dayClick: function() { tooltip.hide() },
		eventResizeStart: function() { tooltip.hide() },
		eventDragStart: function() { tooltip.hide() },
		viewDisplay: function() { tooltip.hide() },
		events: [
          
            {
                title: 'DATE TAKEN',
                start: new Date(y, m, x[0])
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[1]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[2]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[3]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[4]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[5]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[6]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[7]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[8]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[9]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[10]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[11]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[12]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[13]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[14]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[15]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[16]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[17]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[18]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[19]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[20]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[21]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[22]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[23]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[24]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[25]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[26]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[27]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[28]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[29]) 
            },
            {
                title: 'DATE TAKEN',
				start: new Date(y, m, x[30]) 
            }
           
		
		]
	});
}());
});
</script>

    
    </head>
    <body>
        <div id="fullcalendar" class="fc fc-ltr"></div>
        <div class="btndate">
        <a class="btn btn-primary btn-lg" href='../index.html'  role='button'>Back</a>
            </div>
       
    </body>


</html>