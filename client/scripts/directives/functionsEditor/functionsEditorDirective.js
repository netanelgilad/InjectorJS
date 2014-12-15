/**
 * Created by netanel on 13/12/14.
 */
injector.directive('functionsEditor', function($compile) {
  return {
    restrict : 'E',
    templateUrl : 'directives/functionsEditor.html',
    controller : function($scope, $collection) {
      $collection(functions).bind($scope, 'functions', true);

      $scope.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'javascript',
        theme : 'mdn-like',
        onLoad : function (codeMirror) {
          var element = $compile('<div id="function-definition"> \
          function <input type="text" auto-grow placeholder="name" ng-model="editedFunction.name"> uses \
          <ui-select multiple ng-model="editedFunction.dependencies" theme="select2" id="dependency-selector"> \
          <ui-select-match placeholder="dependencies">[[$item.name]]</ui-select-match> \
          <ui-select-choices repeat="func.name as func in functions | filter:$select.search"> \
            [[func.name]] \
          </ui-select-choices> \
          </ui-select> \
          </div>')($scope);
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

      $scope.saveFunction = function () {
        if (!lodash.contains($scope.functions, $scope.editedFunction)) {
          $scope.functions.push($scope.editedFunction);
        }
      };
    }
  };
});