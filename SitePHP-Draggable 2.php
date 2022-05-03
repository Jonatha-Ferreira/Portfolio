<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Draggable - Default functionality</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <style>
  #draggable, #draggable2 { width: 150px; height: 150px; padding: 0.5em; }
  </style>
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#draggable" ).draggable();
	$( "#draggable2" ).draggable({ cursorAt: { bottom: 0 } });
  } );
  </script>
</head>
<body>
 
<div id="draggable" class="ui-widget-content">
    <p>	
		<?php
			for ( $it = 0 ; $it < 20 ; $it++) {
			print( "<span class=\"linha\">linha número " . $it . "</span><br />");   
			}
		?>
	</p>
</div>
	
<div id="draggable2" class="ui-widget-content">
  <p>My cursor position is only controled for the &aois;bottom&aois; value</p>
</div>

</body>
	<script type="text/javascript">
            $(document).ready(function() {
                alert("Developmenting!");
            });
        </script>
</html>