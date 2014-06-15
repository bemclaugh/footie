'use strict';

angular.module('footieApp')
.controller('ImageCtrl', ['ThumborService', function($scope, ThumborService) {
  $scope.shrink = function() {
    ThumborService.shrink($scope.image)
      .then(function(result) {
        console.log(result);
        $scope.shrunkImage = result.data;
      }
    );
  };
  $scope.squish = function() {
    ThumborService.squish($scope.image)
      .then(function(result) {
        console.log(result);
        $scope.shrunkImage = result.data;
      }
    );
  };
}]);
