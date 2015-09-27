/**
   * Cleanup build files
   **/

  'use strict';

  var gulp = require('gulp');
  var del = require('del');
  var config = require('../config');

  gulp.task('cleanup', function () {
    del.sync(config.paths.app_build);
    del.sync(config.paths.app + '/scripts/_*.js');
    del.sync(config.paths.app + '/index.html');
});
