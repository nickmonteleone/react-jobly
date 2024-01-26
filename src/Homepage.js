import "./Homepage.css";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import userContext from "./userContext";

/**
 * renders homepage
 *
 * props: none
 *
 * state: none
 *
 * RoutesList -> Homepage
 */

function Homepage() {
  const { user, isLoggedIn } = useContext(userContext);
  console.log("Homepage - user:", user);

  return (
    <div className='Homepage'>
      <h1>
        Jobly
      </h1>
      <h2>Find jobs and stuff!</h2>
      { isLoggedIn ?
      <h3>
        Hi {user.username}!
      </h3> :
        <div className="Homepage-buttons">
          <Link to="/signup">
            <button
              className="btn btn-secondary">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button
              className="btn btn-secondary">
              Login
            </button>
          </Link>
        </div>
      }
    </div>

  );
}

export default Homepage;