import "./JobCard.css";

/**
 * job component for showing job info
 *
 * props: jobData { title, salary, equity, companyName(optional) }*
 *
 * state: none
 *
 * jobCardList -> JobCard
 *
 */

function JobCard({ title, salary, equity, companyName }) {
  // TODO: add conditional for salary and equity if not found
  console.log('salary', salary);
  console.log('equity', equity);
  return (
    <div className='JobCard'>
      <div className="JobCard-title">{title}</div>
      {companyName &&
        <div className='JobCard-companyName'>{companyName}</div>
      }
      <div className="JobCard-text">
        <div>Salary: {(salary || salary >= 0) ? salary : 'N/A'}</div>
        <div>Equity: {(equity || equity >= 0) ? equity : 'N/A'}</div>
      </div>
    </div>
  );
}

export default JobCard;