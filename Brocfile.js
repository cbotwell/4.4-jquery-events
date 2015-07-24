var merge = require('broccoli-merge-trees');
var sass = require('broccoli-sass');
var funnel = require('broccoli-funnel');
var injectLivereload = require('broccoli-inject-livereload');

var publicWithReload = injectLivereload('public');

var includePaths = [
    'assets/scss',
    'bower_components/reset-css',
    'bower_components/bourbon/app/assets/stylesheets',
    'bower_components/fontawesome/scss',
    'bower_components/neat/app/assets/stylesheets'
];

var vendor = funnel('bower_components', {
  files: ['jquery/dist/jquery.min.js']
});

var accordianCss = sass (includePaths, 'accordian.scss', 'accordian.css');
var keyboardCss = sass (includePaths, 'keyboard.scss', 'keyboard.css');

module.exports = merge([publicWithReload, 'assets/js', accordianCss, keyboardCss, vendor]);
