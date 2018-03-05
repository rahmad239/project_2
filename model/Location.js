// get db connection
// make schema
// give mongoose the format to make the model
// export the model
const mongoose = require("../db/connection");
const LocationSchema = new mongoose.Schema({
  title: String,
  body: String
});
const Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
