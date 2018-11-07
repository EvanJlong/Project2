// Import Database Models SEEDS NOMNOM
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  db.Customers.bulkCreate([{
    name: 'Evan Long',
    email: 'EvanJLong11@gmail.com',
    zipCode:75022,
    state: 'TX'
  }, {
    name: 'Brody Williams',
    email: 'Brody_Williams@gmail.com',
    zipCode: 75019,
    state: 'TX'
  },
  {
    name: 'Katie Jones',
    email: 'KJones@aol.com',
    zipCode:75019,
    state: 'TX'
  }, {
    name: 'Johnny Appleseed',
    email: 'JAppleseed@gmail.com',
    zipCode:75111,
    state: 'TX'
  }]).then(function(response) {
    console.log('Data successfully added!')
  }).catch(function(error) {
    console.log('Error', error)
  });
});

// db.sequelize.sync({force:true}).then(function() {
//   db.Panels.bulkCreate([{
//     brand_Name: 'Amerisolar',
//     panel_Name: 'AS-6M-305',
//     avg_Efficiency:'15.88',
//     watts:'305',
//     warranty_Yrs:'12'

//   }]).then(function(response) {
//     console.log('Data successfully added!')
//   }).catch(function(error) {
//     console.log('Error', error)
//   });
// });