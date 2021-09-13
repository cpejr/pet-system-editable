exports.up = function (knex) {
  return knex.schema.createTable('Cart_Products', (table) => {
    table.string('cart_id').notNullable();
    table.foreign('cart_id').references('cart_id').inTable('Cart').onDelete('cascade');
    table.string('product_id').notNullable();
    table.foreign('product_id').references('product_id').inTable('Product').onDelete('cascade');
    table.string('company_name').notNullable();
    table.integer('amount').notNullable();
    table.integer('final_price').notNullable();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('Cart_Products');
};
 