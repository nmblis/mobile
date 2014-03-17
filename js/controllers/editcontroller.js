'use strict';
 
angular.module('nmblisApp.controllers.edit', ['nmblisApp.services.home', 'nmblisApp.services.fonts'])
  .controller('EditController', ['$scope', '$rootScope', '$routeParams', '$upload', '$timeout', '$location', 'angularFire', 'FBURL','Home', 'Server', 'Fonts',
    function($scope, $rootScope, $routeParams, $upload, $timeout, $location, angularFire, FBURL, Home, Server, Fonts) {

	$scope.userId = $scope.auth.id;
    $scope.nmblisId = $routeParams.nmblisId;
    var nmblis = new Firebase(FBURL+'/users/'+$scope.userId+'/created/'+$scope.nmblisId);
    $scope.fonts = Fonts.list();

    $scope.confirmTrash = true;

    $scope.tabs = [
         {"page":"Basics"}
        ,{"page":"Extras"}
        ,{"page":"Flipside"}
        ,{"page":"Meta"}
    ]

    $scope.tab = $scope.tabs[0];

    $scope.basics = [
         {"page":"Name"}
        ,{"page":"Title"}
        ,{"page":"Company"}
        ,{"page":"Background"}
        ,{"page":"Image"}
    ]

    $scope.basic = $scope.basics[0];

    $scope.flipside = [
         {"page":"Text"}
        ,{"page":"Background"}
        ,{"page":"Image"}
    ]

    $scope.side = $scope.flipside[0];

    $scope.metas = [
         {"page":"Permissions"}
        ,{"page":"Pic"}
        ,{"page":"Social Media"}
    ]

    $scope.meta = $scope.metas[0];

    $scope.permissions = [
         {"page":"Activated"}
        ,{"page":"Flipside"}
        ,{"page":"Published"}
        ,{"page":"Archived"}
        ,{"page":"Cloneable"}
        ,{"page":"Shareable"}
    ]

    $scope.permission = $scope.permissions[0];

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
        angular.element('#close').addClass('cancel-class');
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
/*    $scope.bgUpload = function() {
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
    };  */

    $scope.backgroundClear = function() {
        $scope.nmblis._basics.background.url = "";
    };
/*
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
    };*/

    $scope.logoClear = function() {
        $scope.nmblis._basics.logo.url = "";
    };

/*    $scope.metaUpload = function() {
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
                $scope.nmblis._meta.url.value = angular.element('#metaPic').val().replace(/C:\\fakepath\\/i, '');
            });
        }
    };  */   

    $scope.metaClear = function() {
        $scope.nmblis._meta.url.value = "";
    };

/*    $scope.flipsideBgUpload = function() {
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
    };*/

    $scope.flipsideBackgroundClear = function() {
        $scope.nmblis.flipside.background.url = "";
    };  

/*    $scope.flipsideLogoUpload = function() {
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
    };*/

    $scope.flipsideLogoClear = function() {
        $scope.nmblis.flipside.logo.url = "";
    };        

    $scope.selected = "";

    $scope.setSelected = function(selected) {
        $scope.selected = selected;
    };

    $scope.remove = function(item){
        var index=$scope.nmblis.extra.indexOf(item);
        $scope.nmblis.extra.splice(index,1);
        $scope.selected = "";
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

    $scope.basicsSelected = function() {
        angular.element('#extra').removeClass('nmblis-edit-tab-selected-tab');
        angular.element('#flip').removeClass('nmblis-edit-tab-selected-tab');
        angular.element('#meta').removeClass('nmblis-edit-tab-selected-tab');
        angular.element('#basics').addClass('nmblis-edit-tab-selected-tab');
        $scope.flipsideHide();
    };
    
    $scope.extraSelected = function() {
        angular.element('#basics').removeClass('nmblis-edit-tab-selected-tab');        
        angular.element('#flip').removeClass('nmblis-edit-tab-selected-tab');
        angular.element('#meta').removeClass('nmblis-edit-tab-selected-tab');
        angular.element('#extra').addClass('nmblis-edit-tab-selected-tab');
        $scope.flipsideHide();
    };
    
    $scope.flipsideSelected = function() {
        angular.element('#basics').removeClass('nmblis-edit-tab-selected-tab');        
        angular.element('#extra').removeClass('nmblis-edit-tab-selected-tab');
        angular.element('#meta').removeClass('nmblis-edit-tab-selected-tab');
        angular.element('#flip').addClass('nmblis-edit-tab-selected-tab');        
        $scope.flipsideShow();
    };
    
    $scope.metaSelected = function() {
        angular.element('#basics').removeClass('nmblis-edit-tab-selected-tab');        
        angular.element('#extra').removeClass('nmblis-edit-tab-selected-tab');
        angular.element('#flip').removeClass('nmblis-edit-tab-selected-tab');
        angular.element('#meta').addClass('nmblis-edit-tab-selected-tab');
    };

    $scope.basicsNameEditSubtab = function() {
        angular.element('#nameEdit').addClass('subtabOn');
        angular.element('#namePosition').removeClass('subtabOn');
    };

    $scope.basicsNamePositionSubtab = function() {
        angular.element('#nameEdit').removeClass('subtabOn');
        angular.element('#namePosition').addClass('subtabOn');
    };

    $scope.basicsTitleEditSubtab = function() {
        angular.element('#nameEdit').addClass('subtabOn');
        angular.element('#namePosition').removeClass('subtabOn');
    };

    $scope.basicsTitlePositionSubtab = function() {
        angular.element('#titleEdit').removeClass('subtabOn');
        angular.element('#titlePosition').addClass('subtabOn');
    };

    $scope.basicsCompanyEditSubtab = function() {
        angular.element('#companyEdit').addClass('subtabOn');
        angular.element('#companyPosition').removeClass('subtabOn');
    };

    $scope.basicsCompanyPositionSubtab = function() {
        angular.element('#companyEdit').removeClass('subtabOn');
        angular.element('#companyPosition').addClass('subtabOn');
    };

    $scope.basicsImageEditSubtab = function() {
        angular.element('#imageEdit').addClass('subtabOn');
        angular.element('#imagePosition').removeClass('subtabOn');
    };

    $scope.basicsImagePositionSubtab = function() {
        angular.element('#imageEdit').removeClass('subtabOn');
        angular.element('#imagePosition').addClass('subtabOn');
    };   

    $scope.extraEditSubtab = function() {
        angular.element('#extraEdit').addClass('subtabOn');
        angular.element('#extraPosition').removeClass('subtabOn');
    };

    $scope.extraPositionSubtab = function() {
        angular.element('#extraEdit').removeClass('subtabOn');
        angular.element('#extraPosition').addClass('subtabOn');
    };        

    $scope.flipsideTextEditSubtab = function() {
        angular.element('#textEdit').addClass('subtabOn');
        angular.element('#textPosition').removeClass('subtabOn');
    };

    $scope.flipsideTextPositionSubtab = function() {
        angular.element('#flipsideTextEdit').removeClass('subtabOn');
        angular.element('#flipsideTextPosition').addClass('subtabOn');
    };

    $scope.flipsideImageEditSubtab = function() {
        angular.element('#flipsideImageEdit').addClass('subtabOn');
        angular.element('#flipsideImagePosition').removeClass('subtabOn');
    };

    $scope.flipsideImagePositionSubtab = function() {
        angular.element('#flipsideImageEdit').removeClass('subtabOn');
        angular.element('#flipsideImagePosition').addClass('subtabOn');
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

    $scope.cloneableNo = function() {
        $scope.nmblis._meta.cloneable.value = 'no';
    };

    $scope.cloneableYes = function() {
        $scope.nmblis._meta.cloneable.value = 'yes';
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

 /*****************/


    $scope.bgUpload = function() {

    navigator.camera.getPicture(uploadPhoto, function(message) { alert('get picture failed'); },
        { quality: 50, 
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
        );

        function uploadPhoto(imageURI) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1)+'.png';
            options.headers = {
                Connection: "close"
            }

            var params = new Object();
            params.dest = $scope.nmblisId;
            params.folder = "bg";

            options.params = params;

            var ft = new FileTransfer();
            ft.upload(imageURI, encodeURI("http://nmblis.com/php/upload_file.php"), win, fail, options);

            function win(r) {
                $scope.$apply(function () {
                   $scope.nmblis._basics.background.url = imageURI.substr(imageURI.lastIndexOf('/')+1)+'.png'; 
                });  
            }

            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }

        }
    }

    $scope.logoUpload = function() {

    navigator.camera.getPicture(uploadPhoto, function(message) { alert('get picture failed'); },
        { quality: 50, 
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
        );

        function uploadPhoto(imageURI) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1)+'.png';
            options.headers = {
                Connection: "close"
            }

            var params = new Object();
            params.dest = $scope.nmblisId;
            params.folder = "logo";

            options.params = params;

            var ft = new FileTransfer();
            ft.upload(imageURI, encodeURI("http://nmblis.com/php/upload_file.php"), win, fail, options);

            function win(r) {
                $scope.$apply(function () {
                   $scope.nmblis._basics.logo.url = imageURI.substr(imageURI.lastIndexOf('/')+1)+'.png'; 
                });
            }

            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }

        }
    }

    $scope.metaUpload = function() {

    navigator.camera.getPicture(uploadPhoto, function(message) { alert('get picture failed'); },
        { quality: 50, 
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
        );

        function uploadPhoto(imageURI) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1)+'.png';
            options.headers = {
                Connection: "close"
            }

            var params = new Object();
            params.dest = $scope.nmblisId;
            params.folder = "meta";

            options.params = params;

            var ft = new FileTransfer();
            ft.upload(imageURI, encodeURI("http://nmblis.com/php/upload_file.php"), win, fail, options);

            function win(r) {
                $scope.$apply(function () {
                   $scope.nmblis._meta.url.value = imageURI.substr(imageURI.lastIndexOf('/')+1)+'.png'; 
                });
            }

            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }

        }
    }

    $scope.flipsideBgUpload = function() {

    navigator.camera.getPicture(uploadPhoto, function(message) { alert('get picture failed'); },
        { quality: 50, 
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
        );

        function uploadPhoto(imageURI) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1)+'.png';
            options.headers = {
                Connection: "close"
            }

            var params = new Object();
            params.dest = $scope.nmblisId;
            params.folder = "flipsidebg";

            options.params = params;

            var ft = new FileTransfer();
            ft.upload(imageURI, encodeURI("http://nmblis.com/php/upload_file.php"), win, fail, options);

            function win(r) {
                $scope.$apply(function () {
                   $scope.nmblis.flipside.background.url = imageURI.substr(imageURI.lastIndexOf('/')+1)+'.png'; 
                });
            }

            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }
        }
    }

    $scope.flipsideLogoUpload = function() {

    navigator.camera.getPicture(uploadPhoto, function(message) { alert('get picture failed'); },
        { quality: 50, 
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
        );

        function uploadPhoto(imageURI) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1)+'.png';
            options.headers = {
                Connection: "close"
            }

            var params = new Object();
            params.dest = $scope.nmblisId;
            params.folder = "flipsidelogo";

            options.params = params;

            var ft = new FileTransfer();
            ft.upload(imageURI, encodeURI("http://nmblis.com/php/upload_file.php"), win, fail, options);

            function win(r) {
                $scope.$apply(function () {
                   $scope.nmblis.flipside.logo.url = imageURI.substr(imageURI.lastIndexOf('/')+1)+'.png'; 
                });
            }

            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }

        }
    }        

}])