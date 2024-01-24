import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CompanyDetail from "./CompanyDetail"
import JoblyApi from "./api";

/** CompanyLoader component to get company data based on url param
 *
 * Props:
 * - None
 *
 * State:
 * - companyData ({companyData, ...})
 *
 * RoutesList -> CompanyLoader -> CompanyDetail
 */

function CompanyLoader () {
  const { companyHandle } = useParams();
  const [companyData, setCompanyData] = useState();

  console.log("companyLoader rendered:", companyHandle, companyData);

  useEffect(function getCompanyDataOnMount() {
    console.log('useEffect called')
    async function getCompanyData() {
      const companyDataResult = await JoblyApi.getCompany(companyHandle);
      setCompanyData(companyDataResult);
    }
    getCompanyData();
  },[]);

  return (
    <div className="CompanyLoader">
      CompanyLoader component. companyHandle: {companyHandle}
      {
        companyData && <CompanyDetail companyData={companyData}/>
      }
    </div>
  );
}

export default CompanyLoader;