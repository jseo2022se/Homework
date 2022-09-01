let body = document.querySelector("body")
console.log("This is the body...", body)

let button = document.querySelector("button")

let lightbulb = document.querySelector("img")
console.log("this is...", lightbulb)
let lightOn = true
button.addEventListener("click", function(event){
    event.preventDefault();
    if (lightOn) {
        lightOn = false;
        button.textContent = "Let there be light!";
        lightbulb.src = "light-bulb-off.png";
        body.style.backgroundColor = "black";
    }
    else {
        lightOn = true;
        button.textContent = "Turn light off!";
        lightbulb.src = "light-bulb.png";
        body.style.backgroundColor = "white";}
})