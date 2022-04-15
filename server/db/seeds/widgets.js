exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('widgets')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('widgets').insert([
        {
          id: 1,
          name: 'Red widget',
          price: 23.45,
          mfg: 'Acme Inc.',
          inStock: 4,
        },
        {
          id: 2,
          name: 'Blue widget',
          price: 423.47,
          mfg: 'Acme Inc.',
          inStock: 8,
        },
        {
          id: 3,
          name: 'Yellow widget',
          price: 123.4,
          mfg: 'Acme Inc.',
          inStock: 3,
        },
      ])
    })
}
