const db = require ("../models")

module.exports = function (app){

    // GET ROUTES
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
    // POST ROUTE
    app.post("/api/inventory_items", function(req, res) {
      db.Inventory_items.create(req.body).then((result) =>  {
        res.json(result)
      })
    });

    // Update / PUT Route
    app.put("/api/inventory_items/:id", function(req, res) {
      db.Inventory_items.update({
        unit_name: req.body.unit_name,
        unit_category: req.body.unit_category,
        unit_price: req.body.unit_price,
        unit_distributor: req.body.unit_distributor,
        unit_count: req.body.unit_count,
        unit_count_par: req.body.unit_count_par,
        item_count: req.body.item_count,
        item_count_par: req.body.item_count_par,
        item_count_type: req.body.item_count_type,
        item_price: req.body.item_price,
        user_id: req.body.user_id,
      },  {
        where: {
          id: req.params.id
        }
      }).then(function(result) {
        res.json(result)
      })
    });

    // Delete Route
    app.delete("/api/inventory_items/:id", function(req, res) {
      db.Inventory_items.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(result) {
        res.json(result);
      });
    });
}