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


function JobCard({jobData}) {
  const {title, salary, equity} = jobData;

  //TODO: might need way to show company on joblist but not on companydetail
  return (
    <div className='JobCard'>
      <div className="JobCard-title">{title}</div>
      <div className="JobCard-text">
        <div>Salary: {salary}</div>
        <div>Equity: {equity}</div>
      </div>
    </div>
  )
}

export default JobCard;