'use strict';

/**
 * @ngdoc function
 * @name salonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the salonApp
 */
angular.module('salonApp')
  .controller('MainCtrl', function ($scope, products) {
    $scope.products = products;
  });
