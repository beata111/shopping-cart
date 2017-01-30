'use strict';

angular
.module('ShoppingCart')
.directive('tableMobile', function () {
  return {
    restrict: 'E',
    templateUrl: 'shoppingCart/table/tableMobile/tableMobile.tpl.html'
  }
});
