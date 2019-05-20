

// Document Ready
$(document).ready(function () {
  console.log('Site loaded - send it, Jerry!');

  // Global Objects and Functions


  // Declare function to set states (nav-toggle or other)
  setState = function (element, state) {
    $(element).attr('data-state', state);
  };

  // Nav menu toggle icon
  let toggle = $('#nav-toggle'); // set toggle element to variable  

  let navMain = $('#nav-main');

  // Toggle the nav-main element opened or closed
  $('#nav-toggle').click(function () {

    let state = $(this).attr('data-state'); // 

    // Reset the cursoe to current sectin defaults
    cursorReset = function (cursor, follow) {
      $('.your-cursor2').css('background', '#000F08');
      $('.follow2').css('background', '#5941A9');
    }

    // check state and update
    if (state === 'closed') {
      $.scrollify.disable(); // pause scroll behavior while nav menu is open

      // $('.your-cursor2').css('background', '#2BC016'); // Set current section cursor for nav modal
      // $('.follow2').css('background', '#2BC016'); // Set current section cursor follow  for nav modal


      $('#nav-block').css('top', 0); // moves nav into view 
      navMain.css('top', '0'); // moves nav into view 

      state = 'open'; // load the new state into a variable

      setTimeout(function () {
        $('#nav-block').css('display', 'none'); // moves nav into view 

        setTimeout(function () {
          $('#nav-block').css('display', ''); // moves nav into view 
          $('#nav-block').css('top', '-100vh'); // moves nav into view 
        }, 100)
      }, 1000)

    } else {
      navMain.css('top', '-100vh'); // moves nav out of view
      state = 'closed'; // load the new state into a variable
      $.scrollify.enable(); // resume scroll behavior while nav menu is closed

      setTimeout(function () {
        // cursorReset();  // reset to section defaults for cursor
      }, 500)

    }

    setState(toggle, state); // pass state into element (nav-toggle) data-state attribute
    console.log(`Nav toggle set to ${state}`); // tell us what happened
  });

  $('.nav-link').on('click', function () {
    $.scrollify.enable(); // resume scroll behavior while nav menu is closed
    index = parseInt($(this).attr('data-nav-index')); // grabs index reference of section to which we are moving
    // move = parseInt(index); 
    $.scrollify.instantMove(index);

    console.log('heck')
    // $('.follow2').css('opacity', 0);

    navMain.css('top', '-100vh'); // moves nav out of view
    setState(toggle, 'closed'); // pass state into element (nav-toggle) data-state attribute

    cursorReset(); // reset to section defaults for cursor
  })

});

// setTimeout(function() {
//   $('#one').css('background', '#4C2A85');
// },3000);

// Nav 



/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/js/particles.json', function () {
  console.log('callback - particles.js config loaded');


});

