/**
 * App configuration
 */

export default ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
      url  : '/',
      views: {
        content: {
          templateUrl: 'scripts/home-view.html',
          controller : ($scope) => {
            $scope.greeting = 'Hello world';
          }
        }
      }
    });

};
