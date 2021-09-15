exports.up = function (knex) {
  return knex.schema.createTable('Product_Group', (table) => {
    table.string('group_id').notNullable();
    table.foreign('group_id').references('group_id').inTable('Group');
    table.string('product_id').notNullable();
    table.foreign('product_id').references('product_id').inTable('Product');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Product_Group');
};
