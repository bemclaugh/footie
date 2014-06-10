'use strict';

angular.module('footieApp', [])
.factory('ThumborService', function($http) {
  /*
  var getThumborServer = function() {
    return 'http://localhost';
  };
  */
  var testUrl = 'https://picasaweb.google.com/data/feed/api/all?q=%22hawaii%22&kind=photo&access=all&alt=rss';
  var request = {
    url: testUrl,
    image: ''
  };
  /*
  var buildUrl = function(method='', image='') {
    return getThumborServer() + method + image;
  };
  */
  var shrink = function(image) {
    //request.url = buildUrl();
    request.image = image;
    return $http.get(request).then(function(response) {
      return response.data;
    });
  };
  return {
    shrink: shrink
  };
});
