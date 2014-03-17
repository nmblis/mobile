'use strict';
 
angular.module('nmblisApp.services.add', ['nmblisApp.services.firebaseservice'])
  .factory('Add', ['angularFire','angularFireCollection', 'FirebaseService', 
    function(angularFire, angularFireCollection, FirebaseService) {
      return { 
        save: function(userId, nmblisId, savingCopy) {
          return FirebaseService.users().child('/'+userId+'/acquired/'+nmblisId).update(savingCopy);
        }
      , update: function(userId, nmblisId, creatorId, latLon, date) {
          return FirebaseService.users().child('/'+userId+'/acquired/'+nmblisId+'/_meta/').update({"Creator": creatorId, "Location": latLon, "Date": date});
        }


    }
  }])