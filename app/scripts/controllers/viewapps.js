'use strict';

/**
 * @ngdoc function
 * @name teemOpsApp.controller:ViewAppsCtrl
 * @description
 * # ViewAppsCtrl
 * Controller of the teemOpsApp
 */
angular.module('teemOpsApp')
  .controller('ViewAppsCtrl', function ($scope, appManagerService) {
  	var self = this;

  	$scope.debug = false;
  	
    $scope.storedApps = [];

    self.init = function(){
    	$scope.storedApps = appManagerService.allApps();
    };

    $scope.delete = function(appId){
    	appManagerService.removeApp(appId);
	    $scope.storedApps = appManagerService.allApps();
    };

    $scope.copy = function(appId){
    	var appToCopy = appManagerService.getApp(appId);
    	appToCopy.appName += '-copy';

    	appManagerService.addApp(appToCopy); 
    	$scope.storedApps = appManagerService.allApps();
    };

    self.init();
});
