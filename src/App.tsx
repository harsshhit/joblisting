import React, { useState, useEffect } from "react";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import SearchBar from "./components/SearchBar";
import DarkModeToggle from "./components/DarkModeToggle";
import Particles from "./components/Particles";

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  employment_type: string;
  experience: string;
  source: string;
  postedDateTime: string;
  description?: string;
}

const App: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchLocation, setSearchLocation] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, [searchLocation]);

  const fetchJobs = async () => {
    try {
      const url = searchLocation
        ? `http://localhost:5000/api/jobs?location=${encodeURIComponent(
            searchLocation
          )}`
        : "http://localhost:5000/api/jobs";
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleSearch = (location: string) => {
    setSearchLocation(location);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Particles />
      <div className="container mx-auto p-4 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-900 to-cyan-700">
            Job Board
          </h1>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <SearchBar onSearch={handleSearch} darkMode={darkMode} />
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <JobList
            jobs={jobs}
            onJobClick={handleJobClick}
            darkMode={darkMode}
          />
          <JobDetails job={selectedJob} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default App;
