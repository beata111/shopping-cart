'use strict';

angular
.module('ShoppingCart')
.directive('offerTileOverview', function () {
  return {
    restrict: 'E',
    templateUrl: 'shoppingCart/offer/offerTile/offerTileOverview/offerTileOverview.tpl.html',
    scope: {
      offer: '=',
      active: '='
    }
  };
});
