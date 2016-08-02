app.service('operations', function () {

  this.sum = function (value1, value2) {
    return value1 + value2;
  };

  this.sub = function (value1, value2) {
    return value1 - value2;
  }
  
});
