import { Link } from "react-router-dom";

function JobDetailsDescreptionCard({ curJob = {} }) {
  const { job_description } = curJob || {};

  const points = job_description
    ?.split(/[•●◦▪▸]+/)
    .map((point) => point.trim())
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-2xl rounded-lg border bg-white p-4 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl md:p-6">
      <h2 className="mb-6 font-semibold">Job descreption</h2>
      <div className="space-y-3">
        {points?.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </div>
    </div>
  );
}

export default JobDetailsDescreptionCard;
