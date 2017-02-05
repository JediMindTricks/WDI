angular.module('myApp')
  .controller('tweetsController', tweetsController)

tweetsController.$inject = ['$state', '$scope', '$http']

function tweetsController($state, $scope, $http) {
  var vm = this
  vm.title = "All of the tweets!"

  // the logged in user can be retrieved by reaching up to the MainController using the built-in $scope service.:
  vm.currentUser = $scope.$parent.currentUser
  vm.tweets = vm.currentUser.tweets
  console.log(vm.tweets)

  vm.handleSubmit = function() {
  	$http.post('/users/tweets', vm.newTweet)
  	 .success(function(data){
      console.log(data.tweet)
      vm.tweets.push(data.tweet)
     })
  }
}
                            