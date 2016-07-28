app.controller('formController', function ($scope) {

  $scope.people = [];
  $scope.states = ['RS', 'SP', 'RJ', 'SC'];
  $scope.person = newPerson();

  $scope.savePerson = function (person) {
    $scope.people.push(person);
    $scope.person = newPerson();

    $scope.form.$setUntouched();
    $scope.form.$setPristine();
  }

  console.log($scope.person);

})

function newPerson() {
  return { name: "", email: "", gender: "", state: "RJ" };
}
