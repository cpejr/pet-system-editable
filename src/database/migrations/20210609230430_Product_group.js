exports.up = function (knex) {
  return knex.schema.createTable('product_group', (table) => {
    table.string('group_id').notNullable();
    table.foreign('group_id').references('group_id').inTable('group');
    table.string('product_id').notNullable();
    table.foreign('product_id').references('product_id').inTable('product');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('product_group');
};
