function tempConvert(){
    var celsius=parseFloat(document.getElementById("cels").value) ;
    var farh = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = "Fahrenheit: "+ farh.toFixed(2)+ " (°F)";
    
}