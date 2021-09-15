exports.up = function (knex) {
  return knex.schema.createTable('Group', (table) => {
    table.string('group_id').primary().notNullable();
    table.string('firebase_id_store').notNullable().references('firebase_id_store').inTable('Store')
      .onDelete('cascade');
    table.string('name').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Group');
};
