'use strict';

/**
 * @ngdoc function
 * @name teemOpsApp.controller:appManagerService
 * @description
 * # appManagerService
 * Controller of the teemOpsApp
 */

angular.module('teemOpsApp')
  .service('appManagerService', function(localStorageService, $filter){

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
  		return localStorageService.set(app.appId, app);
  	};

    this.getApp = function(appId){
      if(storedApps.length === 0) {
        retrieveAllApps();
      }

      var matches = $filter('filter')(storedApps, { appId : appId });

      if(matches && matches.length > 0)
      {
        return matches[0];
      }

      return null;
    };

  	this.removeApp = function (appId){
  		localStorageService.remove(appId);
  	};

  	this.stopApp = function(appId){
  		console.log('Stop app: ' + appId);
  	};

    this.saveApp = function(app){
      return localStorageService.set(app.appId, app);
    };

  	this.allApps = function(){
  		retrieveAllApps();
  		return storedApps;
  	};
});