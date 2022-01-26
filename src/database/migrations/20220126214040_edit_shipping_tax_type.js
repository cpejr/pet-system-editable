exports.up = async function (knex) {
  await knex.schema.alterTable('Store', (table) => {
    table.string('shipping_tax').notNullable().defaultTo('0,0,0,0,0,0,0,0,0').alter();
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
                SET DEFAULT ${'0,0,0,0,0,0,0,0,0'};
                `);
  await knex.schema.alterTable('Store', (table) => {
    table.dropColumn('shipping_tax');
  });
};
