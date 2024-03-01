console.log("hello");

for (let i = 0; i < 1; i++) {
    let x = Math.random() * 360; //variable to choose a random number between 1-360

    let block = `<div style="width: 600px; height: 600px; background-color: hsl(${x}, 100%, 50%)"> </div>`; //x variable is applied to the value of the hue
    //"block" is set as the variable for the div and its properties
    $('.square').append(block); //adds the block variable (div) to the square
}

$( window ).on( "resize", function() { //window resize function
    console.log('window resized') //when the window is resized, the text appears in the console
    $('div').addClass('circleChange') //the properties of "circleChange" class is added to properties of the div
    $('#description').text("Now it's a circle") //the description text is changed when the window is resized
    $( 'div' ).animate({ opacity: 0.5 }, 500 ); //the div element is animated when the window is resized
  } );


  $('body').on('keypress', function () { //keypress function
    console.log('key pressed!') //when a key is pressed, the text appears in the console
    $('div').removeClass('circleChange') //the properties of "circleChange" class is removed from the properties of the div
    $('#description').text("Now it's a square") //the description text is changed when the window is resized
    $( 'div' ).animate({ opacity: 1 }, 500 ) //the div element is animated when the window is resized
})

// - event = resize
// - animate = effect
// - text = manipulation
//When the window resizes, the square turns slowly turns into a circle, the opacity lowers, and the text changes