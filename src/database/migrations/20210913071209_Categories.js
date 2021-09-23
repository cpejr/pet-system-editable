exports.up = function (knex) {
  return knex.schema.createTable('Categories', (table) => {
    table.uuid('category_id').primary().notNullable();
    table.string('name').notNullable();
    table.string('img').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Categories');
};
