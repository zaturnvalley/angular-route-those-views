angular.module('OverwatchApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '../views/index.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: '../views/about.html'
  })
  .state('heroes', {
    url: '/heroes',
    templateUrl: '../views/heroes.html'
  });;
}]);