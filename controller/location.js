// require all dependencies
// define all routes
// get all locations listed
// get a single view listed
// create a new location
// export the router
const express = require("express");
const router = express.Router();
const Location = require("../model/Location");
const hbs = require("hbs");
//do I need this? why wont the show view render?

router.get("/", (req, res) => {
  Location.find({}).then(places => {
    res.render("index", { places });
  });
});

//new post
router.post("/", (req, res) => {
  Location.create(req.body).then(places => {
    res.redirect(`/location/${location.title}`, { places });
  });
});

router.get("/new", (req, res) => {
  res.render("location/new");
});

//by title;
router.get("/:title", (req, res) => {
  Location.findOne({ title: req.params.title }).then(function(places) {
    res.render("location/show", places);
  });
});

module.exports = router;
