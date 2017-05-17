$(document).ready(
    function() {
        $(".fa").hover(function() {
            $(this).css("color", "red");
            $(this).addClass("bounce");

        }, function() {
            $(this).css("color", "black");
            $(this).removeClass("bounce");
        });









    }
);