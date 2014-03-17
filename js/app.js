'use strict';

var app = angular.module('nmblisApp',
  [ 'nmblisApp.config'
  , 'nmblisApp.controllers.header'
  , 'nmblisApp.controllers.login'
  , 'nmblisApp.controllers.register'
  , 'nmblisApp.controllers.home'
  , 'nmblisApp.controllers.create' 
  , 'nmblisApp.controllers.library'
  , 'nmblisApp.controllers.add'  
  , 'nmblisApp.controllers.archive'
  , 'nmblisApp.controllers.splash'
  , 'nmblisApp.controllers.edit'
  , 'nmblisApp.controllers.pushmenu' 
  , 'firebase'
  , 'ui.bootstrap'
  , 'ngRoute'
  , 'ngSanitize'
  , 'ngAnimate'
  , 'angularFileUpload'
  ]
  )