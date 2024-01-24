import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./api";

/** CompanyList component for page to show list of jobs with search
 *
 * Props:
 * -None
 *
 * States:
 * - companies [{ companyData }, { companyData }, ...]
 * - searchResults [{ companyData }, { companyData }, ...]
 *
 * RoutesList -> CompanyList -> { SearchForm, CompanyCard }
 */

function CompanyList () {

  return (
    <div className="CompanyList">
      <SearchForm />
      CompanyList component
    </div>
  );
}

export default CompanyList;