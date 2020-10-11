const express = require("express");

const router = express.Router();

const cogsModel = require("../models/cogsModel.js");

router.get("/", function(req, res) {
    cogsModel.User.findAll(req.body) {
        cogsModel.User.create(req.body).then((result) =>  {
            res.json(result)
          })
        }
    });
    

  module.exports = router;

