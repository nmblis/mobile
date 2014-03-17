'use strict';
 
angular.module('nmblisApp.controllers.library', ['nmblisApp.services.library', 'nmblisApp.services.fonts'])
  .controller('LibraryController', ['$scope', '$rootScope', '$routeParams', '$timeout', '$location', 'FBURL','Library', 'Fonts',
    function($scope, $rootScope, $routeParams, $timeout, $location, FBURL, Library, Fonts) {

	$rootScope.title = "LIBRARY";
    $scope.userId = $scope.auth.id;
    $scope.nmblisId = $routeParams.nmblisId;
    var nmblis = new Firebase(FBURL+'/users/'+$scope.userId+'/acquired/'+$scope.nmblisId);

    $scope.confirmTrash = true;

    $scope.allNmblis = function (userId) {
        $scope.nmblis = Library.acquired($scope.userId);
        console.log($scope.nmblis);
    };

    $scope.init = function() {
        nmblis.once('value', function(data) {
            $scope.nmblis = data.val();      
            if (  $scope.nmblis._meta.facebook.value==='' 
                & $scope.nmblis._meta.twitter.value===''
                & $scope.nmblis._meta.linkedin.value===''
                & $scope.nmblis._meta.googleplus.value===''
                & $scope.nmblis._meta.pinterest.value===''
                & $scope.nmblis._meta.tumblr.value===''
                & $scope.nmblis._meta.instagram.value===''
                & $scope.nmblis._meta.flickr.value===''
            ) {
                $scope.socmed = "yes";
            };
        });
    };

            
    $scope.view = function() {
        $scope.init();
    }; 


    $scope.trash = function() {
        $scope.confirmTrash = false;
        $timeout(function ()
            {$scope.confirmTrash = true;
        }, 5000);

    };

    $scope.confirmDelete = function(userId, nmblisId) {
        var nmblis = new Firebase(FBURL+'/users/'+$scope.userId+'/acquired/'+$scope.nmblisId);
        nmblis.remove();
        $timeout(function ()
            {$location.path('/library')
        }, 400);      
    };

    $scope.close = function() {
        angular.element('#close').addClass('close-class');
         $timeout(function ()
            {$location.path('/library')
        }, 200);
    };

    $scope.predicate = '_meta.Date';
    $scope.reverse = 'false';   

    $scope.nmblisView = function() {
        angular.element("#nmblisView").addClass("selected-active");
        angular.element("#listView").removeClass("selected-active");
    };

    $scope.listView = function() {
        angular.element("#nmblisView").removeClass("selected-active");
        angular.element("#listView").addClass("selected-active");
    };

    $scope.fnameSort = function() {
        angular.element("#fnameSort").addClass("selected-active");
        angular.element("#lnameSort").removeClass("selected-active");
        angular.element("#titleSort").removeClass("selected-active");
        angular.element("#companySort").removeClass("selected-active");
        angular.element("#dateSort").removeClass("selected-active");
    };
    $scope.lnameSort = function() {
        angular.element("#fnameSort").removeClass("selected-active");
        angular.element("#lnameSort").addClass("selected-active");
        angular.element("#titleSort").removeClass("selected-active");
        angular.element("#companySort").removeClass("selected-active");
        angular.element("#dateSort").removeClass("selected-active");
    };
    $scope.titleSort = function() {
        angular.element("#fnameSort").removeClass("selected-active");
        angular.element("#lnameSort").removeClass("selected-active");
        angular.element("#titleSort").addClass("selected-active");
        angular.element("#companySort").removeClass("selected-active");
        angular.element("#dateSort").removeClass("selected-active");
    };
    $scope.companySort = function() {
        angular.element("#fnameSort").removeClass("selected-active");
        angular.element("#lnameSort").removeClass("selected-active");
        angular.element("#titleSort").removeClass("selected-active");
        angular.element("#companySort").addClass("selected-active");
        angular.element("#dateSort").removeClass("selected-active");
    };
    $scope.dateSort = function() {
        angular.element("#fnameSort").removeClass("selected-active");
        angular.element("#lnameSort").removeClass("selected-active");
        angular.element("#titleSort").removeClass("selected-active");
        angular.element("#companySort").removeClass("selected-active");
        angular.element("#dateSort").addClass("selected-active");
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