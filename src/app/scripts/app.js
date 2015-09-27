/**
 * Main application file
 */

import 'angular';
import 'angular-ui-router';

import config from './config';
import templatesModule from './_templates';

// define app module
var app = angular.module('app', [
  'ui.router',
  templatesModule.name
]);

// configure app
app.config(config);

// bootstrap app
angular.element(document).ready(function() {
  angular.bootstrap(document, [app.name]);
});
