


const sections = [
  {
    index: 0,
    name: 'Home',
    font: '',
    cursor: '#FB3640',
    cursorFollow: '#FB3640',
    accentOne: '#2B59C3',
    navBlock: '#4d6cfa',
    navIcon: '#06070E',
    particles: '#FB3640',
    lineLink: ' '
  },
  {
    index: 1,
    name: 'About',
    font: '',
    cursor: '#FCFCFC',
    cursorFollow: '#FCFCFC',
    accentOne: '',
    navBlock: '#FCFCFC',
    navIcon: '#06070E',
    particles: '#FB3640',
    lineLink: '#2B59C3'
  },
  {
    index: 2,
    name: 'Projects',
    font: '#FCFCFC',
    cursor: '#FCFCFC',
    cursorFollow: '#FCFCFC',
    accentOne: '',
    navBlock: '#ff5817',
    navIcon: '#FCFCFC',
    particles: '#2B59C3'
  },
  {
    index: 3,
    name: 'Musings',
    font: '',
    cursor: '#ff5817',
    cursorFollow: '#ff5817',
    accentOne: '',
    navBlock: '#30BCED',
    navIcon: '#06070E',
    particles: '#DCE1DE'
  },
  {
    index: 4,
    name: 'Contact',
    font: '',
    cursor: '#06070E',
    cursorFollow: '#06070E',
    accentOne: '',
    navBlock: '#054A91',
    navIcon: '#FCFCFC',
    particles: '#DCE1DE'
  },
  {
    index: 5,
    name: 'Footer',
    font: '',
    cursor: '',
    cursorFollow: '#06070E',
    accentOne: '',
    navBlock: '#30BCED',
    navIcon: '#FCFCFC',
    particles: '#DCE1DE'
  },
]

// Document Ready
$(document).ready(function () {

  $('#tester').on('click', function() {
    // $('#fixed-shape').css("border-radius", "0");
    $('#fixed-shape').css("height", "80vh");
  })

  console.log('Site loaded - send it, Jerry!');

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'assets/js/particles.json', function () {
    console.log('callback - particles.js config loaded');


    // ===== LAUNCH SPLASH PAGE ==================== 

    // initial setup
    $('#start').css('opacity', 1)
    $('#start').css('top', '8em');

    $.scrollify.disable();
    let clicks = 0;
    // single use function to fire off the splash events and then unbind itself from the click handler (squashed second bug today on 06.01!!)
    // The second bug was a scroll event parameter related to it being a passive event handler and google changed the browser default.  
    // Checking forums revealed it was a known issue and a new versioning was  released 2 months ago - fixed it!
    $('#particles-js').on('click', function () {

      // $(this).off("click");

      clicks = clicks + 1;
      console.log(clicks)

      // enabling scroll once and revealing nav and splash elements
      if (clicks === 1) {
        console.log('Click count reached.');

        // completely resets particles
        // pJSDom[0].pJS.particles.number.value = 3;
        // pJSDom[0].pJS.fn.particlesRefresh();

        pJSDom[0].pJS.interactivity.modes.push.particles_nb = 3;
        console.log('mouse click behavior changed to bubble');

// need this minor delay to ensure push/repulse animation finishes, then switch to grab
         setTimeout(function() {
          pJSDom[0].pJS.interactivity.events.onhover.mode = 'grab';
         },100)
        

        console.log('Splash Page init');

        // showing buttons and revealing splash
        $('button').css('visibility', 'visible');
        $('button').css('opacity', '1');

        $('#splash').css('visibility', 'visible');
        $('#splash').css('opacity', '1');
        $('#splash').css('top', '6em');

        $('#start').css('transition-delay', '0s');
        $('#start').css('opacity', 0);
        $('#start').css('top', '0em');

        $.scrollify.enable(); // only run once - this caused a bug where double clicks made scrolling immediately after sent the user to the bottom of the page
      } else if (clicks === 3) {
        // changing mouse click behavior to bubble to prevent user from adding too many particles and affecting performance
        //  pJSDom[0].pJS.interactivity.events.onclick.mode = 'bubble';
        //  console.log('mouse click behavior changed to bubble')
      }

    })


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
        $('.your-cursor2').css('background', '#00A6FB');
        $('.follow2').css('background', '#5941A9');
      }

      // check state and update
      if (state === 'closed') {
        $.scrollify.disable(); // pause scroll behavior while nav menu is open
        $('.hamburger--spin').addClass('is-active');
        $('.hamburger-inner').addClass('active-hb');

        $('.cursor-hover').css('color', 'white');
        // $('.your-cursor2').css('background', '#2BC016'); // Set current section cursor for nav modal
        // $('.follow2').css('background', '#2BC016'); // Set current section cursor follow  for nav modal

        navMain.css('opacity', '1'); // moves nav into view 

        $('.nav-link-container').css('top', '0em');
        $('.nav-link-container').css('opacity', '1');

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

        navMain.css('opacity', '0'); // reset the nav modal to opacity 0
        $('.nav-link-container').css('top', '-10em'); // reset position
        $('.nav-link-container').css('opacity', '0');

        $('.hamburger--spin').removeClass('is-active');
        $('.hamburger-inner').removeClass('active-hb');

        setTimeout(function () {
          // cursorReset();  // reset to section defaults for cursor
        }, 500)
      }

      setState(toggle, state); // pass state into element (nav-toggle) data-state attribute
      console.log(`Nav toggle set to ${state}`); // tell us what happened
    });

    $('.nav-link').on('click', function () {

      $('.hamburger--spin').removeClass('is-active');
      $('.hamburger-inner').removeClass('active-hb');

      $.scrollify.enable(); // resume scroll behavior while nav menu is closed
      index = parseInt($(this).attr('data-nav-index')); // grabs index reference of section to which we are moving
      // move = parseInt(index); 
      $.scrollify.instantMove(index);

      console.log('heck')
      // $('.follow2').css('opacity', 0);

      navMain.css('top', '-100vh'); // moves nav out of view
      setState(toggle, 'closed'); // pass state into element (nav-toggle) data-state attribute

      $('.nav-link-container').css('top', '-10em'); // reset position
      $('.nav-link-container').css('opacity', '0');

      // cursorReset(); // reset to section defaults for cursor
    })

  });

  // setTimeout(function() {
  //   $('#one').css('background', '#4C2A85');
  // },3000);

  // Nav 
  $('.collapsible').collapsible();


  $.scrollify.instantMove(0);
});

