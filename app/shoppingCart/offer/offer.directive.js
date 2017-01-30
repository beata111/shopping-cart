'use strict';

angular
.module('ShoppingCart')
.directive('offer', function () {
  return {
    restrict: 'E',
    templateUrl: 'shoppingCart/offer/offer.tpl.html'
  }
});
