/**
 * Optimize assets (js/css):
 *  - concatenate
 *  - minify
 **/

var gulp = require('gulp');
var gulpIf = require('gulp-if');
var gulpMinifyCss = require('gulp-minify-css');
var gulpMinifyHtml = require('gulp-minify-html');
var config = require('../config');
var path = require('path');

gulp.task('optimize-assets', function () {

  return gulp.src(config.paths.app_build + '/**')

    // minify css
    .pipe(gulpIf('*.css', gulpMinifyCss()))

    // minify html
    .pipe(gulpIf('*.html', gulpMinifyHtml()))

    .pipe(gulp.dest(config.paths.app_build));
});
