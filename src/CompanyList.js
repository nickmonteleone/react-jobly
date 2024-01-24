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
 * //TODO: don't need searchResults, can update on next render.
 *
 * RoutesList -> CompanyList -> { SearchForm, CompanyCard }
 */

function CompanyList () {
  // TODO: add console log and CompanyCard
  return (
    <div className="CompanyList">
      <SearchForm />
      CompanyList component
    </div>
  );
}

export default CompanyList;