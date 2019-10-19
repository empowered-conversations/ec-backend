const testRoute = require('express').Router();

function test(req, res) {
  res.send(`It's Alive1`);
}

testRoute.get('/', test);

module.exports = testRoute;
