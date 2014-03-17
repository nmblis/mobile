'use strict';
 
angular.module('nmblisApp.services.archive', ['nmblisApp.services.firebaseservice'])
  .factory('Archive', ['angularFire','angularFireCollection', 'FirebaseService', 
    function(angularFire, angularFireCollection, FirebaseService) {
      return { 
        created: function(userId) {
          return angularFireCollection(FirebaseService.users().child('/'+userId+'/created/'));
        }   
    }
  }])