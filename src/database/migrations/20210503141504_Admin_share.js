exports.up = function (knex) {
  return knex.schema.createTable('Admin_share', (table) => {
    table.float('share').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Admin_share');
};
