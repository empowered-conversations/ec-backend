const express = require('express');

const server = express();
server.get('/', (req, res) => res.send(`It's Alive`));

module.exports = server;
