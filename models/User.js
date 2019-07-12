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
<<<<<<< HEAD
    concursos: [{ type: Schema.Types.ObjectId, ref: "Post" }]
=======

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
>>>>>>> fdee31db0c98745e41a2b86004f704333f5d3f8f
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(plm, { usernameField: "email" });
module.exports = model("User", userSchema);
