angular.module('app').controller('AppController', AppController);

function AppController() {
  var vm = this;
  vm.name = 'Joshua Eilers';
  vm.img = 'assets/img/me.jpg';
  vm.links = [
    { label: 'About', loc: '#/about' },
    { label: 'Resume', loc: '#/resume' },
    { label: 'Blog', loc: '#/blog' }
  ];
}
