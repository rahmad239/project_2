// connect to mongo using mongoose and export
// connect to database or create one
// make all the promises that we need to :)
// allows us to export it so we can call this in another file
// it allows us to connect to our database when we want
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ggb");
mongoose.Promise = Promise;
module.exports = mongoose;
