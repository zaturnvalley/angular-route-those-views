angular.module('OverwatchFactories', ['ngResource'])
.factory('Characters', ['$resource', function($resource) {
  return $resource('https://api.lootbox.eu/pc/eu/DongJun-31810%20/competitive-play/heroes');
}]);