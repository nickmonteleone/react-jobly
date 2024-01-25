import "./LoadingSpinner.css"

/**
 * renders a loading spinner when data is loading
 *
 * props: none
 *
 * state: none
 *
 * {JobList, CompaniesList, Company} -> LoadingSpinner
 */
function LoadingSpinner() {
  console.log("LoadingSpinner rendered");
  return (
    <div className='LoadingSpinner'>
      <h2>Loading...</h2>
    </div>
  )
}

export default LoadingSpinner;