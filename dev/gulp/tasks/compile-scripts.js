/**
 * Compile scripts into a self-containg bundle
 */

var gulp = require('gulp');
var gulpShell = require('gulp-shell');
var utils = require('../utils');
var config = require('../config');

gulp.task('compile-scripts', (function () {
  var command = 'jspm bundle-sfx ' + // create self-sufficient bundle
                utils.escapeShellArg(config.compileScripts.src) + ' + traceur-runtime ' + // source
                utils.escapeShellArg(config.compileScripts.dest) + // dest
                ' -m'; // minify
  return gulpShell.task([command]);
})());
