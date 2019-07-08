const { Schema, model } = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    username: String,
    password: String,
    role: {
      type: String,
      enum: ["Company", "Guest", "Admin"],
      default: "Guest"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(plm, { usernameField: "username" });
module.exports = model("User", userSchema);
