const db = require('../dbConfig');

function findAll() {
  return db('users');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);
  return findBy({ id });
}

async function update(id, user) {
  await db('users')
    .where({ id })
    .update(user);
  return findBy({ id });
}

function remove(id) {
  return db('users')
    .where({ id })
    .del();
}

module.exports = { findAll, findBy, add, update, remove };
