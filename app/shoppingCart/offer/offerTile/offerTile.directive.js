'use strict';

angular
.module('ShoppingCart')
.directive('offerTile', function () {
  return {
    restrict: 'E',
    templateUrl: 'shoppingCart/offer/offerTile/offerTile.tpl.html',
    scope: {
      tile: '=',
      offers: '=',
      activeOffer: '=',
      addToCart: '&'
    },
    controller: offerTileController,
    controllerAs: '$ctrl'
  };

  function offerTileController ($scope) {

    var $ctrl = this;
    $ctrl.switchOffer = switchOffer;
    $ctrl.activeTile = 0;

    $scope.activeOffer = $ctrl.offer = $scope.tile ? $scope.offers[$scope.tile] : $scope.offers[0];

    function switchOffer(offerIndex) {
      $ctrl.activeTile = offerIndex;
      $scope.activeOffer = $scope.offers[offerIndex];
      if (!$scope.tile && $scope.tile !== 0) {
        $ctrl.offer = $scope.offers[offerIndex];
      }
    }
  }

});
