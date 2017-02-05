angular.module('loading', [])
  .directive('loading', function() {
    return {
      restrict: 'E',
      templateUrl: '/directives/loading/loading.html'
    }
  })
