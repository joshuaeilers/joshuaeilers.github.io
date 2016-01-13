angular.module('app').directive('app', App);

function App() {
  return {
    templateUrl: 'app/app.html',
    controller: AppController,
    controllerAs: 'vm'
  };
}

function AppController($location, ProfileService) {
  var vm = this;
  vm.links = [
    { label: 'About', loc: '/' },
    { label: 'Resume', loc: '/resume' },
    { label: 'Blog', loc: '/blog' }
  ];

  init();

  function init() {
    ProfileService.load('me').then(function(profile) {
      vm.profile = profile;
    });
  }

  vm.isSelected = function(link) {
    return $location.path() == link.loc;
  };

  vm.navigateTo = function(link) {
    $location.path(link.loc);
  };
}
