/**
 * App configuration
 */

export default /* @ngInject */ ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
      url  : '/',
      views: {
        content: {
          templateUrl: 'scripts/home-view.html',
          controller : /* @ngInject */ ($scope) => {
            $scope.greeting = 'Hello world';
          }
        }
      }
    });

};
