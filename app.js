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
  $scope.posts = [
    {
      title: 'Lorem Ipsume Whatever',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper malesuada ante sit amet lobortis. In hac habitasse platea dictumst. Mauris pretium pharetra orci, a porta quam. Mauris eget aliquam orci. Duis sollicitudin congue odio nec dictum. Quisque semper sit amet dui at accumsan. Ut molestie, tortor sit amet ultrices pharetra, magna risus placerat dui, et scelerisque tellus neque eget dui. Nullam vulputate et metus nec interdum. Praesent nec vehicula nisl.',
      date: new Date(),
      tags: ['Tag1', 'Tag2', 'Tag3'],
      collection: 'Collection1',
      commentCount: 31
    },
    {
      title: 'Lorem Ipsume Whatever 2',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper malesuada ante sit amet lobortis. In hac habitasse platea dictumst. Mauris pretium pharetra orci, a porta quam. Mauris eget aliquam orci. Duis sollicitudin congue odio nec dictum. Quisque semper sit amet dui at accumsan. Ut molestie, tortor sit amet ultrices pharetra, magna risus placerat dui, et scelerisque tellus neque eget dui. Nullam vulputate et metus nec interdum. Praesent nec vehicula nisl.',
      date: new Date(),
      tags: ['Tag4', 'Tag5', 'Tag6'],
      collection: 'Collection2',
      commentCount: 1337
    }
  ];
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
