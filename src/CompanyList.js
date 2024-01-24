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
  console.log("companyList rendered =", companies);

  useEffect(function getCompanyDataOnMount() {
    async function getCompanyData() {

      const companiesResult = await JoblyApi.getCompanies();
      console.log(companiesResult);
      setCompanies(companiesResult);
    }
    getCompanyData();
  },[]);




  //map through company data in render



  // TODO: add console log and CompanyCard
  return (
    <div className="CompanyList">
      <SearchForm />

      {companies.map(company => company.name)}
    </div>
  );
}

export default CompanyList;