// your code here
angular.module('GalaxyHub', [])
	.filter('reachable', function() {
		return function(input) {
			return  input < 5 ? '🤡' : '👾'
		}
	})
