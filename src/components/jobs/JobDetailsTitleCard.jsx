/* eslint-disable react/prop-types */
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleSavedJob } from "../../features/savedjobs/savedJobsSlice";
import { applyJob } from "../../features/appliedJobs/appliedJobsSlice";

function JobDetailsTitleCard({ curJob = {} }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.isLoggedIn);

  // SAVING JOB FUNCTIONALITY
  const savedJobs = useSelector((state) => state.savedJobs.savedJobs || []);
  const isSaved = savedJobs.some((job) => job.job_id === curJob.job_id);

  const handleToggleSaveJob = function () {
    if (!loggedIn) {
      alert("You need to login to save jobs.");
      navigate("/auth/login");
      return;
    }
    dispatch(toggleSavedJob(curJob));
  };

  // APPLYING JOBS FUNCTIONSLITY
  const appliedJobs = useSelector((state) => state.appliedJobs.appliedJobs);
  const isApplied = appliedJobs.some((job) => job.job_id === curJob.job_id);

  function handleApply() {
    if (!loggedIn) {
      alert("You need to login to apply for this jobs.");
      navigate("/auth/login");
      return;
    }
    dispatch(applyJob(curJob));
  }

  const {
    // job_id,
    job_title,
    employer_name,
    job_posted_at_datetime_utc,
    job_city,
    job_state,
    job_country,
    job_is_remote,
  } = curJob || {};

  const postedDate = new Date(job_posted_at_datetime_utc).toLocaleDateString();
  return (
    <div className="mx-auto max-w-2xl rounded-lg border bg-white p-4 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <div className="flex flex-col space-y-3">
        <div>
          {/* Title and Save Button */}
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-semibold text-gray-800">{job_title}</h2>

            <div className="flex items-center">
              <CiCalendarDate className="mr-1 text-lg" />
              <span> {postedDate}</span>
            </div>
          </div>

          {/* Employer Name */}

          <p className="text-sm font-semibold">{employer_name}</p>
        </div>

        {/* Details Section */}
        <div className="flex flex-wrap gap-2 text-sm text-gray-600 md:gap-4">
          <div className="flex items-center">
            <CiLocationOn className="mr-1 text-lg" />
            <span>
              {job_is_remote
                ? "Remote"
                : `${job_city}, ${job_state}, ${job_country}`}
            </span>
          </div>
        </div>
        {/* <div className="h-1 bg-slate-50" /> */}
        <div className="flex gap-2 self-end">
          {loggedIn ? (
            <>
              <button
                className="rounded-full border border-blue-600 px-4 py-1 font-semibold text-blue-600 transition-all duration-200 hover:bg-blue-100 active:scale-95"
                onClick={handleToggleSaveJob}
              >
                {isSaved ? "Unsave" : "Save"}
              </button>
              <button
                disabled={isApplied}
                className="rounded-full border border-blue-600 bg-blue-500 px-4 py-1 font-semibold text-white transition-all duration-200 hover:bg-blue-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                onClick={handleApply}
              >
                {isApplied ? "Applied" : "Apply"}
              </button>
            </>
          ) : (
            <Link
              className="rounded-full border border-blue-600 px-4 py-1 font-semibold text-blue-600 transition-all duration-200 hover:bg-blue-100 active:scale-95"
              to={`/auth/login`}
            >
              Login To Apply
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobDetailsTitleCard;
