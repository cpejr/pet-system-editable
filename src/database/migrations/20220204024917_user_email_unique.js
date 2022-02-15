
exports.up = async function (knex) {
  await knex.schema.alterTable('User', (table) => {
    table.string('email').unique().notNullable().alter();
  });
  await knex.schema.raw(`
                    ALTER TABLE "User"
                    ALTER COLUMN "email"
                    DROP DEFAULT;
                    `);
};

exports.down = async function (knex) {
  await knex.schema.raw(`
                  ALTER TABLE "User"
                  ALTER COLUMN "email"
                  `);
  await knex.schema.alterTable('User', (table) => {
    table.dropUnique('email'); // dropUnique
  });
};
