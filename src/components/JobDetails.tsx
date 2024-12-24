import React from "react";
import {
  MapPin,
  Briefcase,
  Globe,
  Calendar,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

interface Job {
  title: string;
  company: string;
  location: string;
  employment_type: string;
  experience: string;
  source: string;
  postedDateTime: string;
  description?: string;
  job_link: string;
  min_exp: string;
  max_exp: string;
  country: string;
  companyImageUrl: string;
}

interface JobDetailsProps {
  job: Job | null;
  darkMode: boolean;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job, darkMode }) => {
  if (!job) {
    return (
      <div
        className={`w-full lg:w-1/2 p-8 rounded-2xl ${
          darkMode
            ? "bg-gradient-to-br from-gray-900/50 to-gray-800/30"
            : "bg-gradient-to-br from-white/50 to-gray-50/30"
        } backdrop-blur-lg`}
      >
        <h2 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-900 to-cyan-700 bg-clip-text text-transparent">
            Job Details
          </span>
        </h2>
        <p
          className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          Select a job to view details
        </p>
      </div>
    );
  }

  const InfoItem = ({
    icon: Icon,
    label,
    value,
  }: {
    icon: any;
    label: string;
    value: string;
  }) => (
    <div
      className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-300
      hover:bg-gray-500/5"
    >
      <div
        className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
      >
        <Icon
          className={`w-5 h-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        />
      </div>
      <div>
        <p
          className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          {label}
        </p>
        <p
          className={`font-medium ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <div
      className={`w-full lg:w-2/3 p-8 rounded-2xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900/50 to-gray-800/30"
          : "bg-gradient-to-br from-white/50 to-gray-50/30"
      } backdrop-blur-lg`}
    >
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex items-center space-x-4">
          <img 
            src={job.companyImageUrl} 
            alt={`${job.company} logo`} 
            className="w-16 h-16 rounded-full border border-gray-300 shadow-md" 
          />
          <div>
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-cyan-900 to-cyan-700 bg-clip-text text-transparent">
                {job.title}
              </span>
            </h2>
            <p
              className={`text-xl mt-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {job.company}
            </p>
          </div>
        </div>

        {/* Action Button */}

        <a
          href={job.job_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-3 py-2 rounded-full text-sm font-medium
          bg-gradient-to-r from-cyan-900 to-cyan-700 text-white
          transform transition-all duration-300
          hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25
          active:scale-95 flex items-center justify-center gap-1"
        >
          <ExternalLink className="w-4 h-4" />
          Apply
        </a>

        {/* Info Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-2 p-4 rounded-xl ${
            darkMode ? "bg-gray-800/50" : "bg-white/50"
          } backdrop-blur-sm border border-gray-200/10`}
        >
          <InfoItem icon={MapPin} label="Location" value={job.location} />
          <InfoItem
            icon={Briefcase}
            label="Employment Type"
            value={job.employment_type}
          />
          <InfoItem
            icon={GraduationCap}
            label="Experience"
            value={`${job.min_exp} - ${job.max_exp} years`}
          />
          <InfoItem icon={Globe} label="Source" value={job.source} />
          <InfoItem
            icon={Calendar}
            label="Posted Date"
            value={new Date(job.postedDateTime).toLocaleDateString()}
          />
        </div>

        {/* Description Section */}
        {job.description && (
          <div
            className={`mt-6 p-6 rounded-xl ${
              darkMode ? "bg-gray-800/50" : "bg-white/50"
            } backdrop-blur-sm border border-gray-200/10`}
          >
            <h4 className="text-lg font-semibold mb-3">Description</h4>
            <p
              className={`leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {job.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
