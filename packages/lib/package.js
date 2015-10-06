Package.describe({
  name: 'brajt:lib', 
  summary: 'Lib',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@1.2']); 
  
  var packages = [
    'session',
    'templating',
    'underscore',
    'coffeescript',
    'mquandalle:jade@0.4.3_1',
    'kadira:flow-router@2.6.2',
    'kadira:blaze-layout@2.1.0',
    'peerlibrary:blaze-components@0.13.0'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'namespace.coffee',
  ], ['client', 'server']);

  api.export([
    'Brajt'
  ], ['client', 'server']);
});