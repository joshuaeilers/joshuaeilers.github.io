angular.module('app').controller('AppController', AppController);

function AppController($location) {
  var vm = this;
  vm.name = 'Joshua Eilers';
  vm.img = 'assets/img/me.jpg';
  vm.links = [
    { label: 'About', loc: '/about' },
    { label: 'Resume', loc: '/resume' },
    { label: 'Blog', loc: '/blog' }
  ];
  vm.isSelected = function(p) {
    var path = $location.path();
    return (path == p) || (path == '/' && p == '/about');
  };
}
