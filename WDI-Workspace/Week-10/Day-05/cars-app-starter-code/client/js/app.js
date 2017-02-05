angular.module('theCarRepo', ['ui.router', 'ui.bootstrap'])
  .directive('navigationBar', navigationBar)
  .config(['$stateProvider', '$urlRouterProvider', /*'$locationProvider',*/ router])

function router($stateProvider, $urlRouterProvider/*, $locationProvider*/) {
  // remove the base '/#/' from the url:
  // $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('cars', {
      url: '/cars',
      templateUrl: 'templates/cars.html',
      controller: 'CarsController as cc'
    })
    .state('car', {
      url: '/cars/:id',
      templateUrl: 'templates/car-profile.html',
      controller: 'CarProfileController as cpc'
    })
}

function navigationBar() {
  return {
    restrict: 'E',
    templateUrl: 'partials/nav.html'
  }
}
