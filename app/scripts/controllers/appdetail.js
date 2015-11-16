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

  	$scope.currentApp = null;
    $scope.editModes = {
      'deploy' : false,
      'infrastructure' : false,
      'availability' : false,
      'sourceCode' : false
    };

    self.init = function(){
    	$scope.currentApp = appManagerService.getApp($stateParams.id);
    };

    $scope.scrolltoHref = function (id){
        // set the location.hash to the id of the element to scroll to.
        $location.hash(id);
        // call $anchorScroll()
        $anchorScroll();
    };

    $scope.toggleEditMode = function(section) {
      $scope.editModes[section] = !$scope.editModes[section];
    };

    $scope.saveApp = function(section){
        
        var success = appManagerService.saveApp($scope.currentApp);
        $scope.editModes[section] = !success;
    };

    self.init();
});
