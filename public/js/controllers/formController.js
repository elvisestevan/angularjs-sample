app.controller('formController', ['$scope', 'Person', function ($scope, Person) {

  $scope.people = [];
  $scope.states = ['RS', 'SP', 'RJ', 'SC'];
  $scope.person = new Person();

  $scope.savePerson = function (person) {
    $scope.people.push(person);
    $scope.person = new Person();

    $scope.form.$setUntouched();
    $scope.form.$setPristine();
  }

  console.log($scope.person);

}])

function newPerson() {
  return { name: "", email: "", gender: "", state: "RJ" };
}
