import mongoose, { model, Schema } from "mongoose";
import {
  addressSchema,
  experienceSchema,
  qualificationSchema,
} from "./userDetails.model";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
    },
    qualifications: [qualificationSchema],
    experience: [experienceSchema],
    address: [addressSchema],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
