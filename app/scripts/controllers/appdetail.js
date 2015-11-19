'use strict';

/**
 * @ngdoc function
 * @name teemOpsApp.controller:AppDetailCtrl
 * @description
 * # AppDetailCtrl
 * Controller of the teemOpsApp
 */
angular.module('teemOpsApp')
  .controller('AppDetailCtrl', function ($scope, $timeout, $state, $stateParams, $filter, $location, $anchorScroll, appManagerService) {
  	var self = this;

  	$scope.currentApp = null;
    $scope.editModes = {
      'deploy' : false,
      'infrastructure' : false,
      'availability' : false,
      'sourceCode' : false
    };
    $scope.processing = false;

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

    $scope.editModeEnabled = function(section){
        return $scope.editModes[section];
    };

    $scope.saveApp = function(section){

        $scope.processing = true;

        $timeout(function() {
          var success = appManagerService.saveApp($scope.currentApp);
          $scope.editModes[section] = !success;
           $scope.processing = false;
        }, 10);
    };

    $scope.delete = function(appId){
      appManagerService.removeApp(appId);

      $state.go('apps');
    };

    self.init();
});
