angular.module('app').controller('ResumeController', ResumeController);

function ResumeController() {
  var vm = this;
  vm.sections = [
    {
      title: 'Software Engineer, UC Davis',
      body: 'Developing software in the office of Graduate Studies.\nAlso worked on the Student Information System and in the Registar.'
    },
    {
      title: 'Software Engineer, UC Davis',
      body: 'Developing software in the office of Graduate Studies.\nAlso worked on the Student Information System and in the Registar.'
    },
    {
      title: 'Software Engineer, UC Davis',
      body: 'Developing software in the office of Graduate Studies.\nAlso worked on the Student Information System and in the Registar.'
    }
  ];
}