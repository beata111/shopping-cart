'use strict';

angular
.module('ShoppingCart')
.directive('quantityInput', function () {
  return {
    restrict: 'E',
    templateUrl: 'shoppingCart/table/tableComponents/quantityInput/quantityInput.tpl.html'
  }
});
