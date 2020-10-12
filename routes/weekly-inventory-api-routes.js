const db = require ("../models")

module.exports = function (app){
    app.get("/api/inventory_items", function(req, res) {
        db.Weekly_inventory.findAll({}).then((result) =>  {
          res.json(result)
      });
      })
      // specific inventory_items API routes
    app.get("/api/inventory_items/:id", function(req, res) {
      db.Weekly_inventory.findAll({
        where: {
          id: req.params.id,
        },
      }).then((result) => {
        res.json(result)
      } )
    });

    app.post("/api/weekly_inventory_table", function(req, res) {
        db.Weekly_inventory.create(req.body).then((result) =>  {
          res.json(result)
        })
    });

    app.put("/api/weekly_inventory_table/:id", function(req, res) {
        db.Weekly_inventory.update({
          unit_name: req.body.unit_name,
          unit_category: req.body.unit_category,
          unit_price: req.body.unit_price,
          unit_distributor: req.body.unit_distributor,
          unit_count: req.body.unit_count,
          unit_count_par: req.body.unit_count_par,
          item_count: req.body.item_count,
          item_count_type: req.body.item_count_type,
          item_price: req.body.item_price,
          item_count_par: req.body.item_count_par,
          current_item_count: req.body.current_item_count,
          item_in_use_count: req.body.item_in_use_count,
          inventory_total_value: req.body.inventory_total_value,
          projected_order_cost: req.body.projected_order_cost,
          inventory_date: req.body.inventory_date,
          user_id: req.body.user_id,
        },  {
          where: {
            id: req.params.id
          }
        }).then(function(result) {
          res.json(result)
        })
      });

      app.delete("/api/weekly_inventory_table/:id", (req, res)=>{
        db.Weekly_inventory.destroy({
          where:{
            id: req.params.id
          }
        }).then(function(result){
          res.json(result)
        })
      })
    
}