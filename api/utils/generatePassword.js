const bcrypt = require('bcryptjs');

function generatePassword(password) {
  return bcrypt.hashSync(password, 10);
}

module.exports = generatePassword;
