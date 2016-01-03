angular.module('app').controller('SidebarController', SidebarController);

function SidebarController($mdSidenav) {
  var vm = this;
  vm.title = "SidebarController";
}