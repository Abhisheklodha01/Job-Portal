import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../helpers/server";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState<Array<Object>>([]);

  const searchJob = async () => {
    const { data } = await axios.get(`${backendUrl}/users/jobs`);
    setJobs(data.jobs_data);
  };
  useEffect(() => {
    searchJob();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-800 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {jobs.map((job:any) => (
            <div className="max-w-sm w-full bg-gray-600 border mt-8 m-3 md:m-5 ml-12
             border-gray-400 rounded-lg shadow-md sm:max-w-xs md:max-w-sm lg:max-w-md text-gray-200">
              <div className="p-4 mr-5">
                <h2 className="text-lg truncate">Job Title: {" "} {job?.job_name || job?.job_title}</h2>
                <h3 className="text-lg truncate">
                  Company: {job?.company_name || job?.company}
                </h3>
                <h5 className="text-lg truncate">
                  Location: {job?.location}
                </h5>
                <h5 className="text-lg truncate">
                  Qualification: {job?.qualification || `${job?.experience_level} Experience` }
                </h5>
                <h5 className="text-lg truncate">
                  Salary: {job?.salary || job?.salary_range || "Industry Standard"}
                </h5>

                <p className="text-sm mt-2 overflow-hidden h-24">
                  <h5 className="text-lg truncate">Description:</h5>
                  <h5>{job?.description || "No description provided by employer"}</h5>
                </p>

                <div className="mt-4 flex justify-between">
                  <Link
                    to={job?.apply_link || job?.job_link}
                    target="_blank"
                    className="px-6 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md"
                  >
                    Apply
                  </Link>
                  <span className="text-sm">
                    Last Updated: 1 days ago
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
