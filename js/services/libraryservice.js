'use strict';
 
angular.module('nmblisApp.services.library', ['nmblisApp.services.firebaseservice'])
  .factory('Library', ['angularFire','angularFireCollection', 'FirebaseService', 
    function(angularFire, angularFireCollection, FirebaseService) {
      return { 
        acquired: function(userId) {
          return angularFireCollection(FirebaseService.users().child('/'+userId+'/acquired/'));
        }   
      , archive: function(userId) {
          return angularFireCollection(FirebaseService.users().child('/'+userId+'/created/'));
        }       
    }
  }])