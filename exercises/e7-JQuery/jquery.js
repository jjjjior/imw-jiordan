console.log("hello");

$('body').css('background-color', 'white');

let text = 'hello';

$('.background').hide();

for (let i = 0; i < 500; i++) { //executes block of code 500 times
    let block = `<div style="width: ${i}px; height: 100vw; background-color: hsl(${i}, 100%, 50%)"> </div>`;
    //"block" is set as the variable for the div and its properties
    $('.foreground').append(block); //adds the block variable (div) to the foreground class
}

$('div').each(function () { //selects every div (every singular rectangle)
    $(this).on('mouseenter', function (){ //mouse enter function for every div
        $(this).addClass('noWidth') //every div gains the 'noWidth' css property
    })
})
//when the mouse enters a div(singular rectangle), the div gains the 'noWidth' css property.
//*mouseenter is different from mouseover because mouseenter only accounts for one action, not leavin.



// $('body').on('keypress', function () { //key press function for the body
//     console.log('key pressed!') //when a key is pressed, this phrase shows in the console
//     $('div').removeClass('noWidth') //the div (500 rectangles) removes the 'noWidth' css property
// })
// //when a key is pressed, the div removes the 'noWidth css property
// //resets

$( window ).on( "resize", function() { 
    console.log('window resized')
    $('div').removeClass('noWidth')
  } );
