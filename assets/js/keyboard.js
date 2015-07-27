(function() {
var buttonEl = $('button');
var textArea = $('textarea');

textArea.html('');

buttonEl.on('click', function() {
  if (this.innerHTML === 'tab') {
    textArea.append('  ');
  } else if (this.innerHTML === '') {
    textArea.append(' ');
  } else if (this.innerHTML === 'delete') {
    var newText = textArea.html().slice(0, -1);
    textArea.html(newText);
  } else if (this.innerHTML === 'caps lock' || this.innerHTML === 'shift') {
    // var capsData = buttonEl.data('caps');
    // buttonEl.html(capsData);
    return false;
  } else if (this.innerHTML === 'return') {
    textArea.append('/n');
  } else {
    textArea.append(this.innerHTML);
  }
});

// var capsEl = $('caps');

// var mode = 'normal';

// if (mode = 'normal') {
//   buttonEl.each($(this).html($(this).data('normal')));
// }

})();
