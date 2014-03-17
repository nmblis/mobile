'use strict';
 
angular.module('nmblisApp.controllers.archive', ['nmblisApp.services.archive'])
  .controller('ArchiveController', ['$scope', '$timeout', '$rootScope', 'FBURL','Archive',
    function($scope, $timeout, $rootScope, FBURL, Archive) {

	$rootScope.title = "ARCHIVE";
    $scope.userId = $scope.auth.id;

    $scope.nmblis = Archive.created($scope.userId);  
}])