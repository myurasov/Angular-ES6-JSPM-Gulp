/**
 * Compile sass files w/sourcemaps
 **/

'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var gulpInsert = require('gulp-insert');
var gulpSass = require('gulp-sass');
var gulpSourcemaps = require('gulp-sourcemaps');
var config = require('../config');
var utils = require('../utils');

gulp.task('compile-sass', function () {
  return gulp.src(config.sass.src)

    // expose environment/revision
    .pipe(gulpInsert.prepend('$environment: "' + utils.getEnvironment() + '";'))
    .pipe(gulpInsert.prepend('$revision: "' + utils.getRevision() + '";'))

    .pipe(gulpSourcemaps.init())
    .pipe(gulpSass())
    .on('error', function (e) {
      console.log("Failed to compile SASS: ", e.message);
      this.emit('end');
    })
    .pipe(gulpSourcemaps.write('.' /* write as a separate file */))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.reload({stream: true}));
});
