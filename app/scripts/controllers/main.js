'use strict';

angular.module('footieApp')
  .controller('MainCtrl', function($scope) {
    $scope.add = function() {
      var f = document.getElementById('file').files[0],
          r = new FileReader();
      r.onloadend = function(e) {
        var data = e.target.result;
      };
      r.readAsArrayBuffer();
  };
});
