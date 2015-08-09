'use strict';

/**
 * @ngdoc overview
 * @name salonApp
 * @description
 * # salonApp
 *
 * Main module of the application.
 */
angular
  .module('salonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'salon.moltin'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          products: function(MoltinAuth, $q){
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin){
              moltin.Product.List({collection: '985205395230294716'}, function(products){
                deferred.resolve(products);
              });
            });

            return deferred.promise;
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        resolve: {
          categories: function(MoltinAuth, $q){
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin){
              moltin.Category.List(null, function(categories){
                deferred.resolve(categories);
              });
            });

            return deferred.promise;
          }
        }
      })
      .when('/category/:id', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        resolve: {
          category: function(MoltinAuth, $route, $q){
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin){
              moltin.Category.Get($route.current.params.id, function(category){
                deferred.resolve(category);
              });
            });

            return deferred.promise;
          },
          products: function(MoltinAuth, $route, $q){
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin){
              moltin.Product.List({category: $route.current.params.id}, function(products){
                deferred.resolve(products);
              });
            });

            return deferred.promise;
          }
        }
      })
      .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        resolve: {
          product: function(MoltinAuth, $route, $q){
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin){
              moltin.Product.Get($route.current.params.id, function(product){
                deferred.resolve(product);
              });
            });

            return deferred.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/404.html'
      });
  });
