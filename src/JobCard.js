import "./JobCard.css"

/**
 * job component for showing job info
 *
 * props: jobData { title, salary, equity, companyName }
 * //TODO: add that companyName is optional
 * state: none
 *
 * jobCardList -> JobCard
 *
 */

function JobCard({title, salary, equity, companyName}) {
  // TODO: add conditional for salary and equity if not found
  return (
    <div className='JobCard'>
      <div className="JobCard-title">{title}</div>
      {companyName &&
        <div className='JobCard-companyName'>{companyName}</div>
      }
      <div className="JobCard-text">
        <div>Salary: {salary}</div>
        <div>Equity: {equity}</div>
      </div>
    </div>
  )
}

export default JobCard;