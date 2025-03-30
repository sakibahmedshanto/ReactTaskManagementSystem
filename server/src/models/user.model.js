const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { decode } = require("jsonwebtoken");

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

Schema.pre("save", async function (next) {
    const user=this;
  if(user.isModified("password")){
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});

Schema.methods.comparePassword = async function (string_pass) {

}

const model = mongoose.model("User", Schema);

module.exports = model;
