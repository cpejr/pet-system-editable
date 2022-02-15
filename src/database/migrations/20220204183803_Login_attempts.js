exports.up = function (knex) {
  return knex.schema.createTable('Login_attempts', (table) => {
    table.string('email').primary().notNullable();
    table.foreign('email').references('email').inTable('User').onDelete('cascade');
    table.integer('attempts').notNullable().defaultTo(0);
    table.timestamp('lock_time').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Login_attempts');
};
