'use strict';

angular
.module('ShoppingCart')
.directive('product', function () {
  return {
    restrict: 'E',
    templateUrl: 'shoppingCart/table/tableComponents/product/product.tpl.html'
  }
});
