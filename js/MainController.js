function MainController($scope) {
  $scope.name = "Angel";
}

/*
 * This below seems like another way to inject dependencies
 * ($scope is a dependency)
 * the $scope param on the first line seems to be replaced with any arbitrary
 * name when you use this method below though.
*/
// MainController.$inject = ['$scope'];

angular
  .module('app')
  .controller('MainController', MainController);
