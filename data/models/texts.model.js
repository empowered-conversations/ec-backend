const db = require('../dbConfig');

function findAll () {
	return db('texts');
}

function findBy ( id) {
	return db('texts').select("texts.friendsName", "texts.friendsNumber").where({ "texts.id" : id }).returning();
}

function add (text) {
	return db('texts').insert(text).returning('*');
}

function update (id, text) {
	db('texts').where({ id }).update(text);
	return findBy({ id });
}

function remove (id) {
	return db('texts').where({ id }).del();
}

module.exports = { findAll, findBy, add, update, remove };
