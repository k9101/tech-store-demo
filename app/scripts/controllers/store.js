'use strict';

/**
 * @ngdoc function
 * @name salonApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the salonApp
 */
angular.module('salonApp')
  .controller('StoreCtrl', function ($scope, categories) {
    $scope.categories = categories;
  });
