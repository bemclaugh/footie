'use strict';

/**
 * @ngdoc directive
 * @name footieApp.directive:uploader
 * @description
 * # uploader
 */
angular.module('footieApp', [])
.directive('uploader', function () {
    var controller = function($scope) {
        var progress = function(evt) {
            console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
        };
        var success = function(data, status, headers, config) {
            $scope.filename = data.filename;
        };
        var readFile = function(file) {
            //$scope.fileName = file;
            var fileReader = new FileReader();
            fileReader.onload = function() {
                this.upload = $upload.upload({
                    url: 'http://127.0.0.1:5000/upload/',
                    method: 'POST',
                    headers: {'Content-Type': file.type},
                    data: {myObj: $scope.myModelObj},
                    file: file}
                ).progress(function(evt) {progress(evt);}
                ).success(function(data, status, headers, config) {
                    success(data, status, headers, config);
                });
            };
            fileReader.readAsDataURL(file);
        };
        $scope.fileReaderSupported = window.FileReader !== null;
        $scope.onFileSelect = function($files) {
            $files.forEach(function(file) {
                if (window.FileReader && file.type.indexOf('image') > -1) {
                    readFile(file);
                }
            });
        };
    };
    return {
        templateUrl: 'views/uploader.html',
        restrict: 'E',
        scope: { fileName: '=' },
        controller: controller
    };
}   );
