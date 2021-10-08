exports.up = async function (knex) {
  await knex.schema.table('Store', (table) => {
    table.integer('delivery_time').notNullable().defaultTo(0);
    table.integer('cellphone').notNullable().defaultTo(0);
  });
  await knex.schema.raw(`
            ALTER TABLE "Store"
            ALTER COLUMN "delivery_time"
            DROP DEFAULT;
        `);
  await knex.schema.raw(`
            ALTER TABLE "Store"
            ALTER COLUMN "cellphone"
            DROP DEFAULT;
    `);
};

exports.down = async function (knex) {
  await knex.schema.raw(`
            ALTER TABLE "Store"
            ALTER COLUMN "delivery_time"
            SET DEFAULT ${0};
            `);
  await knex.schema.raw(`
            ALTER TABLE "Store"
            ALTER COLUMN "cellphone"
            SET DEFAULT ${0};
            `);
  await knex.schema.table('Store', (table) => {
    table.dropColumn('delivery_time');
  });
  await knex.schema.table('Store', (table) => {
    table.dropColumn('cellphone');
  });
};
