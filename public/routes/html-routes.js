
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// Dependencies
const path = require('path');
// Routes

module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.


  // index route loads index.html home page
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

  // // cms route loads checkout.html
  // app.get('/checkout', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../checkout.html'));
  // });

  app.get('/customers', function(req, res) {
    res.sendFile(path.join(__dirname, '../customers.html'));
  });

  app.get('/panels', function(req, res) {
    res.sendFile(path.join(__dirname, '../customers.html'));
  });




//   app.get('/customerdash', function(req, res) {
//     res.sendFile(path.join(__dirname, '../customerdash.html'));
//   });
// };


}
