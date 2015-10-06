Package.describe({
  name: 'brajt:core', 
  summary: 'Core',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@1.2']); 
  
  var packages = [
    'brajt:lib@0.0.1'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'routes.coffee',
    'layout.tpl.jade',
    'LayoutComponent.coffee'
  ], 'client');

});