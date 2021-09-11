exports.up = function (knex) {
  return knex.schema.createTable('orders_products', (table) => {
    table.uuid('order_id').notNullable();
    table.foreign('order_id').references('order_id').inTable('Order');
    table.string('product_id').notNullable();
    table.foreign('product_id').references('product_id').inTable('product');
    table.integer('quantify').notNullable();
    table.float('unit_price').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('orders_products');
};
