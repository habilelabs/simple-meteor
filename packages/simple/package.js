Package.describe({
  name: 'morwal89:simple',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'This is sample meteor package for tutorial',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/habilelabs/simple-meteor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  api.use('ecmascript');
  api.mainModule('simple.js');
  api.use("templating", "client");
  api.addFiles("simple-template.html", "client");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('morwal89:simple');
  api.mainModule('simple-tests.js');
});
