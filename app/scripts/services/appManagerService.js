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

        //adding some temp app data
        app.status = 'stopped';
        app.cloudprovider = 'AWS';

    		storedApps.push(app);
    	});
    };


  	this.addApp = function (app){
      app.appId = 'teemOpsApp-' + app.appName.replace('', '-');
  		localStorageService.set(app.appId, app);

  	};

  	this.removeApp = function (appId){
  		localStorageService.remove(appId);
  	};

  	this.stopApp = function(appId){
  		console.log('Stop app: ' + appId);
  	};

  	this.allApps = function(){
  		retrieveAllApps();
  		return storedApps;
  	};
});