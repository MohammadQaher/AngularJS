
(function() {
  'use strict';
  angular.module('MsgApp', [])

  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope', '$filter'];
  
    function MsgController($scope, $filter) {
      $scope.name = "Mohammad";
      $scope.stateOfBeing ="hungry";
      $scope.cookieCost = .45;

      $scope.sayMessage = function () {
        var msg = "Awad loves Marka";
        var output = $filter('uppercase')(msg);
        return output;
      };

      $scope.feedAwad = function () {
        $scope.stateOfBeing = "fed";
      };
    }

})();
