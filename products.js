(function(){
    var app = angular.module('store-directives', []);

    app.directive("productDescription", function() {
      return {
        restrict: 'E',
        templateUrl: "product-description.html"
      };
    });

    app.directive("productReviews", function() {
      return {
        restrict: 'E',
        templateUrl: "product-reviews.html"
      };
    });

    app.directive("productSpecs", function() {
      return {
        restrict:"A",
        templateUrl: "product-specs.html"
      };
    });

    app.directive("productTabs", function() {
      return {
        restrict: "E",
        templateUrl: "product-tabs.html",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      };
    });

    app.directive("productGallery", function() {
      return {
        restrict: "E",
        templateUrl: "product-gallery.html",
        controller: function() {
          this.current = 0;
          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };

        },
        controllerAs: "gallery"
      };
    });

    // Images Sections
    app.directive("sectionImages", function() {
      return {
        restrict: "E",
        scope: {
          store: '=store',
          gemIndex: '=gemIndex'
        },
        templateUrl: "section-images.html",
        controller: function($scope) {
          // this.gemIndex = 0;
          this.imgIndex = 0;
          // this.tab = 0;

          this.isSet = function(checkTab) {
            return $scope.gemIndex === checkTab;
          };

          this.setTab = function(activeTab) {
            // this.tab = activeTab;
            $scope.gemIndex = activeTab;
            console.log(this.gemIndex);
          };

        },
        controllerAs: "sub"
      };
    });

// Descriptions - section
    app.directive("sectionDescriptions", function() {
      return {
        restrict: "E",
        scope: {
          store: '=store',
          gemIndex: '=gemIndex'
        },
        templateUrl: "section-descriptions.html",
        controller: function($scope) {
          // this.gemIndex = 0;
          this.imgIndex = 0;
          // this.tab = 0;

          this.isSet = function(checkTab) {
            return $scope.gemIndex === checkTab;
          };

          this.setTab = function(activeTab) {
            // this.tab = activeTab;
            $scope.gemIndex = activeTab;
           
          };

        },
        controllerAs: "sub"
      };
    });

    // Specs - section
    app.directive("sectionSpecs", function() {
      return {
        restrict: "E",
        scope: {
          store: '=store',
          gemIndex: '=gemIndex'
        },
        templateUrl: "section-specs.html",
        controller: function($scope) {
          // this.imgIndex = 0;
          // this.tab = 0;
          // $scope.gemIndex = 0;

          this.isSet = function(checkTab) {
            return $scope.gemIndex === checkTab;
          };

          this.setTab = function(activeTab) {
            // this.tab = activeTab;
            $scope.gemIndex = activeTab;
            console.log($scope.gemIndex);
          };

        },
        controllerAs: "sub"
      };
    });

    // Specs - section
    app.directive("sectionReviews", function() {
      return {
        restrict: "E",
        scope: {
          store: '=store',
          gemIndex: '=gemIndex'
        },
        templateUrl: "section-reviews.html",
        controller: function($scope) {
          // this.gemIndex = 0;
          
          // this.tab = 0;
          this.review={};

          this.isSet = function(checkTab) {
            return $scope.gemIndex === checkTab;
          };

          this.setTab = function(activeTab) {
            // this.tab = activeTab;
            $scope.gemIndex = activeTab;
            console.log(this.gemIndex);
          };

          this.addReview = function(product) {
            product.push(this.review);
            this.review = {};
          };

        },
        controllerAs: "sub"
      };
    });
  })();
