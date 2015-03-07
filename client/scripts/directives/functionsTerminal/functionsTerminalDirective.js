/**
 * Created by netanel on 13/12/14.
 */
injector.directive('functionsTerminal', function() {
  return {
    restrict : 'E',
    templateUrl : 'client/scripts/directives/functionsTerminal/functionsTerminal.ng.html',
    controller : function ($scope) {
      $scope.$on('terminal-input', function (e, consoleInput) {
        var cmd = consoleInput[0];

        var output = eval(cmd.command);

        $scope.$broadcast('terminal-output', {
          output: true,
          text: [JSON.stringify(output, null, 4)],
          breakLine : false
        });
      });
    }
  };
});