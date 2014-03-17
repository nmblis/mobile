'use strict';
 
angular.module('nmblisApp.services.home', ['nmblisApp.services.firebaseservice'])
  .factory('Home', ['angularFire','angularFireCollection', 'FirebaseService', 
    function(angularFire, angularFireCollection, FirebaseService) {
      return { 
        created: function(userId) {
          return angularFireCollection(FirebaseService.users().child('/'+userId+'/created/'));
        }   
      , archive: function(userId) {
          return angularFireCollection(FirebaseService.users().child('/'+userId+'/created/'));
        }       
      , save: function(userId, nmblisId, nmblis) {
         return FirebaseService.users().child('/'+userId+'/created/'+nmblisId).update(nmblis);
        }


    }
  }])