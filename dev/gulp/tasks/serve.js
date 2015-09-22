/**
 * Serve the client with live reload
 **/

'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');
var path = require('path');
var os = require('os');

gulp.task('serve', ['build:development'], function () {

  // serve with BrowserSync
  browserSync({
    server: {
      baseDir: config.paths.app,
      index  : path.relative(config.paths.app, config.paths.app_build) + '/index.html'
    },
    notify: true
  });

  gulp.watch(config.sass.watch_src, ['compile-sass']);
  gulp.watch(config.ejs.src, ['compile-ejs']);
});
