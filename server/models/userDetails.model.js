import mongoose, { Schema } from "mongoose";

export const qualificationSchema = new mongoose.Schema({
  degree: {
    type: String,
    default: null,
  },
  institution: {
    type: String,
    default: null,
  },
  university: {
    type: String,
    default: null,
  },
  startDate: {
    type: Date,
    default: null,
  },
  endDate: {
    type: Date,
    default: null,
  },
});

// Schema for Experience
export const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    default: null,
  },
  startDate: {
    type: Date,
    default: null,
  },
  endDate: {
    type: Date,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
});

// Schema for Address
export const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    default: null,
  },
  city: {
    type: String,
    default: null,
  },
  state: {
    type: String,
    default: null,
  },
  zipCode: {
    type: String,
    default: null,
  },
  country: {
    type: String,
    default: null,
  },
});
