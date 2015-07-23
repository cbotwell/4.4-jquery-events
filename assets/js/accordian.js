var topItemEl = $('.top-item');
var subEl = $('li.sub');

topItemEl.on('click', function() {
  topItemEl.addClass('hulk');
  subEl.slideDown('slow', function() {
  });
});
