'use strict';

angular
  .module('footieApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider, $locationProvider) {
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
  });
