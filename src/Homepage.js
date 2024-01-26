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
  const { errors, user, message } = useContext(userContext);
  console.log("Homepage - Errors: ", errors, "user:", user);
  console.log("homepage message:", message);

  return (
    <div className='Homepage'>
      {errors &&
        <ul>
          <h3>Errors:</h3>
          {
            errors.map((err, idx) =>
              <li key={idx}>{err}</li>
            )
          }
        </ul>
      }
      {message &&
        <h3>{message}</h3>
      }
      <h1>
        Jobly
      </h1>
      <h2>Find jobs and stuff!</h2>
      {user === null &&
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