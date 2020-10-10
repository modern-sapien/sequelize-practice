// Dependencies
const express = require("express");

// Setup Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Require models for syncing
const db = require.apply("./models");

// Middleware for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true}).then(function()    {
    app.listen(PORT, function() {
        console.log(`App listening on PORT ${PORT}`);
    })
})

