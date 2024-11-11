import jobs_data from "../jobs_data.js";

export const searchJob = async (req, res) => {
    return res.status(201).json({
      jobs_data
    })
};


