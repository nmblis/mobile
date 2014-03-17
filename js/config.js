'use strict';

angular.module('nmblisApp.config', [])

app.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
      .when('/splash',  { templateUrl: 'views/splash/index.html' })
      .when('/howto',  { templateUrl: 'views/splash/howto.html' })      
      .when('/login',  { templateUrl: 'views/auth/login.html' })
      .when('/register',  { templateUrl: 'views/auth/register.html' })
  	  .when('/home',            { templateUrl: 'views/home/list.html', authRequired: true })
         .when('/home/:nmblisId/view', { templateUrl: 'views/home/view.html', authRequired: true })
         .when('/home/:nmblisId/edit', { templateUrl: 'views/home/edit.html', authRequired: true })
  	  .when('/create',                 { templateUrl: 'views/create/list.html', authRequired: true })
          .when('/create/:tmplNmblisId/nmblis',                 { templateUrl: 'views/create/nmblisClone.html', authRequired: true })
          .when('/create/:tmplNmblisId/acquired',                 { templateUrl: 'views/create/acquiredClone.html', authRequired: true })      
      .when('/library/',       { templateUrl: 'views/library/list.html', authRequired: true })
         .when('/library/:nmblisId/view',  { templateUrl: 'views/library/view.html', authRequired: true })
      .when('/nmblis/:creatorId/:nmblisId/',       { templateUrl: 'views/add/view.html', authRequired: true })         
  	  .when('/archive/',                 { templateUrl: 'views/archive/list.html', authRequired: true })
      .when('/faq/',                 { templateUrl: 'views/faq/faq.html', authRequired: true })
      .otherwise(       { redirectTo: '/login' });
    }])
  
  .run(['angularFireAuth', 'FBURL', '$rootScope', 
    function(angularFireAuth, FBURL, $rootScope) {
      angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: 'auth', path: '/'});
      $rootScope.FBURL = FBURL;
    }])

  .constant('FBURL', 'nmblis.firebaseio.com')