import { useState } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

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

function CompanyList ({ companies, searchResults }) {
  return (
    <div className="CompanyList">
    </div>
  );
}

export default CompanyList;