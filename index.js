

function checkTime(){
    console.log("rfre")
let date = new Date()
let display = document.getElementById("display")
if(date.getHours()<12 && date.getHours()>1 ){
display.innerHTML = "GOOD MORNING"
}
else if(date.getHours()<16 && date.getHours()>12){
    display.innerHTML = "GOOD AFTERNOON"
}
else if(date.getHours()<19 && date.getHours()>16){
    display.innerHTML = "GOOD AFTERNOON"
}
else if(date.getHours()<24 && date.getHours()>19){
    display.innerHTML = "HELLO NIGHT OWL"
}
}

