var app = angular.module('app', ['ngSanitize']);

app.controller('directivesController', ['$scope', function ($scope) {

  $scope.show = true;

  $scope.welcomeMessage = '<h1>Welcome to our website!</h1>'

  $scope.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

}]);
