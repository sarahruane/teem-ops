'use strict';

/**
 * @ngdoc function
 * @name teemOpsApp.controller:editModePanel
 * @description
 * # editModePanel
 * Directive to display a edit button toggled with save/cancel buttons
 */

angular.module('teemOpsApp')
  .directive('editModePanel', function() {

    return {
      restrict: 'A',
      scope: {
        editEnabled: '=',
        toggle: '&',
        save: '&'
      },
      template: 
        '<div>' +
          '<button class="btn btn-edit-menu" data-ng-hide="editEnabled" data-ng-click="toggle({section: section})" data-ng-cloak>' +
            '<i class="fa fa-pencil"></i>&nbsp;Edit' + 
          '</button>' +
          '<div class="button-group" data-ng-cloak data-ng-show="editEnabled">' +
            '<button class="btn btn-edit-menu" data-ng-click="save({section: section})">' +
              '<i class="fa fa-save"></i>&nbsp;Save Changes' + 
            '</button>' +
            '<button class="btn btn-cancel" data-ng-click="toggle({section: section})">' +
              '<i class="fa fa-close"></i>&nbsp;Cancel' +
            '</button>' +
          '</div>' +
        '</div>'
    };
  });