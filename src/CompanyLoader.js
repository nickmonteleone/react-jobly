import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  //navigation hook for not found
  const navigate = useNavigate();

  console.log("companyLoader rendered:", companyHandle, companyData);

  useEffect(function getCompanyDataOnMount() {
    console.log('useEffect called');
    async function getCompanyData() {
      try {
        const companyDataResult = await JoblyApi.getCompany(companyHandle);
        console.log("companyDataResult", companyDataResult);
        setCompanyData(companyDataResult);
        setShowLoading(false);
      }
      catch (err) {
        // On error redirect to not found page.
        console.log("Error fetching company:", err);
        navigate(`/company-not-found/${companyHandle}`)
      }
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