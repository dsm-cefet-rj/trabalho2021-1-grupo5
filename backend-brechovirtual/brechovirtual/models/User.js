const normalize = require("normalize-mongoose");
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const passport = require("passport-local-mongoose");

//TODO adicionar um atributo isSeller que mostrar se o usuario tem perfil vendedor
const UserSchema = new schema({
  name: {
    type: String,
    required: true,
  },
});
UserSchema.plugin(passport);
var user = mongoose.model("User", UserSchema);
module.exports = user;
