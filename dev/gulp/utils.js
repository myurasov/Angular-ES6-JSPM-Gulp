/**
 * Utils for Gulp
 */

'use strict';

var fs = require('fs');
var config = require('./config');
var stripJsonComments = require('strip-json-comments');

exports.getRevision = function () {
  return fs.readFileSync(config.paths.root + '/revision').toString().trim();
};

exports.getEnvironment = function () {
  return fs.readFileSync(config.paths.root + '/environment').toString().trim();
};

/**
 * Read JSON file stripping the comments out
 */
exports.readJson = function (path) {
  var text = fs.readFileSync(path).toString();
  text = stripJsonComments(text);
  return JSON.parse(text);
};

exports.escapeShellArg = function (cmd) {
  return '\'' + cmd.replace(/\'/g, "'\\''") + '\'';
};
