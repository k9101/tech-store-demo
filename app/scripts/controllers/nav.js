'use strict';

angular.module('salonApp')
  .factory('navFactory', function(MoltinAuth, $q){//Factory to fill navbar with categories
    var categories = function(){
      var deferred = $q.defer();
      $q.when(MoltinAuth).then(function(moltin){
        moltin.Category.List(null, function(categories){
          deferred.resolve(categories);
        });
      });

      return deferred.promise;
    };

    return {
      categories: categories
    };
  })
  .controller('navCtrl', function ($scope, $location, navFactory) {

    //set scope categories
    navFactory.categories().then(function(categories){
      $scope.categories = categories;
    });

    //set the active nav tab
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };



  });
