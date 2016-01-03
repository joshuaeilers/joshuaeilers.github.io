angular.module('app').config(RouteConfig);

function RouteConfig($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'SidebarController',
      controllerAs: 'vm',
      templateUrl: 'app/app.html'
    })
    .otherwise({ redirectTo: '/' });
}
