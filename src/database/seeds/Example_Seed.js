exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('template').del()
    .then(() => knex('template').insert([
      {
        id: '1',
        name: 'Leandro',
        type: 'admin',
        status: 'approved',
        price: 22.23,
        quantity: 13,
        on_sale: 'false',
      },
    ]));
};
