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
  const { name, description, logoUrl } = companyData;

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
    </div>
  );
}

export default CompanyDetail;
