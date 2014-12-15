/**
 * Created by netanel on 12/12/14.
 */
injector = angular.module('injector', [
  'ui.codemirror',
  'vtortola.ng-terminal',
  'ui.select',
  'ui.router',
  'ngAnimate'
]);

angularMeteor.requires.push('injector');