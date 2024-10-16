import mongoose, { model, Schema } from "mongoose";

const jobSchema = new Schema(
  {
    jobId: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    ctc: {
      type: String,
      required: true
    },
    applyLink: {
      type: String,
      required: true
    },
    companyName: {
      type: String,
      required: true
    },
    postedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

const JobModel = model("JobModel", jobSchema);

export default JobModel;
