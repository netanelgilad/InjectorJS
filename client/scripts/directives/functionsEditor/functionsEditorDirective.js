/**
 * Created by netanel on 13/12/14.
 */
injector.directive('functionsEditor', function($compile) {
  return {
    restrict : 'E',
    templateUrl : 'client/scripts/directives/functionsEditor/functionsEditor.ng.html',
    controller : function($scope, $meteorCollection, $templateCache, Functions) {
      $scope.functions = $meteorCollection(functions);

      Functions.setCurrentlyEditedFunction($scope.editedFunction);

      $scope.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'javascript',
        theme : 'mdn-like',
        onLoad : function (codeMirror) {
          var element = $compile($templateCache.get('client/scripts/directives/functionsEditor/function-definition.ng.html'))($scope);
          codeMirror.addLineWidget(0, element[0], {
            coverGutter : false,
            noHScroll : true,
            above : true
          });
        }
      };

      $scope.addDependency = function (name) {
        $scope.editedFunction.dependencies.push(name);
      };

      $scope.removeDependency = function (dependency) {
        lodash.remove($scope.editedFunction.dependencies, dependency);
      };
    }
  };
});