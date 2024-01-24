import { useState } from "react";
import { useParams } from "react-router-dom";
import CompanyDetail from "./CompanyDetail"

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
  const { companyName } = useParams();
  return (
    <div className="CompanyLoader">
      CompanyLoader component. companyName: {companyName}
    </div>
  );
}

export default CompanyLoader;