exports.up = function (knex) {
  return knex.schema.createTable('product', (table) => {
    table.string('product_id').primary().notNullable();
    table.string('store_id').notNullable();
    table.foreign('store_id').references('store_id').inTable('Store').onDelete('cascade');
    table.string('product_name').notNullable();
    table.float('price').notNullable();
    table.float('discount').notNullable();
    table.string('description').notNullable();
    table.string('img').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('product');
};
