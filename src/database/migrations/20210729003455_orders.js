exports.up = function (knex) {
  return knex.schema.createTable('Order', (table) => {
    table.uuid('order_id').primary().notNullable();
    table.string('store_id').notNullable();
    table.foreign('store_id').references('store_id').inTable('Store');
    table.string('firebase_id').notNullable();
    table.foreign('firebase_id').references('firebase_id').inTable('Users');
    table.uuid('address_id').notNullable();
    table.foreign('address_id').references('address_id').inTable('Address');
    table.string('product_name').notNullable();
    table.float('total_price').notNullable();
    table.string('payment_type').notNullable();
    table.string('status').notNullable();
    table.integer('payment_installments').notNullable();
    table.string('delivery_method').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Order');
};
