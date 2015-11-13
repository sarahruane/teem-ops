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

  	$scope.debug = true;
  	
    $scope.storedApps = [];

    self.init = function(){
    	$scope.storedApps = appManagerService.allApps();
    };

    self.init();
});
