import "./Homepage.css"

/**
 * renders homepage
 *
 * props:none
 *
 * state: none
 *
 * RoutesList -> Homepage
 */

function Homepage({ message }) {
  console.log("Homepage component rendered");

  return (
    <div className='Homepage'>
    {message && <h2>{message}</h2>}
    <h1>
      Jobly
    </h1>
    <h2>Find jobs and stuff!</h2>
    </div>
  )
}

export default Homepage;