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
          '<button class="btn btn-secondary" data-ng-hide="editEnabled" data-ng-click="toggle({section: section})" data-ng-cloak>Edit</button>' +
          '<div class="button-group" data-ng-cloak data-ng-show="editEnabled">' +
            '<button class="btn btn-primary" data-ng-click="save({section: section})">Save changes</button>' +
            '<button class="btn btn-secondary" data-ng-click="toggle({section: section})">Cancel</button>' +
          '</div>' +
        '</div>'
    };
  });