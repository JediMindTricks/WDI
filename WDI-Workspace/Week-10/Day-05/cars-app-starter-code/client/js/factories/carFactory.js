angular.module('theCarRepo')
  .factory('CarFactory', CarFactory)

function CarFactory($http) {
  return {
    getAll: getAll
  }

  function getAll() {
    return $http.get('/api/cars')
  }
}`