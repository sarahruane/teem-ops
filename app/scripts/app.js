'use strict';

/**
 * @ngdoc overview
 * @name teemOpsApp
 * @description
 * # teemOpsApp
 *
 * Main module of the application.
 */
angular
  .module('teemOpsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'LocalStorageModule'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('addapp', {
        url: '/addapp',
        templateUrl: 'views/addapp.html',
        controller: 'AddAppCtrl'
      })
      .state('apps', {
        url: '/apps',
        templateUrl: 'views/apps.html',
        controller: 'ViewAppsCtrl'
      })
      .state('apps.detail', {
          url: '/detail/:id',
          templateUrl: 'views/app-detail.html',
          controller: 'AppDetailCtrl'
      });
  });
