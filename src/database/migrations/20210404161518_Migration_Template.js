// Template de migration com algumas das funções principais

exports.up = function (knex) {
  return knex.schema.createTable('template', (table) => {
    table.string('id').primary().notNullable();
    table.string('name').notNullable();
    table.enu('type', ['admin', 'seller', 'consumer']).notNullable();
    table.enu('status', ['pending', 'approved', 'refused']).notNullable().defaultTo('pending');
    table.float('price').notNullable();
    table.integer('quantity').notNullable().defaultTo(0).unsigned();
    table.boolean('on_sale').nullable();

    // table.foreign('category_id').references('id').inTable('categories').onDelete('CASCADE');
    // exemplo de uso com foreign key
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('template');
};
