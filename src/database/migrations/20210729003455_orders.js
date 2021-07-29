exports.up = function (knex) {
  return knex.schema.createTable('Orders', (table) => {
    table.string('order_id').primary().notNullable();
    table.string('store_id').notNullable();
    table.foreign('store_id').references('store_id').inTable('Store');
    table.string('user_id').notNullable();
    table.foreign('user_id').references('user_id').inTable('Users');
    table.string('product_name').notNullable();
    table.float('total_price').notNullable();
    table.string('payment_type').notNullable();
    table.string('address_id').notNullable();
    table.string('status').notNullable();
    table.int('payment_installments').notNullable();
    table.string('delivery_method').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('orders');
};
