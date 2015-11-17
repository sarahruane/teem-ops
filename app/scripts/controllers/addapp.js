'use strict';

/**
 * @ngdoc function
 * @name teemOpsApp.controller:AddAppCtrl
 * @description
 * # AddAppCtrl
 * Controller of the teemOpsApp
 */
angular.module('teemOpsApp')
  .controller('AddAppCtrl', function ($scope, $timeout, appManagerService) {
    
    var self = this;

    $scope.processing = false;
    $scope.debug = false; 

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

        $scope.processing = true;
      

        $timeout(function() {

    			appManagerService.addApp($scope.app);
    			$scope.storedApps = appManagerService.allApps();
          $scope.processing = false;
        }, 100);
  		}

  	};

  	self.init();

  });
