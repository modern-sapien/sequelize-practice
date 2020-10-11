// Dependencies
// =============================================================
var express = require("express");

var PORT = process.env.PORT || 8080;

// Sets up the Express App
// =============================================================
var app = express();

// Static directory
app.use(express.static("app/public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
const routes = require("./controllers/cogsController.js");

app.use(routes);

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
