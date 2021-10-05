const normalize = require("normalize-mongoose");
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const passport = require("passport-local-mongoose");

const UserSchema = new schema({
  email: {
    type: String,
    required: true,
  },
});
UserSchema.plugin(passport);
var user = mongoose.model("User", UserSchema);
module.exports = user;
