var topItemEl = $('.top-item');
var subEl = $('li.sub');

topItemEl.on('click', function() {
  var id = $(this).data('opens');
  $(this).addClass('hulk');
  $('#' + id).slideDown('slow', function() {
  });
});
