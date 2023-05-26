const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    age: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", userSchema);
