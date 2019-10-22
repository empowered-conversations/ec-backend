const db = require('../dbConfig');

function findAll() {
	return db('texts');
}

function findBy(filter) {
	return db('texts').where(filter).returning('*');
}

function add(text) {
	return db('texts').insert(text).returning('*');
}

function update(id, text) {
	db('texts').where({ id }).update(text);
	return findBy({ id });
}

function remove (id) {
	return db('texts').where({ id }).del();
}

module.exports = { findAll, findBy, add, update, remove };
