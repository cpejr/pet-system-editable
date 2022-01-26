exports.up = async function (knex) {
  await knex.schema.table('Address', (table) => {
    table.string('region').notNullable().defaultTo('');
  });
  await knex.schema.raw(`
                  ALTER TABLE "Address"
                  ALTER COLUMN "region"
                  DROP DEFAULT;
          `);
};

exports.down = async function (knex) {
  await knex.schema.table('Address', (table) => {
    table.dropColumn('region');
  });
};
