var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function(req, res) {
    burgers.insertOne(['burger_name'], [req.body.user_burger], function(data) {
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.updateOne({ 'devoured': req.body.devoured }, condition, function(data) {
        res.redirect("/");
    });
});

module.exports = router;