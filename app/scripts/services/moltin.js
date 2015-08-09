'use strict';

angular.module('salon.moltin', [])
  .factory('MoltinAuth', function($q){

    var deferred = $q.defer();

    var moltin = new Moltin({publicId: '2b2zKJB3EgcRvoFRANYRn7ILY6jlL1AuokRXTDoa'});
    moltin.Authenticate(function() {

      // Make your calls here
      deferred.resolve(moltin);
    });

    return deferred.promise;

  });
