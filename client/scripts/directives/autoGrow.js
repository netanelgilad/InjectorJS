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
    link : function (scope, element, attrs, ngModel) {
      scope.$watch('model', function() {
        var size;
        if (!ngModel.$viewValue) {
          if (attrs.placeholder) {
            size = attrs.placeholder.length;
          }
        }
        else {
          size = ngModel.$viewValue.length;
        }


        element.attr('size', size);
      });
    }
  };
});