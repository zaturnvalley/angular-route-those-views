angular.module('OverwatchCtrls', ['OverwatchFactories'])
.controller('CharacterCtrl', ['$scope', 'Characters', function($scope, Characters) {
  $scope.characters = [];

  $scope.showAll = function() {
    Characters.query(function success(res) {
        console.log(res);
        $scope.characters = res;
        $scope.loading = false;
    }, function error(res) {
        console.log(res);
    })
  }
}]);