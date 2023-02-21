$(document).ready(function(){
    $(".section-header").click(function(){
        $(".section-header").css({"background-color":"red",})
    })
    
    $(".content-col-row-small").click(function(){
        $(".content-col-row-small").text("left-bar");
    })

    $(".content-col-row-2").click(function(){
         $(".content-col-row-1").fadeOut(2000);
    });
    
    });

