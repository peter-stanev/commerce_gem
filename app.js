(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    store.gemIndex = 0;
    $http.get('store-products.json')
        .success (function (data) {
          store.products = data;

          // build lists
          store.images = [];
          store.descriptions = [];
          store.specs = [];
          store.reviews = [];
          store.gems = [];
          store.gemIndex = 0;

          for (var i = 0; i < store.products.length; i++) { 
            var product = store.products[i];
            
            store.images.push(product.images);
            store.descriptions.push(product.description);
            store.specs.push({
              shine: product.shine,
              faces: product.faces,
              rarity: product.rarity,
              color: product.color
            }); 
            store.gems.push(product.name);

            store.reviews.push(product.reviews);
          }

        })
        .error (function () {
          alert ("couldn't load data");
        });



  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();
