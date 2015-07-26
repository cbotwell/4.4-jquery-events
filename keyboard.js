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
  } else if (this.innerHTML === 'caps lock' || this.innerHTML === 'shift' || this.innerHTML === 'return') {
    return false;
  } else {
    textArea.append(this.innerHTML);
  }
});
