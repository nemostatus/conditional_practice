// document.addEventListener("keypress", cat);
 let feedCount 
 let waterCount 
 feedCount = 0
 waterCount = 0
// function checkTime(){
//     console.log("rfre")
// let date = new Date()
// console.log(date)
// let display = document.getElementById("display")
// console.log(display)
// if(date.getHours()<12 && date.getHours()>1 ){
// display.innerHTML = "GOOD MORNING"
// }
// else if(date.getHours()<16 && date.getHours()>12){
//     display.innerHTML = "GOOD AFTERNOON"
// }
// else if(date.getHours()<19 && date.getHours()>16){
//     display.innerHTML = "GOOD EVENING"
// }
// else {
//     display.innerHTML = "HELLO NIGHT OWL"
// }
// }

// function cat(event)  {
//     console.log("Rgerg")
//     event.target.innerHTML += ` <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="200" ></img>`
   
// }
// function condition(){
//     document.getElementById("testing").innerHTML = "thank you for scrolling over me"
// }

// function changeColor(event){
//     console.log("gref")
//     event.target.style.backgroundColor = 'aqua'
// }

// function returnColor(event){
//     event.target.style.backgroundColor = 'grey'
// }

// function counter() {
   
//       count += 1;
//       console.log(count)
//     document.getElementById("check").innerHTML = count
//   }
//   function counter5() {
//    count += 1;
//    if(count ===5){
//     document.getElementById("miniGame").innerHTML = "YOU WIN"
//    }
 
// }

function giveName(event){
event.preventDefault()
    document.getElementById("title").innerHTML = `<h2> ${document.getElementById("name").value}</h2>`
}

function feedCat(){
    feedCount++
    if(feedCount ===1){
        document.getElementById("fed").innerHTML = `<h3>Thank you for feeding me :)<h3>`
    }
    else if(feedCount ===2){
        document.getElementById("fed").innerHTML = `<h3>Thank you I'm getting quite full now :/<h3>`
    }
    else if(feedCount ===3){
        document.getElementById("fed").innerHTML = `<h3>I'm like a fish, if you keep feeding me, I will eat, be careful :(<h3>`
    }
    else if(feedCount === 4){
        document.getElementById("pic").innerHTML = `<img src=  "https://cdn.pixabay.com/photo/2017/02/18/18/09/skull-and-crossbones-2077840_960_720.jpg" width="200">`
        document.getElementById("title").innerHTML = `<h2>RIP<h2>`
        document.getElementById("fed").innerHTML = `<h1>I told you.<h1>
        <button id="revive"onclick ="revive()">PAY 100k to the Vet </button> `
        document.getElementById("watered").remove()
        document.getElementById("feed").remove()
        document.getElementById("water").remove()
        document.getElementById("form").remove()
    }
}

function waterCat(){
    waterCount++
    if(waterCount ===1){
        document.getElementById("watered").innerHTML = `<h3>Thank you for giving me water :)<h3>`
    }
    else if(waterCount ===2){
        document.getElementById("watered").innerHTML = `<h3>My thirst is more than quenched :/<h3>`
    }
    else if(waterCount ===3){
        document.getElementById("watered").innerHTML = `<h3>Are you trying to drown me? :(<h3>`
    }
    else if(waterCount === 4){
        document.getElementById("pic").innerHTML = `<img src=  "https://cdn.pixabay.com/photo/2017/02/18/18/09/skull-and-crossbones-2077840_960_720.jpg" width="200">`
        document.getElementById("title").innerHTML = `<h2>RIP<h2>`
        document.getElementById("watered").innerHTML = `<h1>I told you.<h1> 
        <button id="revive" onclick ="revive()">PAY 100k to the Vet</button> `
        document.getElementById("fed").remove()
        document.getElementById("feed").remove()
        document.getElementById("water").remove()
    }
}

function revive(){
    document.getElementById("pic").innerHTML = `<img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="200" ></img>`
    document.getElementById("revive").remove()
    document.getElementById("title").innerHTML = `<h2>ZOMBIE PET<h2>`
    // document.getElementById("watered").innerHTML.remove()
    // document.getElementById("fed").innerHTML.remove()
   if(document.getElementById("watered").remove() != null){
    document.getElementById("watered").remove()}
    else{
        document.getElementById("fed").remove()
    }
    feedCount = 0
  waterCount = 0
}
//once = to 4  remove other message, remove buttons, add take to vet button

//    function inner(){
//     counter++
//         console.log(counter)}
//         return inner()
        



