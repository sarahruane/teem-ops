'use strict';

/**
 * @ngdoc function
 * @name teemOpsApp.controller:appManagerService
 * @description
 * # appManagerService
 * Controller of the teemOpsApp
 */

angular.module('teemOpsApp')
  .service('appManagerService', function(localStorageService){

  	var storedApps = [];

  	var retrieveAllApps = function(){
    	var keys = localStorageService.keys();

    	angular.forEach(keys, function(appId){
    		var app = localStorageService.get(appId);
    		storedApps.push({ appId: appId, app: app });
    	});
    };


  	this.addApp = function (app){
  		localStorageService.set('app-' + app.appName, app);

  	};

  	this.removeApp = function (appId){
  		console.log('Remove app: ' + appId);
  	};

  	this.stopApp = function(appId){
  		console.log('Stop app: ' + appId);
  	};

  	this.allApps = function(){
  		retrieveAllApps();
  		return storedApps;
  	};
});