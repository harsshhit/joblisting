import React from "react";
import { ChevronRight, Building2, MapPin } from "lucide-react";

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
}

interface JobListProps {
  jobs: Job[];
  onJobClick: (job: Job) => void;
  darkMode: boolean;
}

const JobList: React.FC<JobListProps> = ({ jobs, onJobClick, darkMode }) => {
  return (
    <div
      className={`w-full lg:w-1/3 p-8 rounded-2xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900/50 to-gray-800/30"
          : "bg-gradient-to-br from-white/50 to-gray-50/30"
      }`}
    >
      <h2
        className={`text-3xl font-bold mb-8 ${
          darkMode ? "text-white" : "text-gray-800"
        } flex items-center gap-2`}
      >
        <span className="bg-gradient-to-r from-cyan-900 to-cyan-700 bg-clip-text text-transparent">
          Available Positions
        </span>
      </h2>

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div
            key={job._id}
            onClick={() => onJobClick(job)}
            className={`group relative overflow-hidden rounded-xl p-6 cursor-pointer transition-all duration-500 ease-out
              ${
                darkMode
                  ? "bg-gray-800/50 hover:bg-gray-700/50"
                  : "bg-white/50 hover:bg-white"
              } backdrop-blur-lg
              border border-transparent hover:border-blue-500/20
              transform hover:-translate-y-1 hover:shadow-2xl
              hover:shadow-blue-500/10`}
            style={{
              animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
            }}
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-900/20 to-cyan-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex justify-between items-start">
              <div className="space-y-2">
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  } group-hover:text-blue-500 transition-colors duration-300`}
                >
                  {job.title}
                </h3>

                <div className="space-y-1">
                  <p
                    className={`flex items-center gap-2 text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    {job.company}
                  </p>

                  <p
                    className={`flex items-center gap-2 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </p>
                </div>
              </div>

              <ChevronRight
                className={`w-5 h-5 transform transition-transform duration-300
                ${darkMode ? "text-gray-400" : "text-gray-500"}
                group-hover:translate-x-1 group-hover:text-blue-500`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
