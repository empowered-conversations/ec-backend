const express = require('express');
const middleware = require('./utils/middleware');

const server = express();
middleware(server);
server.get('/', (req, res) => res.send(`It's Alive`));

module.exports = server;
