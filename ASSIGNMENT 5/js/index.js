$(document).ready(function(){
    $(".section-footer").click(function(){
        $("#popup-overlay").removeClass("popup-hide");

        $(".cross-btn").click(function(){
            $("#popup-overlay").addClass("popup-hide")
        });
        });
});