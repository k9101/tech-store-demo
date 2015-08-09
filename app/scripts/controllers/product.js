'use strict';

/**
 * @ngdoc function
 * @name salonApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the salonApp
 */
angular.module('salonApp')
  .controller('ProductCtrl', function ($scope, product) {
    $scope.product = product;
  });
