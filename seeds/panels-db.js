const db = require('../models')

db.sequelize.sync().then(function() {
  db.Panels.bulkCreate([{
    brand_Name: 'SunPower',
    panel_Name: '2018 X-Series',
    Efficiency: 22.7,
    watts: 370,
    warranty_Yrs : 25,
    inventory : 150
  }, {
    brand_Name: 'Panasonic',
    panel_Name: 'VBHN315KA01',
    Efficiency: 21.6,
    watts: 320,
    warranty_Yrs : 25,
    inventory : 110
  },
  {
    brand_Name: 'LG',
    panel_Name: 'LG315N1K-A5',
    Efficiency: 21.1,
    watts: 315,
    warranty_Yrs : 25,
    inventory : 120
  },
  {
    brand_Name: 'Solaria',
    panel_Name: 'PowerXT-315R-BX',
    Efficiency: 19.4,
    watts:340,
    warranty_Yrs : 25,
    inventory : 120
  }
  
]).then(function(response) {
    console.log('Data successfully added!')
  }).catch(function(error) {
    console.log('Error', error)
  });
});