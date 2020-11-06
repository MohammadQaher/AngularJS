
(function() {
  'use strict';
  angular.module('DIApp', [])

  .controller('DIController', DIController);

  DIController.$inject = ['$scope', '$filter'];
  
    function DIController($scope,
                          $filter,
                          $injector) {
      $scope.name = "";

      $scope.upper = function () {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);

      };
      //console.log($injector.annotate(DIController));
    }


    //console.log(AnnotateMe.toString());
    //console.log(DIController.toString());
})();


/* protecting Dependency Injector with its arguments(parameters) from Minification of JS code
!function(){"use strict";function e(e,n,r){e.name="",e.upper=function()
{var r=n("uppercase");e.name=r(e.name)}}
angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
*/