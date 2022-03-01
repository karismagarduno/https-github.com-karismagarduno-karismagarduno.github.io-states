function findcapital(){
    var Washington =["Settle"];
    var Colorado =["Denver"];
    var Flordia=["Orlando"];
    var Massachusetts=["Boston"];
    var Oregon=["Portland"];
    var Utah=["Salt Lake"];
    var Arizona=["Phoenix"];
    
    var selectedStates = (document.getElementById("States").value);

document.getElementById('capital').innerHTML="";

if(selectedStates == "Washington"){
    document.getElementById("capital").innerHTML = "Capital is: " +Washington;
}
else if(selectedStates == "Colorado"){
    document.getElementById("capital").innerHTML = "Capital is: " +Colorado;
}
else if(selectedStates == "Flordia"){
    document.getElementById("capital").innerHTML = "Capital is: " +Flordia;
}
else if(selectedStates == "Massachusetts"){
    document.getElementById("capital").innerHTML = "Capital is:" +Massachusetts;
}
else if(selectedStates == "Oregon"){
    document.getElementById("capital").innerHTML = "Capital is: " +Oregon;
}
else if(selectedStates == "Utah"){
    document.getElementById("capital").innerHTML = "Capital is: " +Utah;
}
else if(selectedStates == "Arizona"){
    document.getElementById("capital").innerHTML = "Capital is: " +Arizona;
}
}