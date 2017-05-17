$(document).ready(
    function() {
        $(".fa").hover(function() {
            $(this).css("color", "black");

        }, function() {
            $(this).css("color", "white");


        });

        $("#wikilink").hover(function() {
            $(this).css("color", "black");

        }, function() {
            $(this).css("color", "#6f5499");


        });
    }
);