// ===== BEGIN SCROLLIFY-TRIGGERED CONTENT CHANGES ======================= //
let sections = [
  {
    navColor: '#52489C'
  },
  {
    navColor: '#339989'
  },
  {
    navColor: '#171D1C'
  },
  {
    navColor: '#3867B1'
  },
  {
    navColor: '3867B1'
  }
];

let portfolio = [
  {
    name: 'Atlanta CFO Forum',
    image: '',
    description: 'Networking and job search platform for exectuive talent in Atlanta, GA.',
    tech: ['HTML','JavaScript','CSS','PHP','Wordpress','Divi Builder'],
    url: '',
    github: '',
  }
]

let sectionCurrent = 0;

reveal = function () {
  $('#about-splash').css('opacity', '1');
  $('#about-splash').css('margin-top', '0');
  console.log('heck');
}

// ===== END SCROLLIFY-TRIGGERED CONTENT CHANGES ========================= //

$(document).ready(function () {

  $('body').awesomeCursor('pencil');

  // ===== BEGIN NAVIGATION MENU ========================================= //
  $('#nav-icon, .menu-row').on('click', function () {

    // ----- Set navigation menu state thru the data-state attibute ------ //
    let state = $('#nav-icon').attr('data-state')

    // ----- Nav state closed > expand nav ------------------------------- //
    switch (state) {
      case 'closed':

        // ----- Reveal nav with opacity and z-index incread ------------- // 
        $('#nav-container').css('opacity', '1');
        $('#nav-main').css('z-index', '2');
        $('#nav-main').css('height', '100vh');

        // ----- Reset the menu button to alternate color for open state - //
        $('#nav-icon').css('color', '#E1E4E9');

        // ----- Set nav menu state to open ------------------------------ //
        $('#nav-icon').attr('data-state', 'open');


        setTimeout(function () {
          $('#nav-icon').css('display', '0.3s');
          $('#nav-main').css('transition', '0.30s'); // TESTING - //
        }, 600);
        break;

      // ----- Nav state open > nav state close - close nav -------------- //
      case 'open':

        // ----- Hide nav menu container first - before nav menu collapse  //
        $('#nav-container').css('display', 'none');

        // Reset Nav continer opacity (ready for expand nav animation ---- //
        $('#nav-container').css('opacity', '0')


        // ----- Set menu nav state to closed ---------------------------- //
        $('#nav-icon').attr('data-state', 'closed');

        $('#nav-icon').css('color', sections[sectionCurrent].navColor); // revert to current section nav-item color
        $('#nav-main').css('height', '0');

        setTimeout(function () {
          $('#nav-icon').css('transition-delay', '0.1s');
          // $('#nav-main').css('transition-delay', '0s');
          $('#nav-main').css('z-index', '-1');
          $('#nav-container').css('display', '');
          $('#nav-main').css('transition', '0.20s'); // TESTING - //
        }, 100);
        break;
    };
  });

  // ----- Menu row animations (numbers) ----------------------------------- //
  $('.menu-row').mouseover(function () {
    number = $(this).attr('data-row-number')
    menuID = `#menu-${number}`; // set here - no need to include in mouseout below
    $(menuID).css('opacity', '1');
  })

  $('.menu-row').mouseout(function () {
    $(menuID).css('color', 'none');
    $('.menu-number').css('opacity', '0');
  });

  // ----- Menu row click event ------------------------------------------- //
  $('.menu-row').on('click', function () {
    let move = $(this).attr('data-menu-target');
    $.scrollify.instantMove(`#${move}`);
    console.clear();

    // set current section id to variable for css changes
    current = $.scrollify.current();
    console.log(current);
    console.log(`#${current[0].id}`);
    index = $.scrollify.currentIndex();
    console.log(index);

  });
  // ===== END NAVIGATION MENU ============================================= //

  // ===== BEGIN CONTENT SCRIPTS =========================================== //

  // ----- Animate splash on load ------------------------------------------ //

  // ----- Section objects ------------------------------------------------- //

  $('#splash').css('opacity', '1');
  $('#splash').css('color', 'black'); // SET TO THEME COLOR
  $('#splash').css('top', '35%');

  console.log("Good time of day new friend.")
  console.log("My Name is John. Please enjoy my work.")

  $('#scroll-down').on('click', function () {
    $.scrollify.move("#about");
  })

  // $.scrollify.move(function () {
  //   console.log('moved to ' + $.scrollify.currentIndex());
  // });

  

  // ===== BEGIN MATERILIZE INIT ========================================== //
  // modals (unused but initilialized)
  // $('.modal').modal();

  // collapse (unused but initilialized)
  // $('.collapsible').collapsible();

  // tabs (unused but initilialized)
  // $('.tabs').tabs();

  // scrollspy for portfolio section (unused but initilialized)
  // $('.scrollspy').scrollSpy();

  // carousel for portfolio
  // $('.carousel').carousel();

  // ===== END MATERILIZE INI ============================================ //

  // ===== BEGIN EVENT LISTENERS ========================================= //

  $('#click').on('click', function() {
console.log('click');
    $('#portfolio-overlay').css('display', 'block');
    
    setTimeout(function() {
      $('#portfolio-overlay').css('opacity', 1);
      $('#portfolio-overlay').css('bottom', 0);
    },50);
  });


    $('#close').on('click', function() {
console.log('click');
$('#portfolio-overlay').css('opacity', 0);
// $('#portfolio-overlay').css('bottom', '-100vh');

    
    setTimeout(function() {
      
      $('#portfolio-overlay').css('display', 'none');
    },250);

    console.log('modal');
    // // render the portfolio projects
    // for (i = 0; i < portfolio.length; i++) {
    //   let div = $('<div>');
    //   $(div).text(`${portfolio[i].name} is a ${portfolio[i].description} `);
    //   $('#portfolio-list').append(div);
    // };

    // $.scrollify.update();
  });

});
