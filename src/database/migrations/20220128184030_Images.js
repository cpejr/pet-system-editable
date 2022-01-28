exports.up = function (knex) {
  return knex.schema.createTable('Image', (table) => {
    table.string('image_id').primary().notNullable();
    table.string('type').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Image');
};