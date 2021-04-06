exports.up = function (knex) {
  return knex.schema.createTable('Users', (table) => {
    table.string('firebase_id').primary().notNullable();
    table.string('email').notNullable();
    table.string('cpf').notNullable();
    table.date('birth_date').notNullable().defaultTo(knex.fn.now());
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('type').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Users');
};
