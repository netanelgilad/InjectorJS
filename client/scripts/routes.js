/**
 * Created by netanel on 13/12/14.
 */
injector.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode({
    enabled : true,
    requireBase : false
  });

  $urlRouterProvider.otherwise('/functions/new');

  $stateProvider.state('main', {
    abstract : true,
    template : UiRouter.template('main.html')
  });

  $stateProvider.state('main.functions', {
    abstract : true,
    url : '/functions',
    views : {
      'left-column' : {
        template : '<functions-list />'
      },
      'right-column' : {
        template : '<div ui-view />'
      },
      'footer' : {
        template : '<functions-terminal />'
      }
    }
  });

  $stateProvider.state('main.functions.new', {
    url : '/new',
    template : '<functions-editor />',
    resolve : {
      'func' : function () {
        return {
          dependencies : []
        };
      }
    },
    controller : function($scope, func) {
      $scope.editedFunction = func;
    }
  });

  $stateProvider.state('main.functions.edit', {
    url : '/edit/:functionName',
    template : '<functions-editor />',
    resolve : {
      'func' : function ($stateParams) {
        return functions.findOne({ name : $stateParams.functionName });
      }
    },
    controller : function($scope, func) {
      $scope.editedFunction = func;
    }
  });

});