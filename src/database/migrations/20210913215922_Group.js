exports.up = function (knex) {
  return knex.schema.createTable('Group', (table) => {
    table.uuid('group_id').primary().notNullable();
    table.string("firebase_id_store").notNullable();
    table.foreign("firebase_id_store").references("firebase_id_store").inTable("Store");
    table.string('name').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Group');
};
