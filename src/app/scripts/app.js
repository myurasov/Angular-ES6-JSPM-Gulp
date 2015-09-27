/**
 * Main application file
 */

import 'angular';
import 'angular-ui-router';

var app = angular.module('app', ['ui.router']);

app.config(($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/aaa');

  $stateProvider

    .state('home', {
      url  : '/aaa',
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

angular.element(document).ready(function() {
  angular.bootstrap(document, [app.name]);
});
