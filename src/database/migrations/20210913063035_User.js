exports.up = function (knex) {
  return knex.schema.createTable('User', (table) => {
    table.string('firebase_id').primary().notNullable();
    table.string('email').notNullable();
    table.string('name').notNullable();
    table.string('cpf').notNullable();
    table.date('birth_date').notNullable();
    table.string('phone').notNullable();
    table.string('type').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('User');
};
