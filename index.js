document.addEventListener("keypress", cat);
let count = 0
function checkTime(){
    console.log("rfre")
let date = new Date()
console.log(date)
let display = document.getElementById("display")
console.log(display)
if(date.getHours()<12 && date.getHours()>1 ){
display.innerHTML = "GOOD MORNING"
}
else if(date.getHours()<16 && date.getHours()>12){
    display.innerHTML = "GOOD AFTERNOON"
}
else if(date.getHours()<19 && date.getHours()>16){
    display.innerHTML = "GOOD EVENING"
}
else {
    display.innerHTML = "HELLO NIGHT OWL"
}
}

function cat(event)  {
    console.log("Rgerg")
    event.target.innerHTML += ` <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="200" ></img>`
   
}
function condition(){
    document.getElementById("testing").innerHTML = "thank you for scrolling over me"
}

function changeColor(event){
    console.log("gref")
    event.target.style.backgroundColor = 'aqua'
}

function returnColor(event){
    event.target.style.backgroundColor = 'grey'
}

function counter() {
   
      count += 1;
      console.log(count)
    document.getElementById("check").innerHTML = count
  }
  function counter5() {
   count += 1;
   if(count ===5){
    document.getElementById("miniGame").innerHTML = "YOU WIN"
   }
 
}

function giveName(event){
event.preventDefault()
    document.getElementById("title").innerHTML = `<h2> ${document.getElementById("name").value}</h2>`
}



//    function inner(){
//     counter++
//         console.log(counter)}
//         return inner()
        



