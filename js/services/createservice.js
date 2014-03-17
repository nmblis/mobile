'use strict';
 
angular.module('nmblisApp.services.create', ['nmblisApp.services.firebaseservice'])
  .factory('Create', ['angularFire','angularFireCollection', 'FirebaseService', 
    function(angularFire, angularFireCollection, FirebaseService) {
      return { 
        allAcquired: function(userId) {
          return angularFireCollection(FirebaseService.users().child('/'+userId+'/acquired/'));
        }           
      , allTemplates: function() {
          return angularFireCollection(FirebaseService.templates());
        }     
      , card: function(userId) {
         return FirebaseService.users().child('/'+userId+'/created/').push({"Created": Firebase.ServerValue.TIMESTAMP}).name();
        }
      , save: function(userId, nmblisId, nmblis) {
         return FirebaseService.users().child('/'+userId+'/created/'+nmblisId).update(nmblis);
        }
      , metaClear: function(userId, nmblisId) {
         return FirebaseService.users().child('/'+userId+'/created/'+nmblisId+'/_meta/').remove();   
      }  
      }
    }])