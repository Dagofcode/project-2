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
    concursos: [{ type: Schema.Types.ObjectId, ref: "Post" }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(plm, { usernameField: "email" });
module.exports = model("User", userSchema);
