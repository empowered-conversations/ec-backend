const testRoute = require('./test/test.routes');

module.exports = server => {
  server.use('/', testRoute);
};
