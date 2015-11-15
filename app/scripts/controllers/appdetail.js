'use strict';

/**
 * @ngdoc function
 * @name teemOpsApp.controller:AppDetailCtrl
 * @description
 * # AppDetailCtrl
 * Controller of the teemOpsApp
 */
angular.module('teemOpsApp')
  .controller('AppDetailCtrl', function ($scope, appManagerService, $stateParams, $filter, $location, $anchorScroll) {
  	var self = this;

  	$scope.selectedApp = null;

    self.init = function(){
    	$scope.selectedApp = appManagerService.getApp($stateParams.id);
    };

    $scope.scrolltoHref = function (id){
        // set the location.hash to the id of the element to scroll to.
        $location.hash(id);
        // call $anchorScroll()
        $anchorScroll();
    };

    self.init();
});
