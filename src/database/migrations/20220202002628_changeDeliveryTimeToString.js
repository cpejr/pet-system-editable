exports.up = async function (knex) {
  await knex.schema.alterTable('Store', (table) => {
    table.string('delivery_time').notNullable().defaultTo('0,0,0,0,0,0,0,0,0').alter();
  });
  await knex.schema.raw(`
                    ALTER TABLE "Store"
                    ALTER COLUMN "delivery_time"
                    DROP DEFAULT;
                    `);
};

exports.down = async function (knex) {
  await knex.schema.raw(`
                  ALTER TABLE "Store"
                  ALTER COLUMN "delivery_time"
                  SET DEFAULT ${'0,0,0,0,0,0,0,0,0'};
                  `);
  await knex.schema.alterTable('Store', (table) => {
    table.dropColumn('delivery_time');
  });
};
