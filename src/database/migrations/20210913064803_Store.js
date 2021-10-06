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
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Store');
};
