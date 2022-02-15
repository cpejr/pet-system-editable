exports.up = function (knex) {
  return knex.schema.createTable('Login_attempts', (table) => {
    table.string('email').primary().unique().notNullable();
    table.integer('attempts').notNullable().defaultTo(0);
    table.timestamp('lock_time').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Login_attempts');
};
