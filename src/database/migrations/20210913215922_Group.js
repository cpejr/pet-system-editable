exports.up = function (knex) {
    return knex.schema.createTable('Group', (table) => {
      table.string('group_id').primary().notNullable();
      table.string('store_id').notNullable().references('store_id').inTable('Store').onDelete('cascade');
      table.string('name').notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('Group');
  };