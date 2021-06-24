exports.up = function (knex) {
  return knex.schema.createTable('Products_subcategories', (table) => {
    table.string('subcategory_id').notNullable();
    table.foreign('subcategory_id').references('subcategory_id').inTable('Subcategories').onDelete('cascade');
    table.string('product_id').notNullable();
    table.foreign('product_id').references('product_id').inTable('product').onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.droptTable('Products_subcategories');
};
