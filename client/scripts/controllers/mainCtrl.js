/**
 * Created by netanel on 12/12/14.
 */
injector.controller('MainCtrl', function($scope, $collection) {
  $collection(components).bind($scope, 'components');
});