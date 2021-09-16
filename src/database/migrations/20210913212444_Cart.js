exports.up = function (knex) {
  return knex.schema.createTable('Cart', (table) => {
    table.uuid('cart_id').primary().notNullable();
    table.string('firebase_id').notNullable();
    table.foreign('firebase_id').references('firebase_id').inTable('User');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Cart');
};
