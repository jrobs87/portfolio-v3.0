$(document).ready(function () {
  

  // expand the nav
  $('#nav-icon, .menu-row').on('click', function () {
    let state = $('#nav-icon').attr('data-state')
    switch (state) {
      case 'closed':
        $('#nav-container').css('opacity', '1')
        $('#nav-icon').attr('data-state', 'open');
        $('#nav-main').css('z-index', '2');
        $('#nav-main').css('height', '100vh');
        $('#nav-icon').css('color', '#F3F1F3')
        setTimeout(function () {
          $('#nav-icon').css('dsiplay', '0.3s');
        }, 600);
        break;
      case 'open':
      $('#nav-container').css('display', 'none');
        $('#nav-container').css('opacity', '0')
        $('#nav-icon').attr('data-state', 'closed');
        $('#nav-icon').css('color', 'black')
        setTimeout(function () {
          $('#nav-main').css('height', '0');
          $('#nav-icon').css('transition-delay', '0.1s');
          $('#nav-main').css('z-index', '-1');
          $('#nav-container').css('display', '');
        }, 10);
        break;
    }
  });

  $('.menu-row').mouseover(function () {
    number = $(this).attr('data-row-number')
    menuID = `#menu-${number}`;
    $(menuID).css('opacity', '1');
  })

  $('.menu-row').mouseout(function () {
    $(menuID).css('color', 'none');
    $('.menu-number').css('opacity', '0');
  });

  $('.menu-row').on('click', function () {
    let move = $(this).attr('data-menu-target');
    $.scrollify.instantMove(`#${move}`);
    console.log('Viewing ' + move + ' panel')
  });

  // animate splash on load
  $('#splash').css('opacity', '1');
  $('#splash').css('color', 'black');
  $('#splash').css('top', '35%');
console.log('Loaded JS...')

// setTimeout(function() {
//   $('body').removeClass('stop-scrolling');
// },1000);

});





