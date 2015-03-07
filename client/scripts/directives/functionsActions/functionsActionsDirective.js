/**
 * Created by netanel on 16/12/14.
 */
injector.directive('functionsActions', function() {
  return {
    restrict: 'E',
    templateUrl : 'client/scripts/directives/functionsActions/functionsActions.ng.html',
    controller : function($scope, Functions) {
      $scope.save = function() {
        Functions.saveFunction();
      }
    }
  }
});