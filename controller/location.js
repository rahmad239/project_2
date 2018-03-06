// require all dependencies
// define all routes
// get all locations listed
// get a single view listed
// create a new location
// export the router
const express = require("express");
const router = express.Router();
const Location = require("../model/Location");

router.get("/", (req, res) => {
  Location.find({}).then(places => {
    res.render("locations/index", { places });
  });
});

router.post("/", (req, res) => {
  Location.create(req.body).then(places => {
    res.redirect("locations/${ places.id}");
  });
});

//new post
router.post("");

//by id
router.get("/:id", (req, res) => {
  Location.findOne({ _id: req.params.id }).then(place => {
    res.render("locations/show", place);
  });
});

module.exports = router;
