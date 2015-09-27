/**
 * Execute post-build steps
 **/

'use strict';

var gulp = require('gulp');
var config = require('../config');
var fsExtra = require('fs-extra');

gulp.task('post-build', function () {
  // copy index.html to web root
  fsExtra.copySync(config.paths.app_build + '/index.html', config.paths.app + '/index.html');
});
