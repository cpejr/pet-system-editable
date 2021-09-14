exports.up = function (knex) {
  return knex.schema.createTable('services', (table) => {
    table.uuid('service_id').primary().notNullable();
    table.string('store_id').notNullable();
    table.foreign('store_id').references('store_id').inTable('Store');
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.float('price').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('services');
};
