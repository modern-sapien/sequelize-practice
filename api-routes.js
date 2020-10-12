// // *********************************************************************************
// // api-routes.js - this file offers a set of routes for displaying and saving data to the db
// // *********************************************************************************

// // Dependencies
// // =============================================================
// const cogsModel = require("../models/cogsModel.js");


// // Routes
// // =============================================================
// module.exports = function(app) {
//   // Is there a way to display all objects at once? is that useful?
//   // app.get("/api/all", function(req, res) {
//   //   cogsModel.findAll(req.body).then((result) =>  {
//   //     res.json(result)
//   // });
//   // })

//   // users api get route
//   app.get("/api/users", function(req, res) {
//     cogsModel.User.findAll(req.body).then((result) =>  {
//       res.json(result)
//   });
//   })

//   // specific user API route
//   app.get("/api/users/:id", function(req, res) {
//     cogsModel.User.findAll({
//       where: {
//         id: req.params.id,
//       },
//     }).then((result) => {
//       res.json(result)
//     } )
//   });
 
//   // inventory_items api get route
//   app.get("/api/inventory_items", function(req, res) {
//     cogsModel.Inventory_items.findAll(req.body).then((result) =>  {
//       res.json(result)
//   });
//   })
//   // specific inventory_items API routes
//   app.get("/api/inventory_items/:id", function(req, res) {
//     cogsModel.Inventory_items.findAll({
//       where: {
//         id: req.params.id,
//       },
//     }).then((result) => {
//       res.json(result)
//     } )
//   });

//   // weekly_inventory_items api get route
//   app.get("/api/weekly_inventory_table", function(req, res) {
//     cogsModel.Weekly_inventory_table.findAll(req.body).then((result) =>  {
//       res.json(result)
//   });
//   })
//   // specific inventory_items API routes
//   app.get("/api/weekly_inventory_table/:id", function(req, res) {
//     cogsModel.Weekly_inventory_table.findAll({
//       where: {
//         id: req.params.id,
//       },
//     }).then((result) => {
//       res.json(result)
//     })
//   });

// //  POST ROUTES
// //  ======================
//     // Add New User Post Route
//     app.post("/api/users", function(req, res) {
//       cogsModel.User.create(req.body).then((result) =>  {
//         res.json(result)
//       })
//     });

//     // Add New Inventory Item Post Route
//     app.post("/api/inventory_items", function(req, res) {
//     cogsModel.Inventory_items.create(req.body).then((result) =>  {
//       res.json(result)
//     })
//   });

//   // Add New Weekly Inventory Table Route
//   app.post("/api/weekly_inventory_table", function(req, res) {
//     cogsModel.Weekly_inventory_table.create(req.body).then((result) =>  {
//       res.json(result)
//     })
//   });

//   // UPDATE ROUTES
//   //  =================
//   // Update User Route
//   app.put("/api/users/", function(req, res) {
//     cogsModel.User.update({
//       username: req.body.username,
//       password: req.body.password,
//       email: req.body.email
//     },  {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(result) {
//       res.json(result)
//     })
//   });

//   app.put("/api/inventory_items/:id", function(req, res) {
//     cogsModel.Inventory_items.update({
//       unit_name: req.body.unit_name,
//       unit_category: req.body.unit_category,
//       unit_price: req.body.unit_price,
//       unit_distributor: req.body.unit_distributor,
//       unit_count: req.body.unit_count,
//       unit_count_par: req.body.unit_count_par,
//       item_count: req.body.item_count,
//       item_count_par: req.body.item_count_par,
//       item_count_type: req.body.item_count_type,
//       item_price: req.body.item_price,
//       user_id: req.body.user_id,
//     },  {
//       where: {
//         id: req.params.id
//       }
//     }).then(function(result) {
//       res.json(result)
//     })
//   });

//   app.put("/api/weekly_inventory_table/:id", function(req, res) {
//     cogsModel.Weekly_inventory_table.update({
//       unit_name: req.body.unit_name,
//       unit_category: req.body.unit_category,
//       unit_price: req.body.unit_price,
//       unit_distributor: req.body.unit_distributor,
//       unit_count: req.body.unit_count,
//       unit_count_par: req.body.unit_count_par,
//       item_count: req.body.item_count,
//       item_count_type: req.body.item_count_type,
//       item_price: req.body.item_price,
//       item_count_par: req.body.item_count_par,
//       current_item_count: req.body.current_item_count,
//       item_in_use_count: req.body.item_in_use_count,
//       inventory_total_value: req.body.inventory_total_value,
//       projected_order_cost: req.body.projected_order_cost,
//       inventory_date: req.body.inventory_date,
//       user_id: req.body.user_id,
//     },  {
//       where: {
//         id: req.params.id
//       }
//     }).then(function(result) {
//       res.json(result)
//     })
//   });

//   // DELETE ROUTES

//   // Delete user from USER Table based on User ID
//   app.delete("/api/users/:id", (req, res)=>{
//     cogsModel.User.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(result){
//       res.json(result)
//     })
//   });

//   // DELETE ROW FROM INVENTORY BASED ON ID
//   app.delete("/api/inventory_items/:id", (req, res)=>{
//     cogsModel.Inventory_items.destroy({
//       where:{
//         id: req.params.id
//       }
//     }).then(function(result){
//       res.json(result)
//     })
//   })

//   // Delete Row From Weekly based on ID

//   app.delete("/api/weekly_inventory_table/:id", (req, res)=>{
//     cogsModel.Weekly_inventory_table.destroy({
//       where:{
//         id: req.params.id
//       }
//     }).then(function(result){
//       res.json(result)
//     })
//   })




// }
// //   // Add sequelize code to delete a book
// //   app.delete("/api/book/:id", function(req, res) {
// //   });