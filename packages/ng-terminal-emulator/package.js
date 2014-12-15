Package.describe({
  name: 'ng-terminal-emulator',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0.1');
  api.use('urigo:angular@0.5.7');
  api.addFiles('ng-terminal-emulator.js', 'client');
  api.addFiles('ng-terminal-emulator.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ng-terminal-emulator');
  api.addFiles('ng-terminal-emulator-tests.js');
});
