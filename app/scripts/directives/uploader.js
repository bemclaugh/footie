'use strict';

/**
 * @ngdoc directive
 * @name footieApp.directive:uploader
 * @description
 * # uploader
 */
angular.module('footieApp')
.directive('uploader', function () {
    var link = function(scope, element, attrs) {
        element.bind('change', function(event) {
            var files = event.target.files;
            var file = files[0];
            var r = new FileReader();
            scope.file = file ? file.name : undefined;
            scope.$apply();
            r.onloadend = function(e){
                var data = e.target.result;
                //send you binary data via $http or $resource or do anything else with it
            };
            r.readAsArrayBuffer(file);
        });
    };

    return {
        templateUrl: 'views/uploader.html',
        restrict: 'E',
        scope: {
            file: '='
        },
        link: link
    };
});
