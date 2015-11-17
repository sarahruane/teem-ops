'use strict';

/**
 * @ngdoc function
 * @name teemOpsApp.controller:AddAppCtrl
 * @description
 * # AddAppCtrl
 * Controller of the teemOpsApp
 */
angular.module('teemOpsApp')
  .controller('AddAppCtrl', function ($scope, appManagerService) {
    
    var self = this;

    $scope.debug = true; 

    $scope.app = {
    	appName: null,
    	environment: null,
    	environmentType: null,
    	database: null,
    	caching: null,
    	sourceCode: {
    		source: null,
    		authenticated: null,
    		path: null
    	}
    };

    $scope.storedApps = [];

    self.init = function(){
    	$scope.storedApps = appManagerService.allApps();
    };

    $scope.submit = function(isValid){

  		if(isValid) {
  			console.log($scope.app);

  			appManagerService.addApp($scope.app);

  			$scope.storedApps = appManagerService.allApps();
  		}

  	};

  	self.init();

  });
