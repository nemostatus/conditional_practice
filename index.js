document.addEventListener("DOMContentLoaded",checkTime )

function checkTime(){
let date = new Date()
let display = document.getElementById("display")
if(date.getHours()<12 && date.getHours()>1 ){
display.innerHTML = "GOOD MORNING"
}
else{
    
}
}