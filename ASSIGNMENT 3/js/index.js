$(document).ready(function(){
    $("#submit").click(function(){
        if(!$("#first-name").val()){
            alert("enter your first name")
        }
        if(!$("#last-name").val()){
            alert("enter your last name")
        }
    })
})