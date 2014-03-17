'use strict';
 
angular.module('nmblisApp.controllers.add', ['nmblisApp.services.add'])
  .controller('AddController', ['$scope', '$rootScope', '$routeParams', '$timeout', '$location', 'FBURL', 'Add', 
    function($scope, $rootScope, $routeParams, $timeout, $location, FBURL, Add) {

    $rootScope.title = "ADD";
    $scope.userId = $scope.auth.id;
    $scope.nmblisId = $routeParams.nmblisId;
    $scope.creatorId = $routeParams.creatorId;
    var nmblis = new Firebase(FBURL+'/users/'+$scope.creatorId+'/created/'+$scope.nmblisId);

    $scope.init = function() {
        nmblis.once('value', function(snap) {
            $scope.nmblis = snap.val();
            console.log($scope.nmblis);          
        });    
    };

    $scope.close = function() {
        angular.element('#cancel').addClass('close-class');
         $timeout(function ()
            {$location.path('/home')
        }, 200);
        
    };

    $scope.save = function(userId, nmblisId, nmblis) {
        
        var rawDate = new Date();                 
        var date = rawDate.toLocaleString();

        $scope.getLoc = function get_user_location(){ 
            navigator.geolocation.getCurrentPosition($scope.expLoc); 
        } 
        
        $scope.expLoc = function expose_user_location(user_position){ 
            var latLon = {
                "lat":user_position.coords.latitude,
                "lng":user_position.coords.longitude
            };
            Add.update($scope.userId, $scope.nmblisId, $scope.creatorId, latLon, date);
        } 

        angular.element('#save').addClass('save-class');
        var savingCopy = angular.copy($scope.nmblis);
        Add.save($scope.userId, $scope.nmblisId, savingCopy);
        angular.element('#save').addClass('save-class');
        $scope.getLoc();
        $timeout(function ()
            {$location.path('/home')
        }, 400);
    };

    $scope.flipsideShow = function() {
      angular.element('#flipside').addClass('nmblis-onTop');
      $scope.flipShow = false;
    };

    $scope.flipsideHide = function() {
      angular.element('#flipside').removeClass('nmblis-onTop');
      $scope.flipShow = true;
    };

}])