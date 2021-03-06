// require all of our dependencies
const express = require("express");
const app = express();
const hbs = require("hbs");
const Location = require("./model/Location");
const locationController = require("./controller/location");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
// create and set up our express app
// configure it all to use hbs

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

//define our routes including rendering index view
app.use("/locations", locationController);

app.get("/", (req, res) => {
  Location.find({}).then(function(places) {
    res.render("index", { places });
  });
});

// start server
app.set("port", process.env.PORT || 3500);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
