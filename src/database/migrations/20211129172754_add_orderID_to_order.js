exports.up = async function (knex) {
  await knex.schema.table('Order', (table) => {
    table.string('Pagseguro_id').notNullable().defaultTo('');
  });
  await knex.schema.raw(`
              ALTER TABLE "Order"
              ALTER COLUMN "Pagseguro_id"
              DROP DEFAULT;
      `);
};

exports.down = async function (knex) {
  await knex.schema.raw(`
              ALTER TABLE "Order"
              ALTER COLUMN "Pagseguro_id"
              SET DEFAULT ${''};
              `);
  await knex.schema.table('Order', (table) => {
    table.dropColumn('Pagseguro_id');
  });
};
