angular.module('theCarRepo')
  .controller('CarsController', CarsController)
  .controller('CarsProfileController', CarsProfileController)

CarsController.$inject = ['$http', '$scope', '$state']

function CarsController($http, $scope, $state) {
  var vm = this

  // limit car description length on cars index:
  vm.textLimit = 140

  // get all cars when controller loads:
  CarFactory.getAll()
  	.then(function(response) {
  		vm.cars = response.data.cars
  	})

  vm.bae(car) {
  	CarFactory.getOne(car._id)
  }
}
