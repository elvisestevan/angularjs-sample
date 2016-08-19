angular.module('app', ['ngRoute'])
  .controller('RoutesController', function ($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$routeParams = $routeParams;
    $scope.$location = $location;
  })

  .controller('InicioController', function ($scope) {
    console.log('Entrou no InicioController');
  })

  .controller('Pagina1Controller', function ($scope) {
    console.log('Entrou no Pagina1Controller');
  })

  .controller('Pagina2Controller', function ($scope, $routeParams) {
    console.log('Entrou no Pagina2Controller, id: ' + $routeParams.id);
  })

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', { templateUrl: '/views/inicio.html', controller: 'InicioController'})
      .when('/pagina1', { templateUrl: '/views/pagina1.html', controller: 'Pagina1Controller'})
      .when('/pagina2/:id', { templateUrl: '/views/pagina2.html', controller: 'Pagina2Controller'})
      .otherwise({ redirectTo: '/' });
  });
