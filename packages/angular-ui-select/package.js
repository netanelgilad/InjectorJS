Package.describe({
  name: 'angular-ui-select',
  version: '0.9.4',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrap for angular-ui-select',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('angularjs:angular');
  api.addFiles('select.js', 'client');
  api.addFiles('select.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('angular-ui-select');
  api.addFiles('angular-ui-select-tests.js');
});
