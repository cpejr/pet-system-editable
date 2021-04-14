exports.up = function (knex) {
  return knex.schema.createTable('sessions', (table) => {
    table.string('accessToken', 1000).primary().notNullable();
    table.string('user_id').notNullable();
    table.foreign('user_id').references('firebase_id').inTable('Users').onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('sessions');
};
