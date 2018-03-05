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
    res.render("location/index", { places });
  });
});

router.get("/", (req, res) => {
  Location.find({}).then(function(places) {
    res.render("index", { places });
  });
});

//by id
router.get("/:id", (req, res) => {
  Location.findOne({ _id: req.params.id }).then(cars => {
    res.render("location/show", places);
  });
});
// router.get('/', (req, res) => {
//     Location.find({})
//       .then(location => {
//         res.render('index', { location });
//       })
//       .catch(err => console.log(err))
//   });

module.exports = router;
