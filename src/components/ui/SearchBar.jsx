/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setSearchParams } from "../../features/jobsSearch/jobSearchParamsSlice";

function SearchBar({ type = "home" }) {
  // search bar for the jobs page
  const [searchedQuery, setSearchedQuery] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(e) {
    setSearchedQuery(e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault();
    console.log(searchedQuery);
    dispatch(setSearchParams({ queryString: searchedQuery }));
  }

  if (type === "jobs")
    return (
      <form
        onSubmit={handlesubmit}
        className="mx-auto mb-6 flex w-full max-w-2xl rounded-full shadow-md"
      >
        <input
          type="text"
          placeholder="Enter skills / role"
          className="w-full rounded-full px-3 text-gray-600 placeholder-gray-400 focus:outline-none"
          onChange={handleInputChange}
        />
        <button className="rounded-full bg-blue-600 px-6 py-2 text-white">
          <FiSearch />
        </button>
      </form>
    );
  // default search bar for the home page
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Search Bar Section */}
      <div className="S mx-auto flex w-full max-w-3xl items-center space-x-2 rounded-full bg-white p-4 shadow-lg md:space-x-4">
        <FiSearch className="text-lg text-gray-400" />
        <input
          type="text"
          placeholder="Enter skills / role"
          className="w-4 flex-grow text-gray-600 placeholder-gray-400 focus:outline-none sm:w-auto"
        />
        <div className="h-6 border-l border-gray-300"></div>
        <select className="border-none text-gray-600 focus:outline-none">
          {/* <option>Select experience</option> */}
          <option>Fresher</option>
          <option>1-3 years</option>
          <option>3-5 years</option>
          <option>5+ years</option>
        </select>
        <div className="hidden h-6 border-l border-gray-300 md:block"></div>
        <input
          type="text"
          placeholder="Enter location"
          className="hidden flex-grow text-gray-600 placeholder-gray-400 focus:outline-none md:block"
        />
        <button className="hidden rounded-full bg-blue-600 px-6 py-2 text-white md:block">
          Search
        </button>
      </div>

      <button className="rounded-full bg-blue-600 px-6 py-2 text-white md:hidden">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
