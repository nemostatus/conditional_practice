

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
    display.innerHTML = "GOOD EVENING"
}
else if(date.getHours()<24 && date.getHours()>19){
    display.innerHTML = "HELLO NIGHT OWL"
}
}
//the above function handles the click event, let's work with other events

const hider = () => {
    console.log("gerf")
let hide = document.getElementById("hidden")

    hide.innerHTML = "YOU FOUND THE HIDDEN ELEMENT!!"

}

