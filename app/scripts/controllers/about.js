'use strict';

/**
 * @ngdoc function
 * @name salonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the salonApp
 */
angular.module('salonApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
