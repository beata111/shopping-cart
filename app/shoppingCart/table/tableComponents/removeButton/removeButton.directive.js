'use strict';

angular
.module('ShoppingCart')
.directive('removeButton', function () {
  return {
    restrict: 'E',
    templateUrl: 'shoppingCart/table/tableComponents/removeButton/removeButton.tpl.html'
  }
});
