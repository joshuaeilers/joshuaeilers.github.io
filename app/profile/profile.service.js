angular.module('app').service('ProfileService', ProfileService);

function ProfileService($http) {
  this.load = function(profileName) {
    return $http.get('/app/data/profiles/' + profileName + '.json')
      .then(function(response) {
        return response.data;
      });
  };
}
