import "./CompanyCard.css"

/**
 * renders info about a single company
 *
 * props: companyData { handle, name, description, numEmployees, logoUrl }
 *
 * state: none
 *
 * CompanyList -> CompanyCard
 *
 */

function CompanyCard({ companyData }) {
  console.log("companyCard rendered, companyData =", companyData);

  const { name, description, logoUrl } = companyData;
  return (
    <div className='CompanyCard'>
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


export default CompanyCard;