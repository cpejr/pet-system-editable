exports.up = async function (knex) {
  await knex.schema.table('Store', (table) => {
    table.float('shipping_tax').notNullable().defaultTo(0);
  });
  await knex.schema.raw(`
        ALTER TABLE "Store"
        ALTER COLUMN "shipping_tax"
        DROP DEFAULT;
      `);
};

exports.down = async function (knex) {
  await knex.schema.raw(`
          ALTER TABLE "Store"
          ALTER COLUMN "shipping_tax"
          SET DEFAULT ${0};
          `);
  await knex.schema.table('Store', (table) => {
    table.dropColumn('shipping_tax');
  });
};
