import { useState } from "react";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";

/** JobList component for page to show list of jobs with search
 *
 * Props:
 * -None
 *
 * States:
 * - jobs [{ jobData }, { jobData }, ...]
 * - searchResults [{ jobData }, { jobData }, ...]
 *
 * RoutesList -> JobList -> { SearchForm, JobCardList }
 */

function JobList () {
  return (
    <div className="JobList">
      <SearchForm />
      JobList component
    </div>
  );
}

export default JobList;