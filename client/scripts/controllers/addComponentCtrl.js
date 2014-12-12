/**
 * Created by netanel on 12/12/14.
 */
injector.controller('AddComponentCtrl', function($scope) {
  $scope.newComponent = {
    dependencies : []
  };

  $scope.addDependency = function (name) {
    var compUser = name.split('/')[0];
    var compName = name.split('/')[1];

    $scope.newComponent.dependencies.push({
      user : compUser,
      name : compName
    });
  };

  $scope.removeDependency = function (dependency) {
    lodash.remove($scope.newComponent.dependencies, dependency);
  };

  $scope.saveComponent = function () {
    $scope.components.push($scope.newComponent);
    $scope.newComponent = {
      dependencies : []
    };
  };
});