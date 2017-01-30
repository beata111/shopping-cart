'use strict';

angular
.module('ShoppingCart')
.controller('ShoppingCartCtrl', function ($scope, shoppingCartService) {

  var $ctrl = this;
  this.addToCart = addToCart;
  this.removeOneFromCart = removeOneFromCart;
  this.removeProductFromCart = removeProductFromCart;
  this.checkQuantity = checkQuantity;

  this.offer =  shoppingCartService.getOffer();

  this.cartItems = [{
    name: $ctrl.offer[0].name,
    price: $ctrl.offer[0].price,
    pricePeriod: $ctrl.offer[0].pricePeriod,
    image: $ctrl.offer[0].cartImage,
    cartDescriptions: $ctrl.offer[0].cartDescriptions,
    quantity: 1
  }];

  this.costs = updateCart();

  function addToCart(offer) {
    var added = false;
    $ctrl.cartItems.forEach(function (item) {
      if (item.name === offer.name){
        if (item.quantity > 0) {
          item.quantity++;
        }
        added = true;
      }
    });
    if (!added){
      $ctrl.cartItems.push({
        name: offer.name,
        price: offer.price,
        pricePeriod: offer.pricePeriod,
        image: offer.cartImage,
        cartDescriptions: offer.cartDescriptions,
        quantity: 1
      });
    }
    $ctrl.costs = updateCart();
  }

  function removeOneFromCart(offer) {
    $ctrl.cartItems.forEach(function (item, index) {
      if (item.name === offer.name){
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          $ctrl.cartItems.splice(index, 1);
        }
      }
    });
    $ctrl.costs = updateCart();
  }

  function removeProductFromCart(offer) {
    $ctrl.cartItems.forEach(function (item, index) {
      if (item.name === offer.name){
        $ctrl.cartItems.splice(index, 1);
      }
    });
    $ctrl.costs = updateCart();
  }

  function checkQuantity(cartItem) {
    if (typeof cartItem.quantity !== "number") {
      cartItem.quantity = 1;
    }
    $ctrl.costs = updateCart();
  }

  function updateCart() {
    var directCosts = 0;
    var costsPerMonth = 0;
    var delivery = 0;
    $ctrl.cartItems.forEach( function(item) {
      if (item.pricePeriod === 'einmalig') {
        directCosts += item.quantity * item.price;
      } else if (item.pricePeriod === 'im Monat') {
        costsPerMonth += item.quantity * item.price;
      }
    });
    return {
      direct : directCosts,
      perMonth : costsPerMonth,
      delivery : delivery
    }
  }

});
