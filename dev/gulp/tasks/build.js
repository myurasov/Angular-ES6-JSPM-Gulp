/**
 * Build
 **/

'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:development', function (callback) {
  runSequence(
    'cleanup',
    'set-environment:development',
    'update-revision',
    'compile-ejs',
    'compile-sass',
    'compile-templates',
    'post-build',
    callback
  );
});

gulp.task('build:test', function (callback) {
  runSequence(
    'cleanup',
    'set-environment:test',
    'update-revision',
    'compile-ejs',
    'compile-sass',
    'compile-templates',
    'compile-scripts',
    'optimize-assets',
    'post-build',
    callback
  );
});

gulp.task('build:staging', function (callback) {
  runSequence(
    'cleanup',
    'set-environment:staging',
    'update-revision',
    'compile-ejs',
    'compile-sass',
    'compile-templates',
    'compile-scripts',
    'optimize-assets',
    'post-build',
    callback
  );
});

gulp.task('build:production', function (callback) {
  runSequence(
    'cleanup',
    'set-environment:production',
    'update-revision',
    'compile-ejs',
    'compile-sass',
    'compile-templates',
    'compile-scripts',
    'optimize-assets',
    'post-build',
    callback
  );
});
