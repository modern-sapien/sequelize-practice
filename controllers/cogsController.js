const express = require("express");

const router = express.Router();

const cogsModel = require("../models/cogsModel.js");

router.get("/", function(req, res) {
    cogsModel.all(function(data) {
      var hbsObject = {
        cogsModel: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


  module.exports = router;

