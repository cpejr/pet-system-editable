exports.up = async function (knex) {
  await knex.schema.table('User', (table) => {
    table.string('Region').notNullable().defaultTo('');
  });
  await knex.schema.raw(`
                ALTER TABLE "User"
                ALTER COLUMN "Region"
                DROP DEFAULT;
        `);
};

exports.down = async function (knex) {
  await knex.schema.raw(`
                ALTER TABLE "User"
                ALTER COLUMN "Region"
                SET DEFAULT ${''};
                `);
  await knex.schema.table('User', (table) => {
    table.dropColumn('Region');
  });
};
