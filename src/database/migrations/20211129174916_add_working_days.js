exports.up = async function (knex) {
  await knex.schema.table('Store', (table) => {
    table.string('working_days').notNullable().defaultTo('');
  });
  await knex.schema.raw(`
              ALTER TABLE "Store"
              ALTER COLUMN "working_days"
              DROP DEFAULT;
              `);
};

exports.down = async function (knex) {
  await knex.schema.raw(`
              ALTER TABLE "Store"
              ALTER COLUMN "working_days"
              SET DEFAULT ${''};
              `);
  await knex.schema.table('Store', (table) => {
    table.dropColumn('working_days');
  });
};
