'use strict';

angular
  .module('footieApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularFileUpload'
  ])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/shrink/', {
        templateUrl: 'views/images.html',
        controller: 'ImageCtrl'
      })
      .when('/squish/', {
        templateUrl: 'views/images.html',
        controller: 'ImageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // send requests with appropriate CORS headers for the whole app
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);
