
// body variable holding the body element
let body = document.querySelector("body")

// button variable holding the button element
let button = document.querySelector("button")

// lightbulb holds image element of lightbulb
let lightbulb = document.querySelector("img")

// boolean variable 
let lightOn = true

// audio holds audio element
let audio = document.querySelector("audio")

// array of strings that hold color names for backgrounds
var colors = ["gold", "darkorange", "darksalmon"]

// variables that hold the div elements in the grid
let cont1 = document.querySelector("#content1")
let cont2 = document.querySelector("#content2")
let cont3 = document.querySelector("#content3")

// contents array that holds all the div variables
var contents = [cont1, cont2, cont3]

// event listener on the button when it's clicked
button.addEventListener("click", function(event){

    event.preventDefault();

    if (lightOn) { // checks whether light is on or off

        lightOn = false;

        button.textContent = "Let there be light!"; // changes button text

        lightbulb.src = "light-bulb-off.png"; // lightbulb image switched to off lightbulb

        body.style.backgroundColor = "black";

        contents.forEach(content => content.style.backgroundColor = "black"); 

        audio.pause(); // audio paused
    }
    else { // condition when lightOn is false

        lightOn = true; 

        button.textContent = "Turn light off!"; //changes button text

        lightbulb.src = "light-bulb.png"; // switches image

        body.style.backgroundColor = "white";

        contents.forEach(content => content.style.backgroundColor = colors[getRandomNum()]) // random background color for divs in the grid

        audio.load(); // resets audio

        audio.play(); // audio is played
    }
})

// random number generator
function getRandomNum() {
    return Math.floor(Math.random() * 3)
}