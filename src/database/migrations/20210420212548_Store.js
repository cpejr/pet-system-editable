exports.up = function (knex) {
  return knex.schema.createTable('Store', (table) => {
    table.string('store_id').primary().notNullable();
    table.string('user_id').notNullable();
    table.foreign('user_id').references('firebase_id').inTable('Users').onDelete('cascade');
    table.string('company_name').notNullable();
    table.string('email').notNullable();
    table.integer('telephone').notNullable();
    table.integer('cellphone').notNullable();
    table.integer('cnpj').notNullable();
    table.integer('cep').notNullable();
    table.integer('ie').notNullable();
    table.string('ie_state').notNullable();
    table.string('cover_img').notNullable();
    table.string('logo_img').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.float('evaluation').notNullable();
    table.string('status').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Store');
};
