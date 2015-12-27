var app = angular.module('app', ['ngRoute']);

var services = {};

services.elapsedTimeService = function() {
  this.oneSecond = 1000;
  this.oneMinte = this.oneSecond * 60;
  this.oneHour = 60 * this.oneMinte;
  this.oneDay = this.oneHour * 24;
  this.oneWeek = this.oneDay * 7;
  this.oneMonth = this.oneDay * 30;
  this.oneYear = this.oneDay * 365;

  this.calculate = function(begin, end) {
    var scale = 1;
    var unit = 'second';
    var a = begin.getTime();
    var b = end.getTime();
    var diff = b - a;

    if ((scale = diff / this.oneYear) >= 1) {
      unit = 'year';
    } else if ((scale = diff / this.oneMonth) >= 1) {
      unit = 'month';
    } else if ((scale = diff / this.oneWeek) >= 1) {
      unit = 'week';
    } else if ((scale = diff / this.oneDay) >= 1) {
      unit = 'day';
    } else if ((scale = diff / this.oneHour) >= 1) {
      unit = 'hour';
    } else if ((scale = diff / this.oneMinte) >= 1) {
      unit = 'minute';
    } else if ((scale = diff / this.oneSecond) >= 1) {
      unit = 'second';
    } else {
      scale = 1;
      unit = 'second';
    }

    return { scale: Math.floor(scale), unit: unit };
  };
};

app.service(services);

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

controllers.BlogController = function($scope, $http, elapsedTimeService) {
  $http.get('data/posts.json').then(function(response) {
    var data = response.data;
    var now = new Date();
    for (var i = 0, l = data.length; i < l; i++) {
      data[i].elapsed = elapsedTimeService.calculate(new Date(data[i].date), now);
    }
    $scope.posts = data;
  });
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
