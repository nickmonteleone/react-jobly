/**
 * job component for showing job info
 *
 * props: jobData {...}
 *
 * state: none
 *
 * jobCardList -> JobCard
 *
 */


function JobCard({jobData}) {
  const {title, salary, equity} = jobData;


  return (
    <div className='JobCard'>
      <div>{title}</div>
      <div>{salary}</div>
      <div>{equity}</div>
    </div>
  )
}

export default JobCard;