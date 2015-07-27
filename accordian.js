(function() {
var topItemEl = $('.top-item');

topItemEl.on('click', function() {
  $(this).children('button').toggleClass('hulk');
  $(this).children('.sub-menu').slideToggle('slow');
  $(this).siblings().find('button').removeClass('hulk');
  $(this).siblings().find('.sub-menu').slideUp('slow');
});
})();
