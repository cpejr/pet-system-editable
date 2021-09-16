exports.up = function (knex) {
    return knex.schema.createTable("Store_Address", (table) => {
      table.string("firebase_id_store").notNullable();
      table.foreign("firebase_id_store").references("firebase_id_store").inTable("Store");
      table.uuid('address_id').notNullable();
      table.foreign('address_id').references('address_id').inTable('Address');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("Store_Address");
};