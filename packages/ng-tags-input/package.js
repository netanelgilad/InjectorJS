Package.describe({
  name: 'ng-tags-input',
  version: '2.1.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('angularjs:angular');
  api.addFiles('ng-tags-input.min.js', 'client');
  api.addFiles('ng-tags-input.min.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ng-tags-input');
  api.addFiles('ng-tags-input-tests.js');
});
