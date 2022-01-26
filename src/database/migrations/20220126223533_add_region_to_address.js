exports.up = async function (knex) {
  await knex.schema.table('Address', (table) => {
    table.string('Region').notNullable().defaultTo('');
  });
  await knex.schema.raw(`
                  ALTER TABLE "Address"
                  ALTER COLUMN "Region"
                  DROP DEFAULT;
          `);
};

exports.down = async function (knex) {
  await knex.schema.table('Address', (table) => {
    table.dropColumn('Region');
  });
};
