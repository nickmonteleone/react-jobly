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
      Sorry, no results found.
    </div>
  )
}

export default NoSearchResults;