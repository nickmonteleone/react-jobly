import './NoSearchResults.css';

/**
 * renders a no results message when no results are found
 *
 * props: none
 *
 * state: none
 *
 * {jobsList, companiesList } -> NoSearchResults *
 */


function NoSearchResults() {
  return (
    <div className='NoSearchResults'>
      <h2>Sorry, no results found.</h2>
    </div>
  )
}

export default NoSearchResults;