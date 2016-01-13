angular.module('app').config(RouteConfig);

function RouteConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/about/about.html'
    })
    .when('/resume', {
      controller: 'ResumeController',
      controllerAs: 'vm',
      templateUrl: 'app/resume/resume.html'
    })
    .when('/blog', {
      controller: 'BlogController',
      controllerAs: 'vm',
      templateUrl: 'app/blog/blog.html'
    })
    .otherwise({ redirectTo: '/' });
}
