exports.up = function (knex) {
  return knex.schema.createTable("User_Address", (table) => {
    table.string("firebase_id").notNullable();
    table.foreign("firebase_id").references("firebase_id").inTable("User");
    table.uuid('address_id').notNullable();
    table.foreign('address_id').references('address_id').inTable('Address');
    table.boolean('main_address').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("User_Address");
};
