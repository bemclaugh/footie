'use strict';

describe('Directive: uploader: ', function () {

  var App, htmlView, $scope, $compile, fileContentsMock, fileReaderMock, chooseFile;

  beforeEach(function() {
    App = module('footieApp');
    module('views/uploader.html');
  });

  beforeEach(inject(function($injector) {
    htmlView = angular.element('<uploader></uploader>');
    chooseFile = function(filePath) {
      var fileInputField = angular.element.find('input');
      fileInputField.val = filePath;
      fileInputField.trigger('change');
      $scope.$digest();
    };
    fileContentsMock = 'mock file contents';
    fileReaderMock = {
      readAsDataURL: function() {
        return false;
      }
    };
    /*
    var windowMock = function() {};
    windowMock.FileReader = function() {
        return fileReaderMock;
      };
    module(function ($provide) {
      $provide.value('$window', windowMock);
    });
*/
    $scope = $injector.get('$rootScope');
    $compile = $injector.get('$compile');
    $compile(htmlView)($scope);
    $scope.$digest();
  }));

  it('the element should have expanded', function() {
    expect(htmlView.html()).toMatch('Browse');
  });

  it('singleFile mode should display a file input element', function() {
    expect(htmlView.attr('type', 'file').length).toEqual(1);
  });

  it('change event to input field should call onFileSelect', function() {
    spyOn($scope, 'FileSelect');
  });

  it('should have create a module instance', function() {
    expect(App).toExist();
  });

  xit('ngfileselect should call onFileSelect with files', function() {

  });

  xit('upload should run with a fileReader', function() {
    var fileReaderObj = jasmine.createSpyObj('frObj',
                                         ['addEventListener']);

  xit('should run success with valid data', function() {
    var successEvent = jasmine.createSpy();
    spyOn(window, 'FileReader').andReturn({
      addEventListener: successEvent,
      readAsDataURL: function(file) {
        // pass
      }
    });
    expect(successEvent.mostRecentCall.args[0]).toEqual('load');
    successEvent.mostRecentCall.args[1]({
      target: {
        result: 'the result to test'
      }
    });
    //expect($scope.selectedFiles.length).toBeGreaterThan(0);
  });

  xit('should run progress while uploading a valid data');

  xit('should run error with invalid data');
});
