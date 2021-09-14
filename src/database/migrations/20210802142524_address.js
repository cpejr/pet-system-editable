exports.up = function (knex) {
  return knex.schema.createTable('Address', (table) => {
    table.uuid('address_id').primary().notNullable();
    table.string('user_id').notNullable();
    table.foreign('user_id').references('firebase_id').inTable('Users');
    table.string('store_id').notNullable();
    table.foreign('store_id').references('store_id').inTable('Store');
    table.string('street').notNullable();
    table.integer('number').notNullable();
    table.string('neighbourhood').notNullable();
    table.string('city').notNullable();
    table.string('cep').notNullable();
    table.string('state').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Address');
};
