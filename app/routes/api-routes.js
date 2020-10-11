// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const cogsModel = require("../models/cogsModel.js");


// Routes
// =============================================================
module.exports = function(app) {
  // Is there a way to display all objects at once? is that useful?
  // app.get("/api/all", function(req, res) {
  //   cogsModel.findAll(req.body).then((result) =>  {
  //     res.json(result)
  // });
  // })

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
    })
  });

    //  POST ROUTES
    //  ======================
    // Add New User Post Route
    app.post("/api/users", function(req, res) {
      cogsModel.User.create(req.body).then((result) =>  {
        res.json(result)
      })
    });

    // Add New Inventory Item Post Route
    app.post("/api/inventory_items", function(req, res) {
    cogsModel.Inventory_items.create(req.body).then((result) =>  {
      res.json(result)
    })
  });

  // Add New Weekly Inventory Table Route
  app.post("/api/weekly_inventory_table", function(req, res) {
    cogsModel.Weekly_inventory_table.create(req.body).then((result) =>  {
      res.json(result)
    })
  });

  // UPDATE ROUTES
  //  =================
  // Update User Route
  app.put("/api/users/:id", function(req, res) {
    cogsModel.User.update(req.body).then((result) =>  {
      res.json(result)
    })
  });

}

cogsModel.Weekly_inventory_table.findAll({
  where: {
    id: req.params.id,
  },
})

//   // Add sequelize code to delete a book
//   app.delete("/api/book/:id", function(req, res) {
//   });