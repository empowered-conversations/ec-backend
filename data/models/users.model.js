const db = require('../dbConfig');

function findAll() {
  return db('users');
}

function findBy(filter) {
  return db('users')
    .where(filter)
    .returning('*');
}

function add(user) {
  return db('users')
    .insert(user)
    .returning('*');
}

function update(id, user) {
  db('users')
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
