/**
 * Compile EJS files
 * build, environment variabkles are available in templates
 **/

'use strict';

var gulp = require('gulp');
var gulpEjs = require('gulp-ejs');
var browserSync = require('browser-sync');
var config = require('../config');
var utils = require('../utils');

gulp.task('compile-ejs', function () {

  // compile templates
  return gulp.src(config.ejs.src)

    .pipe(gulpEjs({
      revision   : utils.getRevision(),
      environment: utils.getEnvironment()
    }))

    .on('error', function (e) {
      console.log("Failed to compile EJS: ", e.message);
      this.emit('end');
    })

    .pipe(gulp.dest(config.ejs.dest))

    // reload browser
    .pipe(browserSync.reload({stream: true}));
});
