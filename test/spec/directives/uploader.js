'use strict';

describe('Directive: uploader', function () {

  var htmlView, $scope, $compile;

  // load the directive's module
  beforeEach(function() {
    module('footieApp');
    module('views/uploader.html');
  });

  beforeEach(inject(function($injector) {
      htmlView = angular.element('<uploader></uploader>');
      $scope = $injector.get('$rootScope');
      $compile = $injector.get('$compile');
      $compile(htmlView)($scope);
  }));

  it('the element should have expanded', function() {
    $scope.$digest();
    expect(htmlView.html()).toMatch('Browse');
  });

  it('singleFile mode should display a text input element', function() {
    $scope.mode = 'singleFile';
    $scope.$digest();
    expect(htmlView.find('input')).length(1);
  });
});
