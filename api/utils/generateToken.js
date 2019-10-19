const jwt = require('jsonwebtoken');

const secrets = process.env.SECRETS || 'Testing';

module.exports = data => {
  const payload = { id: data.id, username: data.username };
  const secret = secrets;
  const options = { expiresIn: '1d' };
  return jwt.sign(payload, secret, options);
};
