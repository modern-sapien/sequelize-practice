// // Dependencies
// // =============================================================
// var express = require("express");



// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 8080;

// // Requiring our models for syncing
// const db = require("./models");
// // Static directory
// app.use(express.static("app/public"));

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Set Handlebars.
// const exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Routes
// // =============================================================

// require("./routes/api-routes.js")(app);
// require("./routes/user-api-routes.js")(app);
// require("./routes/inventory-item-api-routes.js")(app);

// // Starts the server to begin listening
// // =============================================================

// db.sequelize.sync({force: true}).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// })

// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Sets up the Express App
// ============================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models")

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static Directory
app.use(express.static("public"));

// Include Express-handlebars as the default templating engine
app.engine("andlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars")

// ROUTES
// ==================================
require("./routes/user-api-routes");
require("./routes/inventory-item-api-routes");
require("./routes/weekly-inventory-api-routes");



db.sequelize.sync().then(function() {
  app.removeListener(PORT, function(){
    console.log("App listening on PORT:" + PORT)
  });
});
