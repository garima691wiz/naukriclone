import JobCard from "../components/jobs/JobCard";
import SearchBar from "../components/ui/SearchBar";
import NaukariFastForward from "../components/jobs/NaukariFastForward";
import Loader from "../components/ui/Loader";
// import { linkedSampleData as data } from "../utils/sampledata";
import { useSelector } from "react-redux";
import { useFetchJobsQuery } from "../features/jobsSearch/jobsSearchSlice";
import { useEffect } from "react";

function JobsPage() {
  const params = useSelector((state) => state.jobSearchParams);

  // console.log(params);

  const { data, error, isLoading, refetch, isFetching } =
    useFetchJobsQuery(params);

  useEffect(() => {
    if (params) {
      refetch();
    }
  }, [params]);

  if (error) {
    console.log("Error fetching jobs: ", error.message);
    return <p>{error}</p>;
  }
  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <div className="relative mt-12 flex w-full justify-center gap-8 px-2">
      <div>
        <SearchBar type="jobs" />
        <div className="space-y-6">
          {/* <Loader /> */}
          {data?.response.jobs?.map((jobData, index) => (
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
