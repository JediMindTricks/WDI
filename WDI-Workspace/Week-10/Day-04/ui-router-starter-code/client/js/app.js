angular.module('routingPractice', ['ui.router'])
  .directive('navigationBar', navigationBar)
  .config(['$stateProvider', '$urlRouterProvider', mainRouter])
  .controller('CarsController', CarsController)

function mainRouter($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html'
    })
    .state('services', {
      url: '/services',
      templateUrl: 'templates/services.html'
    })
    .state('cars', {
      url: '/cars',
      templateUrl: 'templates/cars.html',
      controller: 'CarsController as cc'
    })
}
function CarsController($http) {

  $http.get('/api/cars').then((response)=> {
    console.log(response)
  })

  var vm = this
  vm.cars = [
    {id: 1, make: "Chevy", model: "Nova", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},

    {id: 2, make: "Ford", model: "Mustang", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},

    {id: 3, make: "Honda", model: "Civic", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  ]
}

function navigationBar() {
  return {
    restrict: 'E',
    templateUrl: 'partials/nav.html'
  }
}
