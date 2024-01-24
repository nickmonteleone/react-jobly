import "./CompanyCard.css";
import { Link } from "react-router-dom";

/** Renders info about a single company
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

  const { name, handle, description, logoUrl } = companyData;

  return (
    <Link
      className='CompanyCard text-reset text-decoration-none'
      to={`/companies/${handle}`}>
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
    </Link>
  );
}


export default CompanyCard;