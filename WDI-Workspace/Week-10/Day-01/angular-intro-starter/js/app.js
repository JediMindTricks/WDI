// angular app code goes here...
angular.module('FirstAngular', [])
	.controller('MainController', MainController)

function MainController() {
	// body...
	var vm = this;

	vm.title = "WDI Framework Tracker"
	vm.subtitle = "A place to track JS frameworks I need to know."
	vm.frameworks = [
	{name: "AngularJS"}
	]

	vm.newFramework = {}

	vm.addFramework = function() {
		vm.frameworks.push(vm.newFramework)
		vm.newFramework = {}
	}

	vm.deleteFramework = function(framework) {
		var index = vm.frameworks.indexOf(framework)
		vm.frameworks.splice(index, 1)
	}

	vm.editFramework = function(framework) {
		framework.editing = true
	}

	vm.updateFramework = function(framework) {
		framework.editing = false
	}


}