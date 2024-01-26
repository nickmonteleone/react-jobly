import "./Homepage.css"
import { useContext } from 'react';
import userContext from "./userContext";

/**
 * renders homepage
 *
 * props:none
 *
 * state: none
 *
 * RoutesList -> Homepage
 */

function Homepage() {
  const { errors } = useContext(userContext);
  console.log("Homepage component rendered");
//if errors render them

  return (
    //TODO: errors not showing up on homepage

    <div className='Homepage'>
    {errors && <h2>{errors[0]}</h2>}
    <h1>
      Jobly
    </h1>
    <h2>Find jobs and stuff!</h2>
    </div>
  )
}

export default Homepage;