'use strict';

angular
.module('ShoppingCart')
.service('shoppingCartService', function () {

  var service = this;

  this.getOffer = function () {
    return [{
      name: 'Komplettlösung',
      topseller: true,
      image: 'shoppingCart/images/offerTilePhoto.JPG',
      components: ['Smartfrog App', 'Smartfrog Kamera', '24 Std. Videospeicher'],
      benefits: [
        {
          name: 'Live video rund um die Uhr',
          focus: true,
          description: ''
        }, {
          name: 'Video-Speicherung',
          focus: true,
          description: 'der jewails lezten 24 Stunden'
        }, {
          name: 'Monatlich kündbar',
          focus: false,
          description: ''
        }, {
          name: 'Keine Einrichtungskosten',
          focus: false,
          description: ''
        }, {
          name: 'Kostenloser Versand',
          focus: false,
          description: ''
        }],
      price: 4.95,
      pricePeriod: 'im Monat',
      cartImage: 'shoppingCart/images/cartItem.JPG',
      cartDescriptions:[
        'inkl. 24 Std. Video-Speicher(gratis)',
        '10% Rabatt für jede waitere Kamera'
      ]
    },{
      name: 'Kamera-Paket',
      topseller: false,
      image: 'shoppingCart/images/offerTilePhoto.JPG',
      components: ['Smartfrog App', 'Smartfrog Kamera', '4 Std. Videospeicher'],
      benefits: [
        {
          name: 'Live video rund um die Uhr',
          focus: true,
          description: ''
        }, {
          name: 'Video-Speicherung',
          focus: true,
          description: 'der jewails lezten 4 Stunden'
        }, {
          name: 'Kein Abo',
          focus: false,
          description: ''
        }, {
          name: 'Keine Einrichtungskosten',
          focus: false,
          description: ''
        }, {
          name: 'Kostenloser Versand',
          focus: false,
          description: ''
        }],
      price: 99,
      pricePeriod: 'einmalig',
      cartImage: 'shoppingCart/images/cartItem.JPG',
      cartDescriptions:[
        'inkl. 4 Std. Video-Speicher(gratis)',
        '10% Rabatt für jede waitere Kamera'
      ]
    }];
  }
});
