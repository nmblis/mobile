'use strict';

angular.module('nmblisApp.controllers.register', [])
  .controller('RegisterCtrl', ['$scope', 'loginService', '$location',
    function($scope, loginService, $location) {

      if (!!$scope.auth) {
        $location.path('/');
      }
	  
	  $scope.$on('angularFireAuth:login', function () {
        $location.path('/');
      })

      $scope.err = null;

      $scope.login = function(callback) {
        $scope.err = null;
        loginService.login($scope.email, $scope.pass, '/home', function(err, user) {
          $scope.err = err||null;
          typeof(callback) === 'function' && callback(err, user);
        });
      };

      $scope.createAccount = function() {
        if( !$scope.email ) {
          $scope.err = 'Please enter an email address';
        }
        else if( !$scope.pass ) {
          $scope.err = 'Please enter a password';
        }
        else {
          loginService.createAccount( $scope.email, $scope.pass, function(err, user) {
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
            else {
              $scope.login(function(err) {
                if( !err ) {
                  loginService.createProfile(user.id, user.email);
                }
              });
            }
          });
        }
      };
    }]);