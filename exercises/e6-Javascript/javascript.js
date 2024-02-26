// 
console.log("Testing to see if JS file is linked");


//Interaction Section
const greenCircle = document.getElementById("green");
const pinkCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");
let interactionContainer = document.getElementById("interactionContainer")

greenCircle.addEventListener("click", function (){
    console.log(interactionContainer)
    interactionContainer.style.backgroundColor = "lightgreen";
})

pinkCircle.addEventListener("click", function (){
    interactionContainer.style.backgroundColor = "plum";
})

blueCircle.addEventListener("click", function (){
    interactionContainer.style.backgroundColor = "lightblue";
})


//LOOP SECTION
const loopContainer = document.getElementById("loopContainer")
let message = "hello";
message = "brave";

for (let i = 0; i < 7; i++) {
    console.log("brave")
    const textDiv = document.createElement("div");
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);
}


//CONDITION SECTION
const conditionContainer = document.getElementById("conditionContainer")
const square = document.getElementById("square");

conditionContainer.addEventListener("mouseover", function () {
    console.log("hovering over condition container")
    square.style.backgroundColor = "green";
})

conditionContainer.addEventListener("mouseout", function () {
    // console.log("hovering over condition container")
    square.style.backgroundColor = "lightsalmon";
});



//TIME SECTION
const increaseText = document.getElementById("increaseText"); 
let fontSize = 20; //set font size of 20px
let timeIncrease = setInterval(increaseFontSize, 1000); //font size increases per second

//Function of incraeasing the font size
function increaseFontSize() {
    fontSize++; //increment to add one
    increaseText.style.fontSize = fontSize + "px"; //added px to establish font size property
}

//TIME SECTION REFERENCES
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// - https://www.w3schools.com/jsref/met_win_setinterval.asp



//INPUT SECTION
//Function when "submit" button is clicked
document.getElementById('submit').addEventListener("click", function () {
    //gets the value of the inputted text
    const inputText = document.getElementById("inputText").value;
    //turns the inputted text value into the lenth/number of characters
    const textLength = inputText.length;
    
    //"text-length" paragraph is turned inti "Text Length + (insert number of characters)"
    document.getElementById("text-length").innerHTML = "Text Length: " + textLength;
});

//INPUT SECTION REFERENCES
// - https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_text_value
// - https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_length_string


//CONSOLE SECTION
console.log("If you're reading this, you've opened the console log.")