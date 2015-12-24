var app = angular.module('app', ['ngRoute']);

var controllers = {};

controllers.SidebarController = function($scope, $location) {
	$scope.isActive = function(p) {
		var path = $location.path();
		return (path == p) || (path == '/' && p == '/about');
	};
};

controllers.AboutController = function($scope) {
	console.log('about controller');
};

controllers.ResumeController = function($scope) {
	console.log('resume controller');
};

controllers.BlogController = function($scope) {
	console.log('blog controller');
};

app.controller(controllers);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'AboutController',
      templateUrl: 'about.html'
    })
    .when('/about', {
      controller: 'AboutController',
      templateUrl: 'about.html'
    })
    .when('/resume', {
    	controller: 'ResumeController',
    	templateUrl: 'resume.html'
    })
    .when('/blog', {
    	controller: 'BlogController',
    	templateUrl: 'blog.html'
    })
    .otherwise({ redirectTo: '/' });
});
