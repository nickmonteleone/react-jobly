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

  //TODO: might need way to show company on joblist but not on companydetail
  return (
    <div className='JobCard'>
      <div className="JobCard-title">{title}</div>
      {companyName && <div>{companyName}</div>}
      <div className="JobCard-text">
        <div>Salary: {salary}</div>
        <div>Equity: {equity}</div>
      </div>
    </div>
  )
}

export default JobCard;