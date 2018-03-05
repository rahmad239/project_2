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

// make the views folder with :
// //create layout.hbs
//create index.hbs
//define our routes including rendering index view
// start server
app.listen(4000, () => console.log(" app is running"));
