/**
 * Gulp configuration
 */

'use strict';

// paths
exports.paths = {};
exports.paths.root = __dirname + '/../..';
exports.paths.app = exports.paths.root + '/src/app';
exports.paths.app_build = exports.paths.root + '/src/app/build';
exports.paths.tests = exports.paths.root + '/src/tests';

exports.ejs = {
  src: [exports.paths.app + '/ejs/**/*.ejs', '!**/_*.ejs'],
  dest: exports.paths.app_build
};

exports.sass = {
  watch_src: exports.paths.app + '/sass/**/*.scss',
  src: exports.paths.app + '/sass/main.scss',
  dest: exports.paths.app_build
};

exports.compileScripts = {
  src: exports.paths.app + '/scripts/app.js',
  dest: exports.paths.app_build + '/build.js'
};
