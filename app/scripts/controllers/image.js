'use strict';

angular.module('footieApp')
.controller('ImageCtrl', function($scope, ThumborService) {
  ThumborService.shrink()
  .then(function(result) {
    console.log(result);
    $scope.shrunkImage = result.data;
  });
});
