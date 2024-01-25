import "./JobCard.css";

/**
 * job component for showing job info
 *
 * props: jobData { title, salary, equity, companyName}
 *  (salary, equity, and companyName are optional)
 *
 * state: none
 *
 * jobCardList -> JobCard
 */

function JobCard({ title, salary=null, equity=null, companyName=null }) {
  // Only show companyName if not null. Replace salary/equity with N/A if null.
  return (
    <div className='JobCard'>
      <div className="JobCard-title">{title}</div>
      {(companyName !== null) &&
        <div className='JobCard-companyName'>{companyName}</div>
      }
      <div className="JobCard-text">
        <div>Salary: {(salary !== null) ? salary : 'N/A'}</div>
        <div>Equity: {(equity !== null) ? equity : 'N/A'}</div>
      </div>
    </div>
  );
}

export default JobCard;