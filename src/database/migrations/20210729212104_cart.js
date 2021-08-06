exports.up = function (knex) {
  return knex.schema.createTable('Cart', (table) => {
    table.string('firebase_id').notNullable();
    table.foreign('firebase_id').references('firebase_id').inTable('Users');
    table.string('product_id').notNullable();
    table.foreign('product_id').references('product_id').inTable('product');
    table.integer('quantity').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Cart');
};
