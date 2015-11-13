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

      storedApps = [];
      
    	var keys = localStorageService.keys();

    	angular.forEach(keys, function(appId){
    		var app = localStorageService.get(appId);
    		storedApps.push(app);
    	});
    };


  	this.addApp = function (app){
      app.appId = 'teemOpsApp-' + app.appName.replace('', '-');
  		localStorageService.set(app.appId, app);

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