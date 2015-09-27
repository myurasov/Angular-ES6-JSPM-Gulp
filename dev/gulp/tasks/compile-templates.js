/**
 * Compile templates into cache
 */

var config = require('../config');
var gulp = require('gulp');
var gulpAngularTemplatecache = require('gulp-angular-templatecache');
var gulpInsert = require('gulp-insert');
var gulpMinifyHtml = require('gulp-minify-html');
var utils = require('../utils');
var fs = require('fs');

gulp.task('compile-templates', function () {
  if (utils.getEnvironment() !== 'development') {

    // scan source dir for HTML files and add them to template cache
    return gulp.src(config.templates.src)
      .pipe(gulpMinifyHtml())
      .pipe(gulpAngularTemplatecache(config.templates.options))
      .pipe(gulpInsert.prepend('export default '))
      .pipe(gulp.dest(config.templates.dest));

  } else {

    // create empty module in development
    fs.writeFileSync(
      config.templates.dest + '/' + config.templates.options.filename,
      'export default angular.module("templates", []);'
    );

  }
});
