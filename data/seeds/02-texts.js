
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('texts').del()
    .then(function () {
      // Inserts seed entries
      return knex('texts').insert([
        {friendsName: 'James', friendsNumber: '5245252', yourName: 'Justin', yourNumber: '45645646'},
        {friendsName: 'Don', friendsNumber: '4452455', yourName: 'Justin', yourNumber: '546456'},
        {friendsName: 'Wes', friendsNumber: '552545625', yourName: 'Justin', yourNumber: '456465'}
      ]);
    });
};
