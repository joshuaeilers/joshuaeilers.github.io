angular.module('app').directive('app', App);

function App() {
  return {
    templateUrl: 'app/app.html',
    controller: AppController,
    controllerAs: 'vm'
  };
}

function AppController($location) {
  var vm = this;
  vm.me = {
    name: 'Joshua Eilers',
    title: 'Software Engineer',
    img: 'assets/img/me.jpg'
  };
  vm.links = [
    { label: 'About', loc: '/' },
    { label: 'Resume', loc: '/resume' },
    { label: 'Blog', loc: '/blog' }
  ];

  vm.isSelected = function(link) {
    return $location.path() == link.loc;
  };

  vm.navigateTo = function(link) {
    $location.path(link.loc);
  };
}
