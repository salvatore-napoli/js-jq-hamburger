// Mostrare il menu
$('.fas.fa-bars').click(function() {
  $('.hamburger-menu').show('slow');
});

// Chiudere il menu
$('.close').click(function() {
  $('.hamburger-menu').hide('fast');
});

// // Esperimenti bonus
// $('.fas.fa-bars').click(function() {
//   $('.hamburger-menu').fadeIn(300);
// });
//
// $('.close').click(function() {
//   $('.hamburger-menu').fadeOut(1000);
// });
//
// $('.header-right ul li:nth-child(2) a').hover(
//   function() {
//     $(this).append(' Boolean');
//   },
//   function() {
//     $(this).text('Scopri il Corso');
//   }
// );
//
// $('.header-left').mouseenter(
//   function() {
//     $(this).css('background', 'blue');
//   }
// ).mouseleave(
//   function() {
//     $(this).css('background', 'white');
//   }
// );
//
// $('.header-left img').dblclick(function() {
//   document.writeln('BOOLEAN');
// });
