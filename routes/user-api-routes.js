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

    app.post("/api/users", function(req, res){
      db.User.create(req.body).then((result)=>{
        res.json(result)
      })
    })

    app.put("/api/users/", function(req,res){
      db.User.update({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      },
      {
        where: {
          id: req.params.id
        }
      }
      )
    });

    app.delete("/api/users/:id", (req,res)=>{
      db.User.destroy({
        where:{
          id: req.params.id
        }
      }).then(function(result){
        res.json(result);
      })
    });
};