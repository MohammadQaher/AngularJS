
(function() {
  'use strict';
  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope) {
      $scope.name = "";
      $scope.addition = function(value) {
        if(!value) {
          return 0;
        }
        return parseFloat(value);
      };
  });
})();
