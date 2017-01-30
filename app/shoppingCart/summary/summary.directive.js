'use strict';

angular
.module('ShoppingCart')
.directive('summary', function () {
  return {
    restrict: 'E',
    templateUrl: 'shoppingCart/summary/summary.tpl.html'
  }
});
