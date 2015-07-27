(function() {
var date = new Date();
var month = date.getMonth();
var year = date.getFullYear();
var currentMonth = $('.month');
var currentYear = $('.year');
var backEl = $('.fa-caret-left');
var fwdEl = $('.fa-caret-right');

if (month === 0) {
  currentMonth.html('JANUARY');
} else if (month === 1) {
  currentMonth.html('FEBRUARY');
} else if (month === 2) {
  currentMonth.html('MARCH');
} else if (month === 3) {
  currentMonth.html('April');
} else if (month === 4) {
  currentMonth.html('MAY');
} else if (month === 5) {
  currentMonth.html('JUNE');
} else if (month === 6) {
  currentMonth.html('JULY');
} else if (month === 7) {
  currentMonth.html('AUGUST');
} else if (month === 8) {
  currentMonth.html('SEPTEMBER');
} else if (month === 9) {
  currentMonth.html('OCTOBER');
} else if (month === 10) {
  currentMonth.html('NOVEMBER');
} else if (month === 11) {
  currentMonth.html('DECEMBER');
}

currentYear.html(year);

backEl.on('click', function() {
  if (currentMonth.html() === 'FEBRUARY') {
    currentMonth.html('JANUARY');
  } else if (currentMonth.html() === 'MARCH') {
    currentMonth.html('FEBRUARY');
  } else if (currentMonth.html() === 'APRIL') {
    currentMonth.html('MARCH');
  } else if (currentMonth.html() === 'MAY') {
    currentMonth.html('APRIL');
  } else if (currentMonth.html() === 'JUNE') {
    currentMonth.html('MAY');
  } else if (currentMonth.html() === 'JULY') {
    currentMonth.html('JUNE');
  } else if (currentMonth.html() === 'AUGUST') {
    currentMonth.html('JULY');
  } else if (currentMonth.html() === 'SEPTEMBER') {
    currentMonth.html('AUGUST');
  } else if (currentMonth.html() === 'OCTOBER') {
    currentMonth.html('SEPTEMBER');
  } else if (currentMonth.html() === 'NOVEMBER') {
    currentMonth.html('OCTOBER');
  } else if (currentMonth.html() === 'DECEMBER') {
    currentMonth.html('NOVEMBER');
  } else if (currentMonth.html() === 'JANUARY') {
    currentMonth.html('DECEMBER');
  }
});

fwdEl.on('click', function() {
  if (currentMonth.html() === 'DECEMBER') {
    currentMonth.html('JANUARY');
  } else if (currentMonth.html() === 'JANUARY') {
    currentMonth.html('FEBRUARY');
  } else if (currentMonth.html() === 'FEBRUARY') {
    currentMonth.html('MARCH');
  } else if (currentMonth.html() === 'MARCH') {
    currentMonth.html('APRIL');
  } else if (currentMonth.html() === 'APRIL') {
    currentMonth.html('MAY');
  } else if (currentMonth.html() === 'MAY') {
    currentMonth.html('JUNE');
  } else if (currentMonth.html() === 'JUNE') {
    currentMonth.html('JULY');
  } else if (currentMonth.html() === 'JULY') {
    currentMonth.html('AUGUST');
  } else if (currentMonth.html() === 'AUGUST') {
    currentMonth.html('SEPTEMBER');
  } else if (currentMonth.html() === 'SEPTEMBER') {
    currentMonth.html('OCTOBER');
  } else if (currentMonth.html() === 'OCTOBER') {
    currentMonth.html('NOVEMBER');
  } else if (currentMonth.html() === 'NOVEMBER') {
    currentMonth.html('DECEMBER');
  }
});
})();
