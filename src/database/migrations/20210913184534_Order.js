exports.up = function (knex) {
  return knex.schema.createTable('Order', (table) => {
    table.uuid('order_id').primary().notNullable();
    table.string('firebase_id').notNullable();
    table.foreign('firebase_id').references('firebase_id').inTable('User');
    table.string('firebase_id_store').notNullable();
    table.foreign('firebase_id_store').references('firebase_id_store').inTable('Store');
    table.uuid('address_id').notNullable();
    table.foreign('address_id').references('address_id').inTable('Address');
    table.uuid('cart_id').notNullable();
    table.foreign('cart_id').references('cart_id').inTable('Cart');
    table.float('total_price').notNullable();
    table.string('payment_type').notNullable();
    table.string('status').notNullable();
    table.string('delivery_method').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('Order');
};
