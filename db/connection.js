// connect to mongo using mongoose and export
// connect to database or create one
// make all the promises that we need to :)
// allows us to export it so we can call this in another file
// it allows us to connect to our database when we want
const mongoose = require("mongoose");
mongoose.Promise = Promise;

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect("mongodb://localhost/ggb");
}

module.exports = mongoose;
