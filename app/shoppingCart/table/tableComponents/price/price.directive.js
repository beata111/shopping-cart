'use strict';

angular
.module('ShoppingCart')
.directive('price', function () {
  return {
    restrict: 'E',
    templateUrl: 'shoppingCart/table/tableComponents/price/price.tpl.html'
  }
});
