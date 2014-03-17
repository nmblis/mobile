'use strict';

angular.module('nmblisApp.controllers.header', ['nmblisApp.services.login'])
  .controller('HeaderController', ['$scope', '$rootScope', '$timeout', '$location', 'loginService', 'angularFire', 'FBURL', 
    function($scope, $rootScope, $timeout, $location, loginService, angularFire, FBURL) {

      $scope.$on('angularFireAuth:login', function() { 
        if ($scope.disassociateUserData) { 
            $scope.disassociateUserData();
        } 
        angularFire(new Firebase(FBURL+'/users/'+$scope.auth.id), $scope, 'user').then(function (disassociate) { 
            $scope.disassociateUserData = disassociate; 
        }); 
      });

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
      , {
          "title": "How To",
          "link": "/howto"
        }
      , {
          "title": "FAQ",
          "link": "/faq"
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



      $scope.collapse = function() {
        angular.element('.nmblis-navbar').removeClass('collapse in');
        angular.element('.nmblis-navbar').addClass('collapse'); 
      };

$(function() {
  var pushy = $('.pushy'), //menu css class
    body = $('body'),
    container = $('#container'), //container css class
    push = $('.push'), //css class to add pushy capability
    siteOverlay = $('.site-overlay'), //site overlay
    pushyClass = "pushy-left pushy-open", //menu position & menu open class
    pushyActiveClass = "pushy-active", //css class to toggle site overlay
    containerClass = "container-push", //container open class
    pushClass = "push-push", //css class to add pushy capability
    menuBtn = $('.menu-btn, .pushy a'), //css classes to toggle the menu
    menuSpeed = 200, //jQuery fallback menu speed
    menuWidth = pushy.width() + "px"; //jQuery fallback menu width

  function togglePushy(){
    body.toggleClass(pushyActiveClass); //toggle site overlay
    pushy.toggleClass(pushyClass);
    container.toggleClass(containerClass);
    push.toggleClass(pushClass); //css class to add pushy capability
  }

  function openPushyFallback(){
    body.addClass(pushyActiveClass);
    pushy.animate({left: "0px"}, menuSpeed);
    container.animate({left: menuWidth}, menuSpeed);
    push.animate({left: menuWidth}, menuSpeed); //css class to add pushy capability
  }

  function closePushyFallback(){
    body.removeClass(pushyActiveClass);
    pushy.animate({left: "-" + menuWidth}, menuSpeed);
    container.animate({left: "0px"}, menuSpeed);
    push.animate({left: "0px"}, menuSpeed); //css class to add pushy capability
  }

  if(Modernizr.csstransforms3d){
    //toggle menu
    menuBtn.click(function() {
      togglePushy();
    });
    //close menu when clicking site overlay
    siteOverlay.click(function(){ 
      togglePushy();
    });
  }else{
    //jQuery fallback
    pushy.css({left: "-" + menuWidth}); //hide menu by default
    container.css({"overflow-x": "hidden"}); //fixes IE scrollbar issue

    //keep track of menu state (open/close)
    var state = true;

    //toggle menu
    menuBtn.click(function() {
      if (state) {
        openPushyFallback();
        state = false;
      } else {
        closePushyFallback();
        state = true;
      }
    });

    //close menu when clicking site overlay
    siteOverlay.click(function(){ 
      if (state) {
        openPushyFallback();
        state = false;
      } else {
        closePushyFallback();
        state = true;
      }
    });
  }
});






      
	  
}])