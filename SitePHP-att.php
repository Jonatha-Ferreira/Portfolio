<html>

    <head>
        <title>Meu primeiro site em php!!!</title>

        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

        <style type="text/css">
            .linha {
                font-weight: bold;
                color: green;
                padding-left: 10px;
                line-height: 50px;
            }
        </style>
        </head>]

        <body>
            <?php
            for ( $it = 0 ; $it < 20 ; $it++) {
                print( "<span class\"linha\">linha número " . $it . "</span><br />");   
            }
            ?>
        </body>
        <script type="text/javascript">
            $(document).ready(function() {
                alert("Woohoo!");
            });
        </script>
</html>