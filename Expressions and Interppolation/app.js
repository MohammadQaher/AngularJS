
(function() {
  'use strict';
  angular.module('MsgApp', [])

  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope', '$filter'];
  
    function MsgController($scope) {
      $scope.name = "Mohammad";

      $scope.sayMessage = function () {
        return "Awad loves Marka";
      };
    }

})();
