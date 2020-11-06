
(function() {
  'use strict';
  angular.module('MsgApp', [])
  .controller('MsgController', MsgController)
  .filter('loves', lovesFilter)
  .filter('truth', TruthFilter);

  MsgController.$inject = ['$scope', 'lovesFilter'];
  
    function MsgController($scope, lovesFilter) {
      $scope.name = "Mohammad";
      $scope.stateOfBeing ="hungry";
      $scope.cookieCost = .45;

      $scope.sayMessage = function () {
        var msg = "Awad likes to eat healthy food at night!";
        return msg;
      };

      $scope.sayLovesMessage = function () {
        var msg = "Awad likes to eat healthy food at night!";
        msg = lovesFilter(msg);
        return msg;
      };

      $scope.feedAwad = function () {
        $scope.stateOfBeing = "fed";
      };
    }

    function lovesFilter() {
      return function(input) {
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
      }
    }

    function TruthFilter() {
      return function (input, target, replace) {
        input = input || "";
        input = input.replace(target, replace);
        return input;
      }
    }
})();
