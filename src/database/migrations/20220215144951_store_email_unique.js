exports.up = async function (knex) {
  await knex.schema.alterTable('Store', (table) => {
    table.string('email').unique().notNullable().alter();
  });
  await knex.schema.raw(`
                      ALTER TABLE "Store"
                      ALTER COLUMN "email"
                      DROP DEFAULT;
                      `);
};

exports.down = async function (knex) {
  await knex.schema.raw(`
                    ALTER TABLE "Store"
                    ALTER COLUMN "email"
                    `);
  await knex.schema.alterTable('Store', (table) => {
    table.string('email').notNullable().alter();
  });
};
