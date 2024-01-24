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
      <div className="CompanyCard-header">
        <div className="CompanyCard-name">
          {name}
        </div>
        {logoUrl &&
          <img src={logoUrl} alt={name} className="CompanyCard-image"></img>}
      </div>
      <p className="CompanyCard-description">
        {description}
      </p>
      <JobCardList jobs={jobs}/>
    </div>
  );
}

export default CompanyDetail;
