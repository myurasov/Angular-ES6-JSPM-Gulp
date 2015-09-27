/**
 * Main application file
 */

import 'angular';
import 'angular-ui-router';

var app = angular.module('app', ['ui.router']);

// configure app

app.config(($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
      url  : '/',
      views: {
        content: {
          template  : '{{ greeting }}!',
          controller: ($scope) => {
            $scope.greeting = 'Hello world';
          }
        }
      }
    });

});

// bootstrap app

angular.element(document).ready(function() {
  angular.bootstrap(document, [app.name]);
});
