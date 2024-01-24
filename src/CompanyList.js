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

// function CompanyList ({}) {
//   const [companies, setCompanies] = useState();

//   useEffect(function fetchCompanyDataWhenMounted() {
//     async function fetchCompanyData() {
//       const companiesResult = await JoblyApi.getAllCompanies();
//       setCompanies(companiesResult);
//     }
//     fetchCompanyData();
//   },[]);


//   return (
//     <div className="CompanyList">
//       {companies.map(company =>
//         <div key={company.handle},
//         <div>company.name</div>,
//         <div>company.description</div>)}
//     </div>
//   );
// }

export default CompanyList;