import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";

interface SearchBarProps {
  onSearch: (location: string) => void;
  darkMode: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, darkMode }) => {
  const [location, setLocation] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <form onSubmit={handleSubmit}>
        <div
          className={`relative transform transition-all duration-300 ${
            isFocused ? "scale-[1.02]" : ""
          }`}
        >
          {/* Background card with glassmorphism */}
          <div
            className={`relative overflow-hidden rounded-2xl shadow-lg
            ${
              darkMode
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-white/50 hover:bg-white/70"
            } 
            backdrop-blur-lg
            border ${
              isFocused
                ? "border-blue-500/50"
                : darkMode
                ? "border-gray-700"
                : "border-gray-200/50"
            }
            transition-all duration-300`}
          >
            {/* Gradient border effect */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 ${
                isFocused ? "opacity-100" : ""
              }`}
            />

            {/* Search input and button container */}
            <div className="relative flex items-center p-2">
              <div
                className={`flex items-center flex-grow gap-3 px-4 py-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <MapPin className="w-5 h-5" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Enter location to find jobs..."
                  className={`w-full bg-transparent border-none outline-none placeholder-gray-400
                    ${darkMode ? "text-white" : "text-gray-900"}`}
                />
              </div>

              <button
                type="submit"
                className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2
                  transform transition-all duration-300
                  bg-gradient-to-r from-cyan-900 to-cyan-700
                  text-white
                  hover:shadow-lg hover:shadow-purple-500/25
                  hover:scale-[1.02] active:scale-[0.98]`}
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Optional: Quick search suggestions */}
      <div className="mt-3 flex flex-wrap gap-2 justify-center">
        {["Bengluru", "Hyderabad", "mumbai", "pune"].map(
          (suggestion) => (
            <button
              key={suggestion}
              onClick={() => {
                setLocation(suggestion);
                onSearch(suggestion);
              }}
              className={`px-3 py-1 rounded-full text-sm
              ${
                darkMode
                  ? "bg-gray-800/50 hover:bg-gray-700/50 text-gray-300"
                  : "bg-white/50 hover:bg-white/70 text-gray-600"
              } 
              backdrop-blur-sm border border-gray-200/10
              transition-all duration-300 hover:scale-105`}
            >
              {suggestion}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default SearchBar;
