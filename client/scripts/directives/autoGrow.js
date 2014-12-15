/**
 * Created by netanel on 14/12/14.
 */
injector.directive('autoGrow', function() {
  return {
    restrict : 'A',
    require: 'ngModel',
    scope : {
      model : '=ngModel'
    },
    link : function (scope, element, attrs) {
      scope.$watch('model', function(newValue) {
        if (!newValue) {
          if (attrs.placeholder) {
            newValue = attrs.placeholder;
          }
        }

        element.attr('size', newValue.length);
      });
    }
  };
});