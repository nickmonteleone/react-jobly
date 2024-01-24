import "./JobCard.css"

/**
 * job component for showing job info
 *
 * props: jobData { id, title, salary, equity, companyHandle, companyName }
 *
 * state: none
 *
 * jobCardList -> JobCard
 *
 */

// title, salary, equity, company name
function JobCard({title, salary, equity, companyName}) {
  // const {title, salary, equity} = jobData;


  return (
    <div className='JobCard'>
      <div className="JobCard-title">{title}</div>
      {companyName && <div className='JobCard-companyName'>{companyName}</div>}
      <div className="JobCard-text">
        <div>Salary: {salary}</div>
        <div>Equity: {equity}</div>
      </div>
    </div>
  )
}

export default JobCard;