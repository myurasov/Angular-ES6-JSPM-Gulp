/**
 * Set environment (and write it to relevant files)
 **/

'use strict';

var gulp = require('gulp');
var fs = require('fs');
var config = require('../config');

function setEnvironment(environment) {
  // save environment
  fs.writeFileSync(config.paths.root + '/environment', environment); // global
  fs.writeFileSync(config.paths.app + '/scripts/_environment.js', 'export default "' + environment + '";'); // js

  // set NODE_ENV
  process.env.NODE_ENV = environment;
}

// create tasks for each environment

gulp.task('set-environment:production', function () {
  setEnvironment('production');
});

gulp.task('set-environment:staging', function () {
  setEnvironment('staging');
});

gulp.task('set-environment:development', function () {
  setEnvironment('development');
});

gulp.task('set-environment:test', function () {
  setEnvironment('test');
});
