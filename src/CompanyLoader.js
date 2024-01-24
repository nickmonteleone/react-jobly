import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import JoblyApi from "./api";
import LoadingSpinner from "./LoadingSpinner";

/** CompanyLoader component to get company data based on url param
 *
 * Props:
 * - None
 *
 * State:
 * - companyData ({companyData, ...})
 * - showLoading (true/false)
 *
 * RoutesList -> CompanyLoader -> CompanyDetail
 */

function CompanyLoader() {
  const { companyHandle } = useParams();
  const [companyData, setCompanyData] = useState();
  const [showLoading, setShowLoading] = useState(true);

  console.log("companyLoader rendered:", companyHandle, companyData);

  useEffect(function getCompanyDataOnMount() {
    console.log('useEffect called');
    async function getCompanyData() {
      const companyDataResult = await JoblyApi.getCompany(companyHandle);
      setCompanyData(companyDataResult);
      setShowLoading(false);
    }
    getCompanyData();
  }, []);

  return (
    <div className="CompanyLoader">
      {showLoading
        ? <LoadingSpinner />
        : <CompanyDetail companyData={companyData} />
      }
    </div>
  );
}

export default CompanyLoader;