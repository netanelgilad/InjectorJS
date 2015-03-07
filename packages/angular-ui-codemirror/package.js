Package.describe({
  name: 'angular-ui-codemirror',
  version: '0.2.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrap angular-ui-codemirror',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('angularjs:angular');
  api.use('perak:codemirror');
  api.addFiles('ui-codemirror.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('angular-ui-codemirror');
  api.addFiles('angular-ui-codemirror-tests.js');
});
