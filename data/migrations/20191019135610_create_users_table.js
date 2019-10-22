exports.up = function(knex) {
  return knex.schema
  
    .createTable('users', tbl => {
    tbl.increments();
    tbl
      .string('username', 128)
      .notNullable()
      .unique();
    tbl.string('password', 128).notNullable();
    tbl.timestamps(true, true);
  })
  .createTable('texts', tbl => {
    tbl.increments();
    tbl.string("friend's name", 40).notNullable();
    tbl.integer("friend's number", 11).notNullable()
    tbl.string("your name", 40).notNullable()
    tbl.integer("your number", 11).notNullable()
  })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('texts').dropTableIfExists('users')
};
