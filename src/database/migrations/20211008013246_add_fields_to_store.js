exports.up = async function (knex) {
  await knex.schema.table("Store", (table) => {
    table.integer("delivery_time").notNullable().defaultTo(0);
    table.string("cellphone").notNullable().defaultTo("asd");
    table.string("opening_time").notNullable().defaultTo("0");
    table.string("closing_time").notNullable().defaultTo("0");
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
  await knex.schema.raw(`
            ALTER TABLE "Store"
            ALTER COLUMN "opening_time"
            DROP DEFAULT;
`);
  await knex.schema.raw(`
            ALTER TABLE "Store"
            ALTER COLUMN "closing_time"
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
            SET DEFAULT ${"asd"};
            `);
  await knex.schema.raw(`
            ALTER TABLE "Store"
            ALTER COLUMN "opening_time"
            SET DEFAULT ${"0"};
            `);
  await knex.schema.raw(`
            ALTER TABLE "Store"
            ALTER COLUMN "closing_time"
            SET DEFAULT ${"0"};
            `);
  await knex.schema.table("Store", (table) => {
    table.dropColumn("delivery_time");
  });
  await knex.schema.table("Store", (table) => {
    table.dropColumn("cellphone");
  });
  await knex.schema.table("Store", (table) => {
    table.dropColumn("opening_time");
  });
  await knex.schema.table("Store", (table) => {
    table.dropColumn("closing_time");
  });
};
