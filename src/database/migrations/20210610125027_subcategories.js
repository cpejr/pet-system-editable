exports.up = function (knex) {
  return knex.schema.createTable('Subcategories', (table) => {
    table.string('subcategory_id').primary().notNullable();
    table.string('name').notNullable();
    table.string('category_id').notNullable();
    table.foreign('category_id').references('category_id').inTable('Categories').onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Subcategories');
};
