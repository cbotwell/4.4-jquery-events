var topItemEl = $('.top-item');

topItemEl.on('click', function() {
  $(this).children('button').addClass('hulk');
  $(this).children('.sub-menu').slideDown('slow');
  // find('button').removeClass('hulk');
  // find('.sub-menu').slideUp('slow');
});
