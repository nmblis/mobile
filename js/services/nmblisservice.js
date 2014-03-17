'use strict';
 
angular.module('nmblisApp.services.server', [])
  .factory('Server', ['$http',
    function($http) {
      return {
        folders: function(userId, nmblisId, tmplNmblisId) {
          $http({
            url: 'http://nmblis.com/php/createFolder.php', 
            method: "POST",
            data: {
              "userid": userId,
              "dst": nmblisId,
              "src": tmplNmblisId 
            }
          });
        }
      , clean: function(nmblisId, nmblis) {
          $http({
            url: 'http://nmblis.com/php/clean.php', 
            method: "POST",
            data: {
              "dest": nmblisId,
              "bg": nmblis._basics.background.url, 
              "logo": nmblis._basics.logo.url, 
              "meta": nmblis._meta.url.value,
              "flipsidebg": nmblis.flipside.background.url,
              "flipsidelogo": nmblis.flipside.logo.url
            }
          });
        }  
      , removeNmblis: function(nmblisId) {
          $http({
            url: 'http://nmblis.com/php/delete.php', 
            method: "POST",
            data: {
              "nmblisId": nmblisId
            }
          });
        }    
  	}
  }])