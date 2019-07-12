const { Schema, model } = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["Company", "User", "Admin"],
      default: "User"
    },

    firstName: {
      type: String,
      require: false
    },
    lastName: {
      type: String,
      required: false
    },
    companyName: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(plm, { usernameField: "email" });
module.exports = model("User", userSchema);
