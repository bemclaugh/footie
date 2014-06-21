'use strict';

describe('Directive: uploader: ', function () {

  var htmlView, $scope, $compile;

  beforeEach(function() {
    module('footieApp');
    module('views/uploader.html');
  });

  beforeEach(inject(function($injector) {
    htmlView = angular.element('<uploader></uploader>');
    $scope = $injector.get('$rootScope');
    $compile = $injector.get('$compile');
    $compile(htmlView)($scope);
    $scope.$digest();
  }));

  it('the element should have expanded', function() {
    expect(htmlView.html()).toMatch('Browse');
  });

  xit('singleFile mode should display a file input element', function() {
    expect(htmlView.attr('type', 'file').length).toEqual(1);
  });

  xit('fileReader should have read a file', function() {
    expect($scope.selectedFiles.length).toBeGreaterThan(0);
  });

  xit('onFileSelect should run when a new file is read');
});
