// import Loader from "../components/ui/Loader";
// import { useState } from "react";
import { samplejobsData } from "../utils/sampledata";
import JobCard from "../components/jobs/JobCard";
import SearchBar from "../components/ui/SearchBar";
import NaukariFastForward from "../components/jobs/NaukariFastForward";

// const initialFilters = {
//   page: 1,
//   date_posted: "all",
//   remoteOnly: false,
//   employment_types: "FULLTIME",
//   experience: "no_experience",
//   activelyHiring: "false",
//   distance: "200",
// };

function JobsPage() {
  // const [filters, setFilters] = useState(initialFilters);
  return (
    <div className="relative mt-12 flex w-full justify-center gap-8 px-2">
      <div>
        <SearchBar type="jobs" />
        <div className="space-y-6">
          {/* <Loader /> */}
          {samplejobsData.data.map((jobData, index) => (
            <JobCard key={index} jobData={jobData} />
          ))}
        </div>
      </div>
      <div className="sticky top-36 hidden md:block">
        <div className="sticky top-36">
          <NaukariFastForward />
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
