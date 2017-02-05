angular.module('GalaxyHub')
	.controller('GalaxiesController', GalaxiesController)

function GalaxiesController($http) {
	var vm = this;

	vm.test = "Boom";

	vm.galaxies = []


	$http.get('http://wdi-astro-api.herokuapp.com/api/galaxies')
		.then((data) => {
			vm.galaxies = data.data.galaxies

		})

	vm.deleteGalaxy = function(galaxy) {
		var index = vm.galaxies.indexOf(galaxy)
		vm.galaxies.splice(index, 1)
	}
}