import mongoose from "mongoose";  //Database for Users data

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "", //Default value as empty string...once we will get a profile picture ...we will update this value
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
