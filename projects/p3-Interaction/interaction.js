    // Get the div element

    //First shelf level div elements
    var vasediv = document.getElementById('vaseMove');
    var shelfdiv = document.getElementById('shelfMove');
    var cameradiv = document.getElementById('cameraMove');
    var greenbookdiv = document.getElementById('greenbookMove');
    var lampdiv = document.getElementById('lampMove');

    //Second shelf level div elements
    var shelf2div = document.getElementById('shelf2Move');
    var blackbookdiv = document.getElementById('blackbookMove');
    var orangebookdiv = document.getElementById('orangebookMove');
    var greybookdiv = document.getElementById('greybookMove');
    var purplebookdiv = document.getElementById('purplebookMove');
    var totorodiv = document.getElementById('totoroMove');
    var hatdiv = document.getElementById('hatMove');

    //Third shelf level div elements
    var shelf3div = document.getElementById('shelf3Move');
    var shoediv = document.getElementById('shoeMove');
    var candlediv = document.getElementById('candleMove');
    var beardiv = document.getElementById('bearMove');

    //Fourth shelf level div elements
    var shelf4div = document.getElementById('shelf4Move');
    var basketballdiv = document.getElementById('basketballMove');
    var gamecubediv = document.getElementById('gamecubeMove');

    //Fifth shelf level div elements
    var planterdiv = document.getElementById('planterMove');
    var shoeboxdiv = document.getElementById('shoeboxMove');

    // Function to randomize the left and top properties - I had to do a seperate randomized formula to create different positional values for their placement
    function randomizePosition() {
      var left = Math.random() * (window.innerWidth- vasediv.offsetWidth);
      var top = Math.random() * (window.innerHeight - vasediv.offsetHeight);
      vasediv.style.left = left + 'px';
      vasediv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - shelfdiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - shelfdiv.offsetHeight);
      shelfdiv.style.left = left + 'px';
      shelfdiv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - cameradiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - cameradiv.offsetHeight);
      cameradiv.style.left = left + 'px';
      cameradiv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - greenbookdiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - greenbookdiv.offsetHeight);
      greenbookdiv.style.left = left + 'px';
      greenbookdiv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - lampdiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - lampdiv.offsetHeight);
      lampdiv.style.left = left + 'px';
      lampdiv.style.top = top + 'px';



      var left = Math.random() * (window.innerWidth- shelf2div.offsetWidth);
      var top = Math.random() * (window.innerHeight - shelf2div.offsetHeight);
      shelf2div.style.left = left + 'px';
      shelf2div.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - blackbookdiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - blackbookdiv.offsetHeight);
      blackbookdiv.style.left = left + 'px';
      blackbookdiv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - orangebookdiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - orangebookdiv.offsetHeight);
      orangebookdiv.style.left = left + 'px';
      orangebookdiv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - greybookdiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - greybookdiv.offsetHeight);
      greybookdiv.style.left = left + 'px';
      greybookdiv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - purplebookdiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - purplebookdiv.offsetHeight);
      purplebookdiv.style.left = left + 'px';
      purplebookdiv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - greybookdiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - greybookdiv.offsetHeight);
      greybookdiv.style.left = left + 'px';
      greybookdiv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - purplebookdiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - purplebookdiv.offsetHeight);
      purplebookdiv.style.left = left + 'px';
      purplebookdiv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - totorodiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - totorodiv.offsetHeight);
      totorodiv.style.left = left + 'px';
      totorodiv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - hatdiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - purplebookdiv.offsetHeight);
      hatdiv.style.left = left + 'px';
      hatdiv.style.top = top + 'px';



      var left = Math.random() * (window.innerWidth- shelf3div.offsetWidth);
      var top = Math.random() * (window.innerHeight - shelf3div.offsetHeight);
      shelf3div.style.left = left + 'px';
      shelf3div.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - shoediv.offsetWidth);
      var top = Math.random() * (window.innerHeight - shoediv.offsetHeight);
      shoediv.style.left = left + 'px';
      shoediv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - candlediv.offsetWidth);
      var top = Math.random() * (window.innerHeight - candlediv.offsetHeight);
      candlediv.style.left = left + 'px';
      candlediv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - beardiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - beardiv.offsetHeight);
      beardiv.style.left = left + 'px';
      beardiv.style.top = top + 'px';



      var left = Math.random() * (window.innerWidth- shelf4div.offsetWidth);
      var top = Math.random() * (window.innerHeight - shelf4div.offsetHeight);
      shelf4div.style.left = left + 'px';
      shelf4div.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - basketballdiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - basketballdiv.offsetHeight);
      basketballdiv.style.left = left + 'px';
      basketballdiv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - gamecubediv.offsetWidth);
      var top = Math.random() * (window.innerHeight - gamecubediv.offsetHeight);
      gamecubediv.style.left = left + 'px';
      gamecubediv.style.top = top + 'px';



      var left = Math.random() * (window.innerWidth - planterdiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - planterdiv.offsetHeight);
      planterdiv.style.left = left + 'px';
      planterdiv.style.top = top + 'px';

      var left = Math.random() * (window.innerWidth - shoeboxdiv.offsetWidth);
      var top = Math.random() * (window.innerHeight - shoeboxdiv.offsetHeight);
      shoeboxdiv.style.left = left + 'px';
      shoeboxdiv.style.top = top + 'px';
    }


    // Call the function when the page loads or refreshes
    window.onload = randomizePosition;

    //Hint in the Console Log
    console.log("Hint: Resize youre window to 600px. If not possible, plz zoom-in until you're desktop will allow you to resize to 600px.")