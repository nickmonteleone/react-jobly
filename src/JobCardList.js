import { getByTitle } from "@testing-library/react";
import JobCard from "./JobCard";

/** JobCardList component to show a list of job cards
 *
 * Props:
 * - jobs [{ id, title, salary, equity, companyHandle, companyName },...]
 *
 * States:
 * - None
 *
 * JobList, companyDetail -> JobCardList -> JobCard
 */

function JobCardList ({ jobs }) {

  return (
    <div className="JobCardList">
      {jobs.map(job =>
        <JobCard
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          companyName={job.companyName}
          key={job.id}
      />)}
    </div>
  );
}

export default JobCardList;