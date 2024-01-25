import "./CompanyList.css"
import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import LoadingSpinner from "./LoadingSpinner";
import JoblyApi from "./api";
import NoSearchResults from "./NoSearchResults";

/** CompanyList component for page to show list of jobs with search
 *
 * Props:
 * -None
 *
 * States: //TODO: list out what company data looks like
 * - companies [{ companyData }, { companyData }, ...]
 * - showLoading (true/false)
 *
 *
 * RoutesList -> CompanyList ->
 * { SearchForm, CompanyCard, LoadingSpinner, NoSearchResults }
 */

function CompanyList () {
  const [companies, setCompanies] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  console.log("CompanyList rendered, companies =", companies);

  /** Get company list (optional search) */
  async function getCompanies(nameLikeSearch=null) {
    const companiesResult = await JoblyApi.getCompanies(nameLikeSearch);
    console.log('companiesResult', companiesResult)

    setCompanies(companiesResult);
    setShowLoading(false);
  }

  // Get all companies on initial render.
  useEffect(function getCompaniesOnMount() {
    console.log('useEffect called')
    getCompanies();
  },[]);

  return (

    <div className="CompanyList">
      <SearchForm handleSave={getCompanies}/>
      {showLoading
        ? <LoadingSpinner />
        : companies.map(company =>
          <CompanyCard key={company.handle} companyData={company} />
          )
        }
        {(companies.length < 1 && !showLoading) && <NoSearchResults /> }
    </div>
  );
}

export default CompanyList;