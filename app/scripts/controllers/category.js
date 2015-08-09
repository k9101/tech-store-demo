'use strict';

/**
 * @ngdoc function
 * @name salonApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the salonApp
 */
angular.module('salonApp')
  .controller('CategoryCtrl', function ($scope, category, products) {
    $scope.products = products;
    $scope.category = category;
  });
