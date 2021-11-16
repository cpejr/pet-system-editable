exports.up = function (knex) {
  return knex.schema.createTable('Store', (table) => {
    table.string('firebase_id_store').primary().notNullable();
    table.string('company_name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.string('cnpj').notNullable();
    table.string('cover_img').notNullable();
    table.string('logo_img').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.boolean('status').notNullable();
    table.decimal('shipping_tax', { precision: 2 }).notNullable().defaultTo(0);
    table.integer('delivery_time').notNullable().defaultTo(0);
    table.string('cellphone').notNullable().defaultTo('');
    table.string('opening_time').notNullable().defaultTo('0');
    table.string('closing_time').notNullable().defaultTo('0');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Store');
};
