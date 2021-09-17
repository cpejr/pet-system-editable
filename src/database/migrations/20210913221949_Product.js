exports.up = function (knex) {
  return knex.schema.createTable('Product', (table) => {
    table.uuid('product_id').primary().notNullable();
    table.string('firebase_id_store').notNullable();
    table.foreign('firebase_id_store').references('firebase_id_store').inTable('Store').onDelete('cascade');
    table.uuid('category_id').notNullable();
    table.foreign('category_id').references('category_id').inTable('Categories').onDelete('cascade');
    table.string('product_name').notNullable();
    table.float('price').notNullable();
    table.float('discount').notNullable();
    table.string('description').notNullable();
    table.string('img').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.boolean('available').notNullable();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('Product');
};
