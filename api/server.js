const express = require('express');
const middleware = require('./utils/middleware');
const routes = require('./routes/routes.index');

const server = express();
middleware(server);
routes(server);
module.exports = server;
