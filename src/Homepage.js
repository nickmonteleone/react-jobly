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
  const { errors, user, message } = useContext(userContext);
  console.log("Homepage - Errors: ", errors, "user:", user);
  console.log("homepage message:", message);

  return (
    <div className='Homepage'>
    { errors &&
      <ul>
        <h3>Errors:</h3>
        {
          errors.map(err =>
          <li>{err}</li>
          )
        }
      </ul>
      }
    { message &&
      <h3>{message}</h3>
    }
    <h1>
      Jobly
    </h1>
    <h2>Find jobs and stuff!</h2>
    </div>
  )
}

export default Homepage;