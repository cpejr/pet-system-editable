exports.up = function (knex) {
  return knex.schema.createTable('Address', (table) => {
    table.uuid('address_id').primary().notNullable();
    table.string('zipcode').notNullable();
    table.string('state').notNullable();
    table.string('city').notNullable();
    table.string('street').notNullable();
    table.string('district').notNullable();
    table.string('address_num').notNullable();
    table.string('complement').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Address');
};
