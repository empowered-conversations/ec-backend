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
    tbl.string("friendsName", 40).notNullable();
    tbl.string("friendsNumber").notNullable()
    tbl.string("yourName", 40).notNullable()
    tbl.string("yourNumber").notNullable()
  })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('texts').dropTableIfExists('users');
};
