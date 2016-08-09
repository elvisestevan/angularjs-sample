app.controller('filtersExampleController', ['$scope', 'greetingFilter', function ($scope, greeting) {

  $scope.person = {
    name: "elvis estevan",
    age: 25
  };

  console.log(greeting($scope.person.name));

}]);
