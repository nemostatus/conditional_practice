document.addEventListener("keypress", cat)
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

function hider(event) {
    console.log("gerf")

event.innerHTML = `YOU FOUND THE HIDDEN ELEMENT!!`


}

function cat(event)  {
    console.log("Rgerg")
   

   event.target.innerHTML += ` <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="200" ></img>`
   
}

