import { getByTitle } from "@testing-library/react";
import JobCard from "./JobCard";

/** JobCardList component to show a list of job cards
 *
 * Props:
 * - jobs [jobData {...},...] //TODO: add what keys need to be passed
 *
 * States:
 * - None
 *
 * JobList, companyDetail -> JobCardList -> JobCard
 */

function JobCardList ({ jobs }) {
  // TODO: deconstruct into title, salary, ....
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