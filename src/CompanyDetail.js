import "./CompanyDetail.css"
import JobCardList from "./JobCardList";

/** ComapnyDetail component for page with details about company
 *
 * Props:
 * - companyData {...}
 *
 * States:
 * - None
 *
 * CompanyLoader -> CompanyDetail -> JobCardList
 */

function CompanyDetail ({ companyData }) {
  console.log("companyDetail rendered, companyData =", companyData);

  //TODO: update to have all data for detail page
  const { name, description, logoUrl, jobs } = companyData;

  return (
    <div className="CompanyDetail">
      <div className="CompanyDetail-header">
        <div className="CompanyDetail-name">
          {name}
        </div>
        {logoUrl &&
          <img src={logoUrl} alt={name} className="CompanyDetail-image"></img>}
      </div>
      <p className="CompanyDetail-description">
        {description}
      </p>
      <JobCardList jobs={jobs}/>
    </div>
  );
}

export default CompanyDetail;
