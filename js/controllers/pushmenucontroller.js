'use strict';

angular.module('nmblisApp.controllers.pushmenu', ['nmblisApp.services.login'])
  .controller('PushmenuController', ['$scope', '$rootScope', '$timeout', '$location', 'loginService', 'angularFire', 'FBURL', 
    function($scope, $rootScope, $timeout, $location, loginService, angularFire, FBURL) {


      $scope.logout = function() {
        loginService.logout('/splash');
      };

      $scope.navbarEntries = [
        {
          "title": "Create",
          "link": "/create"
        }
      , {
          "title": "Library",
          "link": "/library"
        } 
      , {
          "title": "Archive",
          "link": "/archive"
        }      
      ];
    
      $scope.$on('$routeChangeSuccess', function() {
        $scope.navbarEntries.forEach(
          function(data) {
            data.isActive = ($location.path().indexOf(data.link) == 0);
          }
        )
      })      

      $rootScope.camera = function() {
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

          scanner.scan( function (result) {
            $timeout(function ()
                {$location.path(result.text)
            }, 400);           
          }, function (error) { 
              console.log("Scanning failed: ", error); 
          } );
      };


	  
}])