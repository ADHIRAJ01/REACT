const mongoose = require("mongoose");

const dbSchema = mongoose.Schema({
  name: {
    type: "string",
    // required: true,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

const Connect = mongoose.model("watchList", dbSchema);    //schema used in front end searchbox

module.exports = Connect;
