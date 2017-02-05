angular.module('WDIRoster', ['loading'])
  .controller('UsersController', UsersController)

function UsersController($http) {
  var vm = this
  var apiUrl = 'https://cute-little-api.herokuapp.com/api/users/'

  vm.cancelNewUser = function() {
    vm.newUser = {}
    vm.formOpen = false
  }

  vm.getAllUsers = function (showLoading) {
    if (showLoading) vm.loading = true
    $http.get(apiUrl).then((response) => {
      vm.users = response.data.users
      console.log(vm.users)
      vm.loading = false
    })
  }

  vm.createUser = function() {
    vm.loading = true
    $http.post(apiUrl, vm.newUser)
      .then((response) => {
        if(response.data.success) {
          vm.newUser = {}
          vm.formOpen = false
          vm.users.push(response.data.user)
          vm.loading = false
        }
      })
  }

  vm.editUser = function(user) {
    vm.users.forEach((u)=> {
      if (u._id === user._id) { u.editing = true }
      else {u.editing = false}
    })
  }

  vm.updateUser = function(user) {
    vm.loading = true
    $http.patch(apiUrl + user._id, user)
      .then((response)=> {
        console.log(response)
        user.editing = false
        vm.loading = false
      })
  }

  vm.deleteUser = function(user, index) {
    vm.loading = true
    $http.delete(apiUrl + user._id)
      .then((response)=> {
        vm.users.splice(vm.users.indexOf(user),1)
        vm.loading = false
      })

  }

  vm.getAllUsers(true)
}