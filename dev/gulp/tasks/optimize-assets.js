/**
 * Optimize assets (js/css):
 *  - concatenate
 *  - minify
 **/

var gulp = require('gulp');
var gulpIf = require('gulp-if');
var gulpMinifyCss = require('gulp-minify-css');
var gulpMinifyHtml = require('gulp-minify-html');
var gulpNgAnnotate = require('gulp-ng-annotate');
var gulpUglify = require('gulp-uglify');
var config = require('../config');
var path = require('path');

gulp.task('optimize-assets', function () {

  return gulp.src(config.paths.app_build + '/**')

    // minify css
    .pipe(gulpIf('*.css', gulpMinifyCss()))

    // minify html
    .pipe(gulpIf('*.html', gulpMinifyHtml()))

    // minify js
    .pipe(gulpIf('*.js', gulpNgAnnotate()))
    .pipe(gulpIf('*.js', gulpUglify()))

    .pipe(gulp.dest(config.paths.app_build));
});
