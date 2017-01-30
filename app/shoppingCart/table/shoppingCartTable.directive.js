'use strict';

angular
.module('ShoppingCart')
.directive('shoppingCartTable', function () {
  return {
    restrict: 'E',
    templateUrl: 'shoppingCart/table/shoppingCartTable.tpl.html'
  }
});
