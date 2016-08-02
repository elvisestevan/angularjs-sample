app.factory('Person', function() {
  var Person = function () {
    this.name = '';
    this.email = '';
    this.gender = '';
    this.state = 'SP';

    this.toGreet = function () {
      return "Hello " + this.name + "!";
    };
  };

  return Person;
});
