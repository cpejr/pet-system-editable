
exports.up = function(knex) {
  return knex.schema.createTable('Admin_share', (table) => {
    table.float('share').primary().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Admin_share');
};
