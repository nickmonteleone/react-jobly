import "./CompanyList.css"
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
 *
 *
 *
 * RoutesList -> CompanyList -> { SearchForm, CompanyCard }
 */

function CompanyList () {
  const [companies, setCompanies] = useState([]);
  console.log("companyList rendered, companies =", companies);

  useEffect(function getCompanyDataOnMount() {
    console.log('useEffect called')
    async function getCompanyData() {
      const companiesResult = await JoblyApi.getCompanies();
      setCompanies(companiesResult);
    }
    getCompanyData();
  },[]);

  async function searchForCompanies(nameLikeSearch) {
    const companiesSearchResult = await JoblyApi.getCompanies(nameLikeSearch);
    console.log('searchForCompanies',companiesSearchResult)
    setCompanies(companiesSearchResult);
  }

  return (
    <div className="CompanyList">
      <SearchForm handleSave={searchForCompanies}/>

      {companies.map(company =>
        <CompanyCard key={company.handle} companyData={company} />
      )}
    </div>
  );
}

export default CompanyList;