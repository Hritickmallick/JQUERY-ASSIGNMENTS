$(document).ready(function(){
    $("#submit").click(function(){
        if(!$("input-field input-field-2").val()){
            alert("Please fill all fields")
        }
    })
})