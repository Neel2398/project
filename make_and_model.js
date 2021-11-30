$(document).ready(function () {
    onLoad();
});
function  onLoad  (){
    document.getElementById("honda").style.display = "none";
    document.getElementById("Lexus").style.display = "none";
    document.getElementById("audi").style.display = "none";
}

function myFunction(value){
    if(value == "honda"){
        document.getElementById("honda").style.display = "block";
        document.getElementById("Lexus").style.display = "none";
        document.getElementById("audi").style.display = "none";
    }else if(value == "Lexus"){
        document.getElementById("honda").style.display = "none";
        document.getElementById("Lexus").style.display = "block";
        document.getElementById("audi").style.display = "none";
    }else if(value == "audi"){
        document.getElementById("honda").style.display = "none";
        document.getElementById("Lexus").style.display = "none";
        document.getElementById("audi").style.display = "block";
    }
}