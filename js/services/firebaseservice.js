'use strict';
 
angular.module('nmblisApp.services.firebaseservice', [])
  .factory('FirebaseService', ['FBURL', 'Firebase',
    function(FBURL, Firebase) {
      return {
        users: function() {
          return new Firebase(FBURL+'/users');
        }
      , templates: function() {
          return new Firebase(FBURL+'/templates');
        }
      , public: function() {
          return new Firebase(FBURL+'/public');
        }
  	}
  }])