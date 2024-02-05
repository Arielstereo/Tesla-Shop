import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required!"],
      minLength: [3, "minimum 3 characters"],
      maxLength: [20, "maximum 20 characters"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required!"],
    },
    password: {
      type: String,
      required: [true, "password is required!"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },
  { versionKey: false }
);

const Users = models?.Users || model("Users", userSchema);
export default Users;
