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
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars")

// ROUTES
// ==================================
require("./routes/user-api-routes.js");
require("./routes/inventory-item-api-routes.js");
require("./routes/weekly-inventory-api-routes.js");



db.sequelize.sync({force:true}).then(function() {
  app.removeListener(PORT, function(){
    console.log("App listening on PORT:" + PORT)
  });
});
