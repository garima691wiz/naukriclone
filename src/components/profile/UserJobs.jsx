import { useState } from "react";
import { samplejobsData } from "../../utils/sampledata";
import JobCard from "../jobs/JobCard";

function UserJobs() {
  const [category, setCategory] = useState("savedJobs");
  // placeholder data change it accordingly
  const [curJobs] = useState(samplejobsData);

  function handleSelect(e) {
    setCategory(e.target.value);
    console.log(e.target.value);
    // update jobs based on category selection
    // change curJobs state accordingly
  }

  return (
    <div>
      <div>
        <select
          name="category Select"
          id=""
          className="mb-6 w-full max-w-2xl p-2 text-center font-semibold outline-none"
          value={category}
          onChange={handleSelect}
        >
          <option value="savedJobs">Saved Jobs</option>
          <option value="appliedJobs">Applied Jobs</option>
        </select>
      </div>
      <div className="space-y-6">
        {/* <Loader /> */}
        {curJobs?.data.map((jobData, index) => (
          <JobCard key={index} jobData={jobData} />
        ))}
      </div>
    </div>
  );
}

export default UserJobs;
