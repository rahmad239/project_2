// require all of our dependencies
const express = require("express");
const app = express();
const hbs = require("hbs");
const Location = require("./model/Location");
const locationController = require("./controller/location");
const bodyParser = require("body-parser");
// create and set up our express app
// configure it all to use hbs

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// make the views folder with :
// //create layout.hbs
//create index.hbs
//define our routes including rendering index view
app.use("/locations", locationController);

app.get("/", (req, res) => {
  Location.find({}).then(function(places) {
    res.render("index", { places });
  });
});

// app.use("/locations", locationController);
// start server
app.listen(3500, () => {
  console.log(" app up and is running");
});
