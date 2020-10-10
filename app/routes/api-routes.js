// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const cogsModel = require("../models/cogsModel.js");


// Routes
// =============================================================
module.exports = function(app) {
  // users api get route
  app.get("/api/all", function(req, res) {
    cogsModel.User.findAll(req.body).then((result) =>  {
      res.json(result)
  });
  })

  // users api get route
  app.get("/api/users", function(req, res) {
    cogsModel.User.findAll(req.body).then((result) =>  {
      res.json(result)
  });
  })

  // specific user API route
  app.get("/api/users/:id", function(req, res) {
    cogsModel.User.findAll({
      where: {
        id: req.params.id,
      },
    }).then((result) => {
      res.json(result)
    } )
  });
 
  // inventory_items api get route
  app.get("/api/inventory_items", function(req, res) {
    cogsModel.Inventory_items.findAll(req.body).then((result) =>  {
      res.json(result)
  });
  })
  // specific inventory_items API routes
  app.get("/api/inventory_items/:id", function(req, res) {
    cogsModel.Inventory_items.findAll({
      where: {
        id: req.params.id,
      },
    }).then((result) => {
      res.json(result)
    } )
  });

  // weekly_inventory_items api get route
  app.get("/api/weekly_inventory_table", function(req, res) {
    cogsModel.Weekly_inventory_table.findAll(req.body).then((result) =>  {
      res.json(result)
  });
  })
  // specific inventory_items API routes
  app.get("/api/weekly_inventory_table/:id", function(req, res) {
    cogsModel.Weekly_inventory_table.findAll({
      where: {
        id: req.params.id,
      },
    }).then((result) => {
      res.json(result)
    } )
  });

}
//   // Add sequelize code to get all books of a specific genre and return them as JSON
//   app.get("/api/genre/:genre", function(req, res) {
//     Book.findAll({
//       where: {
//         title: req.params.genre,
//       },
//     }).then((result) => {
//       res.json(result)
//     } )
//   });

//   // Add sequelize code to get all books from a specific author and return them as JSON
//   app.get("/api/author/:author", function(req, res) {
//     Book.findAll({
//       where: {
//         title: req.params.author,
//       },
//     }).then((result) => {
//       res.json(result)
//     } )
//   });
  

//   // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON WHRE CLAUSE
//   app.get("/api/books/long", function(req, res) {
//     Book.findAll({
//       where:  {
//         pages:  {
//           [Op.gt]:  15
//         }
//       }
//     })
//   });

//   // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
//   app.get("/api/books/short", function(req, res) {

//   });

//   // Add sequelize code to create a book
//   app.post("/api/new", function(req, res) {
//     Book.create(req.body).then((result) =>  {
//       res.json(result)
//     })
//   });

//   // Add sequelize code to delete a book
//   app.delete("/api/book/:id", function(req, res) {

//   });

// }