var Hapi = require('hapi');

var server = new Hapi.Server(8000);


server.route({
  method: 'GET',
  path: '/{params*}',
  handler: {
     directory: {
        path: './public'
     }
  }
});


server.route({
  method: 'GET',
  path: '/hello',
  handler: function(request, reply) {
     reply('Hello World!');
  }
});

server.start(function() {
  console.log('Server listening on ', server.info.uri);
});
