const db = require("../models");


module.exports = function(app){
    app.get("/api/users", function(req, res) {
      db.User.findAll({}).then((result) => {
        res.json(result)
      });
    })
    
      // specific user API route
    app.get("/api/users/:id", function(req, res) {
      db.User.findAll({
        where: {
          id: req.params.id,
        },
      }).then((result) => {
        res.json(result)
      } )
    });
}