const db = require('../../models');

module.exports = function (app) {
  app.get('/api/customers', function (req, res) {
    db.Customers.findAll({

    }).then(function (customer) {
      res.json(customer);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

  app.post('/api/customers', function (req, res) {
    db.Customers.create(req.body).then(function (rows) {
      res.json({success:true});
    }).catch(function (error) {
      res.json({ error: error });
    });
  });
    // DELETE route for deleting authors
    app.delete('/api/customers/:id', function(req, res) {
      db.Customers.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(row) {
        res.json(row);
      }).catch(function(error) {
        res.json({ error: error });
      });
    });
};






// GET route for retrieving a single specified author
// app.get('/api/authors/:id', function(req, res) {

//   // Here we add an 'include' property to our options in our findOne query
//   // We set the value to an array of the models we want to include in a left outer join
//   // In this case, just db.Post
//   db.Author.findOne({
//     where: {
//       id: req.params.id
//     },
//     include: [db.Post]
//   }).then(function(dbAuthor) {
//     res.json(dbAuthor);
//   }).catch(function(error) {
//     res.json({ error: error });
//   });
// });

// POST route for adding new authors
// app.post('/api/customers', function (req, res) {
//   db.Customers.create(req.body).then(function (dbCustomer) {
//     res.json(dbCustomer);
//   }).catch(function (error) {
//     res.json({ error: error });
//   });
// });



  // // PUT route for updating authors
  // app.put('/api/customers/:id', function(req, res) {
  //   db.Customers.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.params.id
  //       }
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   }).catch(function(error) {
  //     res.json({ error: error });
  //   });
  // });

