'use strict';

describe('Directive: uploader', function () {

  var htmlView, $scope, $compile;

  // load the directive's module
  beforeEach(function() {
    module('footieApp');
  });

  beforeEach(function() {
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
    dump(htmlView);
    expect(htmlView.html()).toMatch('Browse');
  });
});
