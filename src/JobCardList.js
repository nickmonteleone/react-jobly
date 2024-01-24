import JobCard from "./JobCard";

/** JobCardList component to show a list of job cards
 *
 * Props:
 * - jobs [jobData {...},...]
 *
 * States:
 * - None
 *
 * JobList -> JobCardList -> JobCard
 */

function JobCardList ({ jobs }) {
  return (
    <div className="JobCardList">
      {jobs.map(job =>
        <JobCard
          jobData={job}
          key={job.id}
      />)}
    </div>
  );
}

export default JobCardList;