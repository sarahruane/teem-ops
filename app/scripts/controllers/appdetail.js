'use strict';

/**
 * @ngdoc function
 * @name teemOpsApp.controller:AppDetailCtrl
 * @description
 * # AppDetailCtrl
 * Controller of the teemOpsApp
 */
angular.module('teemOpsApp')
  .controller('AppDetailCtrl', function ($scope, $stateParams, $filter) {
  	var self = this;

  	$scope.selectedApp = null;

    self.init = function(){
    	var matches = $filter('filter')($scope.storedApps, { appId : $stateParams.id });

    	if(matches && matches.length > 0)
    	{
    		$scope.selectedApp = matches[0];
    	}

    };

    self.init();
});
