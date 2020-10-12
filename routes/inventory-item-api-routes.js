const db = require ("../models")

module.exports = function (app){
    app.get("/api/inventory_items", function(req, res) {
        db.Inventory_items.findAll({}).then((result) =>  {
          res.json(result)
      });
      })
      // specific inventory_items API routes
      app.get("/api/inventory_items/:id", function(req, res) {
        db.Inventory_items.findAll({
          where: {
            id: req.params.id,
          },
        }).then((result) => {
          res.json(result)
        } )
      });
}