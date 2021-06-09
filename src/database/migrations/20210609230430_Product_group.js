exports.up = function (knex) {
  return knex.schema.createTable('product_group', (table) => {
    table.string('group_id').notNullable().references('group_id').inTable('group');
    table.string('product_id').notNullable().references('product_id').inTable('product');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('product_group');
};
