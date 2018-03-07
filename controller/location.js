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

router.get("/", (req, res) => {
  Location.find({}).then(places => {
    res.render("index", { places });
  });
});

//new form
router.get("/new", (req, res) => {
  res.render("location/new");
});

//call edit into a path
router.get("/edit", (req, res) => {
  res.render("location/edit");
});

//new post processing
router.post("/", (req, res) => {
  Location.create({
    title: req.body.title,
    body: req.body.body
  })
    .then(places => {
      res.redirect("/");
    })
    .catch(err => console.log(err));
});

//show details by ID;
router.get("/:id", (req, res) => {
  Location.findOne({ _id: req.params.id })
    .then(places => {
      res.render("location/show", places);
    })
    .catch(err => console.log(err));
});

// //remove a post
router.delete("/:id", (req, res) => {
  Location.findOneAndRemove({ _id: req.params.id })
    .then(places => {
      res.redirect("/");
    })
    .catch(err => console.log(err));
});

//edit a post
router.get("/edit/:id", (req, res) => {
  Location.findOne({ _id: req.params.id })
    .then(places => {
      res.render("location/edit", places);
    })
    .catch(err => console.log(err));
});

router.put("/:id", (req, res) => {
  Location.findOneAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      body: req.body.body
    },
    {
      new: true
    }
  ).then(places => {
    res.redirect("/");
  });
});
module.exports = router;
