app.filter('greeting', function () {
  return function (name) {
    return 'Hello ' + name + '!';
  };
});
