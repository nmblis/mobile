'use strict';
 
angular.module('nmblisApp.controllers.create', ['nmblisApp.services.create', 'nmblisApp.services.server', 'nmblisApp.services.fonts'])
  .controller('CreateController', ['$scope','$rootScope','$routeParams', '$timeout', '$location', 'FBURL', 'angularFire', 'angularFireCollection', 'Create', 'Server', 
    function($scope, $rootScope, $routeParams, $timeout, $location, FBURL, angularFire, angularFireCollection, Create, Server) {

	$scope.tmplNmblisId = $routeParams.tmplNmblisId;
	$scope.userId = $scope.auth.id;
		  
	$scope.nmblisTemplates = function () {
    	$scope.nmblisCards = Create.allTemplates();
    };

    $scope.acquiredTemplates = function (userId) {
    	$scope.acquiredCards = Create.allAcquired($scope.userId); 
    }; 

	//NMBLIS TEMPLATE//
	var tmplNmblis = new Firebase(FBURL+'/templates/'+$scope.tmplNmblisId);
	$scope.tmplNmblis = function () {
		tmplNmblis.once('value', function(data) {
    		$scope.nmblis = data.val(); 	
    	});
	};

	$scope.fromNmblis = function(userId, tmplId) {

    	$scope.createFolders = function(userId, nmblisId, tmplNmblisId) {
        	Server.folders($scope.userId, $scope.nmblisId, $scope.tmplNmblisId);
    	};

		$scope.nmblisId = Create.card($scope.userId);
		var nmblis = new Firebase(FBURL+'/users/'+$scope.userId+'/created/'+$scope.nmblisId);
		$scope.tmplNmblis();
		Create.save($scope.userId, $scope.nmblisId, $scope.nmblis);
		Create.metaClear($scope.userId, $scope.nmblisId);
		$scope.metaDefault();
		$scope.init();
		$scope.createFolders($scope.userId, $scope.nmblisId, $scope.tmplNmblisId);
		$timeout(function () {
			angular.element('#cloudbody').addClass('fadeOut');
			}, 4200);
		$timeout(function () {			
			$location.path('/home/'+$scope.nmblisId+'/edit');
			}, 4900);		

		$scope.cleanFolders = function(nmblisId, nmblis) {
			Server.clean($scope.nmblisId, $scope.nmblis);
		}; 	

    };

	//ACQUIRED TEMPLATE//
	var tmplAcquired = new Firebase(FBURL+'/users/'+$scope.userId+'/acquired/'+$scope.tmplNmblisId);
	$scope.tmplAcquired = function () {
		tmplAcquired.once('value', function(data) {
    		$scope.nmblis = data.val();   	
    	});
	};

	$scope.fromAcquired = function(userId, tmplId) {
    	
    	$scope.createFolders = function(userId, nmblisId, tmplNmblisId) {
        	Server.folders($scope.userId, $scope.nmblisId, $scope.tmplNmblisId);
    	};

		$scope.nmblisId = Create.card($scope.userId);
		var nmblis = new Firebase(FBURL+'/users/'+$scope.userId+'/created/'+$scope.nmblisId);
		$scope.tmplNmblis();
		Create.save($scope.userId, $scope.nmblisId, $scope.nmblis);
		Create.metaClear($scope.userId, $scope.nmblisId);
		$scope.metaDefault();
		$scope.init();
		$scope.createFolders($scope.userId, $scope.nmblisId, $scope.tmplNmblisId);
		$timeout(function () {
			angular.element('#cloudbody').addClass('fadeOut');
			}, 4200);
		$timeout(function () {			
			$location.path('/home/'+$scope.nmblisId+'/edit');
			}, 4900);		

		$scope.cleanFolders = function(nmblisId, nmblis) {
			Server.clean($scope.nmblisId, $scope.nmblis);
		}; 	

    };

	$scope.init = function () {
		var nmblis = new Firebase(FBURL+'/users/'+$scope.userId+'/created/'+$scope.nmblisId);
		nmblis.once('value', function(data) {
			$scope.nmblis = data.val();  	
		});
	};

	$scope.metaDefault = function () {
		var nmblis = new Firebase(FBURL+'/users/'+$scope.userId+'/created/'+$scope.nmblisId);
		nmblis.child('_meta').set({"linkedin":{"value":""},"flickr":{"value":""},
			"published":{"value":"no"},"url":{"value":""},"twitter":{"value":""},"instagram":{"value":""},
			"shareable":{"value":"yes"},"archive":{"value":"no"},"googleplus":{"value":""},
			"pinterest":{"value":""},"facebook":{"value":""},"tumblr":{"value":""},
			"clonable":{"value":"no"}
		});
	};

    $scope.nmblisList = function() {
        angular.element("#nmblisList").addClass("selected-active");
        angular.element("#libraryList").removeClass("selected-active");
    };

    $scope.libraryList = function() {
        angular.element("#nmblisList").removeClass("selected-active");
        angular.element("#libraryList").addClass("selected-active");
    };	

}])