/**
 * Created by netanel on 16/12/14.
 */
injector.service('Functions', function($meteorMethods) {
  var currentlyEditedFunction;

  this.setCurrentlyEditedFunction = function(func) {
    currentlyEditedFunction = func;
  };

  this.saveFunction = function () {
    $meteorMethods.call('saveFunction', currentlyEditedFunction);
};
});