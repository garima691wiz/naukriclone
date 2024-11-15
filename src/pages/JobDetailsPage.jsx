import { useLocation } from "react-router-dom";
// import { samplejobsData } from "../utils/sampledata";
// import { useEffect, useState } from "react";
import JobDetailsTitleCard from "../components/jobs/jobDetailsTitleCard";
import JobDetailsDescreptionCard from "../components/jobs/JobDetailsDescreptionCard";
import NaukariFastForward from "../components/jobs/NaukariFastForward";
import BeAware from "../components/jobs/BeAware";

function JobDetailsPage() {
  // const { jobId } = useParams();
  // const [curJob, setCurJob] = useState({});

  const location = useLocation();
  const { jobData: curJob } = location.state || {};

  // useEffect(() => {
  //   const job = samplejobsData.data.find((job) => job.job_id === jobId);
  //   setCurJob(job);
  // }, [jobId]);

  console.log(JSON.stringify(curJob));
  // console.log(jobId);

  return (
    <div className="mt-12 flex justify-center gap-6">
      <div className="space-y-6">
        <JobDetailsTitleCard curJob={curJob} />
        <JobDetailsDescreptionCard curJob={curJob} />
      </div>
      <div className="sticky top-36 hidden md:block">
        <div className="sticky top-36 flex flex-col gap-6">
          <NaukariFastForward />
          <BeAware />
        </div>
      </div>
    </div>
  );
}

export default JobDetailsPage;
