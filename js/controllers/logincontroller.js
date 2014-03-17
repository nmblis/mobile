'use strict';

angular.module('nmblisApp.controllers.login', ['nmblisApp.services.login'])
  .controller('LoginCtrl', ['$scope', 'loginService', '$location',
    function($scope, loginService, $location) {

      if (!!$scope.auth) {
        $location.path('/login');
      }

    $scope.auth = null;
    console.log($scope.auth);     
	  
	  $scope.$on('angularFireAuth:login', function () {
        $location.path('/home');
      })

      $scope.email = null;
      $scope.pass = null;
      $scope.name = null;

      $scope.login = function(callback) {
        $scope.err = null;
        loginService.login($scope.email, $scope.pass, '/home', function(err, user) {
          if (err) {
          switch(err.code) {
            case 'INVALID_EMAIL': 
              $scope.err = "No matching email address. Perhaps you meant to Register?";
              break;
            case 'INVALID_PASSWORD': 
              $scope.err = "Password does not match email address";
              break;
            case 'EMAIL_TAKEN': 
              $scope.err = "Email address is already in use";
              break;                   
            default:
              $scope.err = "Invalid email and password combination";
              break;
          }
          } 
          typeof(callback) === 'function' && callback(err, user);

      });
    }
    }])
  