'use strict';
 
angular.module('nmblisApp.controllers.home', ['nmblisApp.services.home', 'nmblisApp.services.fonts'])
  .controller('HomeController', ['$scope', '$rootScope', '$routeParams', '$upload', '$timeout', '$location', 'angularFire', 'FBURL','Home', 'Server', 'Fonts',
    function($scope, $rootScope, $routeParams, $upload, $timeout, $location, angularFire, FBURL, Home, Server, Fonts) {

	$scope.userId = $scope.auth.id; 
    $scope.nmblisId = $routeParams.nmblisId;
    var nmblis = new Firebase(FBURL+'/users/'+$scope.userId+'/created/'+$scope.nmblisId);
    $scope.fonts = Fonts.list();

    $scope.confirmTrash = true;

    $scope.allNmblis = function (userId) {
        $scope.nmblis = Home.created($scope.userId);
        $rootScope.title = "HOME";
    };

    $scope.view = function() {
        $scope.init();
        $rootScope.title = "VIEW";
    }; 

    $scope.archive = function(nmblis, userId, nmblisId) {
        angular.element('#archive').addClass('archive-class');
        var nmblis = new Firebase(FBURL+'/users/'+$scope.userId+'/created/'+$scope.nmblisId);
        nmblis.child('_meta').update({"archive":{"value":"yes"}});
        $timeout(function ()
            {$location.path('/home')
        }, 400);
    };

     $scope.unarchive = function(nmblis, userId, nmblisId) {
        angular.element('#unarchive').addClass('archive-class');
        var nmblis = new Firebase(FBURL+'/users/'+$scope.userId+'/created/'+$scope.nmblisId);
        nmblis.child('_meta').update({"archive":{"value":"no"}});
        $timeout(function ()
            {$location.path('/home')
        }, 400);
    };

    $scope.trash = function() {
        $scope.confirmTrash = false;
        $timeout(function ()
            {$scope.confirmTrash = true;
        }, 5000);

    };

    $scope.confirmDelete = function(userId, nmblisId) {
        var nmblis = new Firebase(FBURL+'/users/'+$scope.userId+'/created/'+$scope.nmblisId);
        nmblis.remove();
        Server.removeNmblis($scope.nmblisId);
        $timeout(function ()
            {$location.path('/home')
        }, 400);      
    };

    $scope.close = function() {
        angular.element('#close').addClass('home-class');
         $timeout(function ()
            {$location.path('/home')
        }, 200);
        
    };

    $scope.edit = function(userId, nmblisId) {
        $scope.init();
        $rootScope.title = "EDIT"
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

<!---->
    $scope.bgUpload = function() {
        angular.element("#bgPic").click();
    };    

    $scope.bgFileSelect = function($files) {
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            $scope.upload = $upload.upload({
                url: 'http://nmblis.com/php/upload_file.php',
                method: 'POST',
                data: {
                    dest: $scope.nmblisId,
                    folder: "bg"},
                file: $file
                
            }).success(function(data, status, headers, config) {
                $scope.nmblis._basics.background.url = angular.element('#bgPic').val().replace(/C:\\fakepath\\/i, '');
            });
        }
    };  

    $scope.backgroundClear = function() {
        $scope.nmblis._basics.background.url = "";
    };

    $scope.logoUpload = function() {
        angular.element("#logoPic").click();
    };    

    $scope.logoFileSelect = function($files) {
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            $scope.upload = $upload.upload({
                url: 'http://nmblis.com/php/upload_file.php',
                method: 'POST',
                data: {
                    dest: $scope.nmblisId,
                    folder: "logo"},
                file: $file,
            }).success(function(data, status, headers, config) {
                $scope.nmblis._basics.logo.url = angular.element('#logoPic').val().replace(/C:\\fakepath\\/i, '');
            });
        }
    };

    $scope.logoClear = function() {
        $scope.nmblis._basics.logo.url = "";
    };

    $scope.metaUpload = function() {
        angular.element("#metaPic").click();
    };

    $scope.metaFileSelect = function($files) {
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            $scope.upload = $upload.upload({
                url: 'http://nmblis.com/php/upload_file.php',
                method: 'POST',
                data: {
                    dest: $scope.nmblisId,
                    folder: "meta"},
                file: $file,
            }).success(function(data, status, headers, config) {
                $scope.nmblis._meta.url.valuee = angular.element('#metaPic').val().replace(/C:\\fakepath\\/i, '');
            });
        }
    };     

    $scope.metaClear = function() {
        $scope.nmblis._meta.url.value = "";
    };

    $scope.flipsideBgUpload = function() {
        angular.element("#flipsideBgPic").click();
    };    

    $scope.flipsideBgFileSelect = function($files) {
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            $scope.upload = $upload.upload({
                url: 'http://nmblis.com/php/upload_file.php',
                method: 'POST',
                data: {
                    dest: $scope.nmblisId,
                    folder: "flipsidebg"},
                file: $file
                
            }).success(function(data, status, headers, config) {
                $scope.nmblis.flipside.background.url = angular.element('#flipsideBgPic').val().replace(/C:\\fakepath\\/i, '');
            });
        }
    };

    $scope.flipsideBackgroundClear = function() {
        $scope.nmblis.flipside.background.url = "";
    };  

    $scope.flipsideLogoUpload = function() {
        angular.element("#flipsideLogoPic").click();
    };    

    $scope.flipsideLogoFileSelect = function($files) {
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            $scope.upload = $upload.upload({
                url: 'http://nmblis.com/php/upload_file.php',
                method: 'POST',
                data: {
                    dest: $scope.nmblisId,
                    folder: "flipsidelogo"},
                file: $file
                
            }).success(function(data, status, headers, config) {
                $scope.nmblis.flipside.logo.url = angular.element('#flipsideLogoPic').val().replace(/C:\\fakepath\\/i, '');
            });
        }
    };

    $scope.flipsideLogoClear = function() {
        $scope.nmblis.flipside.logo.url = "";
    };        

    $scope.setSelected = function(selected) {$scope.selected = selected;};

    $scope.remove = function(item){
        var index=$scope.nmblis.extra.indexOf(item)
        $scope.nmblis.extra.splice(index,1);
    };

    $scope.add = function() {
        $scope.nmblis.extra.push({ 
            value: "New Field",
            x: "150",
            y: "150",
            font: "Oxygen",
            fontColor: "#FF0000",
            fontSize: "20",
            deleteable: "yes",
        });
    };

    $scope.reset = function () {
        angular.element('#reset').addClass('reset-class');
        $scope.init();
        $timeout(function () {
            angular.element('#reset').removeClass('reset-class');
        }, 400);
    };

    $scope.cancel = function() {
        angular.element('#cancel').addClass('cancel-class');
        $timeout(function ()
            {$location.path('/home')
        }, 400);
    };

    $scope.save = function (userId, nmblisId, nmblis) {
        var savingCopy = angular.copy($scope.nmblis);
        Home.save($scope.userId, $scope.nmblisId, savingCopy);
        $scope.cleanFolders($scope.nmblisId, $scope.nmblis);
        angular.element('#save').addClass('save-class');
        $timeout(function ()
            {$location.path('/home')
        }, 400);
    };


    $scope.publishNo = function() {
        $scope.nmblis._meta.published.value = 'no';
    };

    $scope.publishYes = function() {
        $scope.nmblis._meta.published.value = 'yes';
    };

    $scope.archiveNo = function() {
        $scope.nmblis._meta.archive.value = 'no';
    };

    $scope.archiveYes = function() {
        $scope.nmblis._meta.archive.value = 'yes';
    };

    $scope.clonableNo = function() {
        $scope.nmblis._meta.clonable.value = 'no';
    };

    $scope.clonableYes = function() {
        $scope.nmblis._meta.clonable.value = 'yes';
    };

    $scope.shareableNo = function() {
        $scope.nmblis._meta.shareable.value = 'no';
    };

    $scope.shareableYes = function() {
        $scope.nmblis._meta.shareable.value = 'yes';
    };

    $scope.clicked = function() {
        $(this).addClass('nmblis-clicked');
    }    

    $scope.cleanFolders = function(nmblisId, nmblis) {
        Server.clean($scope.nmblisId, $scope.nmblis);
        console.log('clean');
    };  

    $scope.activate = function() {
      $scope.nmblis.flipside.activated="yes";
    };

    $scope.deactivate = function() {
      $scope.nmblis.flipside.activated="no";
    };

    $scope.toAside = function() {
      $scope.nmblis.flipside.side="a";
    };

    $scope.toBside = function() {
      $scope.nmblis.flipside.side="b";
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