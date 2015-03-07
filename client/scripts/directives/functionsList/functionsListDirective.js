/**
 * Created by netanel on 13/12/14.
 */
injector.directive('functionsList', function() {
  return {
    restrict : 'E',
    templateUrl : 'client/scripts/directives/functionsList/functionsList.ng.html',
    controller : function($scope, $collection) {
      $collection(functions).bind($scope, 'functions');
    }
  }
});