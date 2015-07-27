var date = new Date();
var month = date.getMonth();
var year = date.getFullYear();
var currentMonth = $('.month');
var currentYear = $('.year');

if (month === 6) {
  currentMonth.html('JULY');
}

currentYear.html(year);
