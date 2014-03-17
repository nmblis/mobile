'use strict';
 
angular.module('nmblisApp.controllers.splash', [])
  .controller('SplashController', ['$scope','FBURL', 'angularFire', 'angularFireCollection',
    function($scope, FBURL, angularFire, angularFireCollection) {

    $scope.nmblisId = "-JGVbPaW4NWL9ri8U28v"

    $scope.flipsideShow = function() {
      angular.element('#flipside').addClass('nmblis-onTop');
      $scope.flipShow = false;
    };

    $scope.flipsideHide = function() {
      angular.element('#flipside').removeClass('nmblis-onTop');
      $scope.flipShow = true;
    };

    $scope.nmblis = {
      "flipside" : {
        "text" : {
          "fontSize" : 29,
          "fontColor" : "#ffffff",
          "y" : 245,
          "value" : "judd@nmblis.com",
          "font" : "Droid Sans",
          "x" : 32
        },
        "activated" : "yes",
        "side" : "b",
        "logo" : {
          "url" : "hippo.gif",
          "y" : 15,
          "value" : "Logo",
          "x" : -2
        },
        "background" : {
          "color" : "#000000",
          "url" : "",
          "value" : "Background"
        }
      },
      "extra" : [ {
        "fontSize" : 288,
        "fontColor" : "#ffffff",
        "y" : -72,
        "value" : "jh",
        "font" : "Playfair Display",
        "deleteable" : "yes",
        "x" : 18
      }, {
        "fontSize" : 15,
        "fontColor" : "#ffffff",
        "y" : 132,
        "value" : "judd@nmblis.com",
        "font" : "Lato",
        "deleteable" : "yes",
        "x" : 300
      }, {
        "fontSize" : 14,
        "fontColor" : "#ffffff",
        "y" : 154,
        "value" : "(415) 937-0590",
        "font" : "Lato",
        "deleteable" : "yes",
        "x" : 300
      } ],
      "_meta" : {
        "linkedin" : {
          "value" : ""
        },
        "flickr" : {
          "value" : ""
        },
        "published" : {
          "value" : "no"
        },
        "url" : {
          "value" : "judd.png"
        },
        "twitter" : {
          "value" : "http://twitter.com/nmblis"
        },
        "instagram" : {
          "value" : "http://instagram.com/nmblis"
        },
        "shareable" : {
          "value" : "yes"
        },
        "archive" : {
          "value" : "no"
        },
        "googleplus" : {
          "value" : "https://www.facebook.com/pages/Nmblis/601154903309860"
        },
        "pinterest" : {
          "value" : ""
        },
        "facebook" : {
          "value" : "http://www.facebook.com/pages/Nmblis/601154903309860"
        },
        "tumblr" : {
          "value" : ""
        },
        "clonable" : {
          "value" : "yes"
        }
      },
      "_basics" : {
        "company" : {
          "textAlign" : "left",
          "fontSize" : 15,
          "fontColor" : "#ffffff",
          "y" : 113,
          "value" : "Nmblis",
          "font" : "Lato",
          "x" : 369
        },
        "name" : {
          "last" : "Hendrix",
          "fontSize" : 15,
          "fontColor" : "#000000",
          "y" : 93,
          "font" : "Lato",
          "x" : 300,
          "archived" : "no",
          "first" : "Judd"
        },
        "logo" : {
          "url" : "",
          "y" : 170,
          "value" : "Logo",
          "x" : 132
        },
        "title" : {
          "fontSize" : 15,
          "fontColor" : "#000000",
          "y" : 113,
          "value" : "Ingenieur,",
          "font" : "Lato",
          "x" : 300
        },
        "background" : {
          "color" : "#f93a32",
          "url" : "",
          "value" : "Background"
        }
      },
      "Created" : 1393190349349
    }


}])