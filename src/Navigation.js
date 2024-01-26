import "./Navigation.css";
import { NavLink, Link } from "react-router-dom";

/** Navigation component to go to different pages
 *
 * Props:
 * - user - null or {username, firstName, lastName, email, isAdmin}
 *
 * States:
 * - None
 *
 * App -> Navigation
*/

function Navigation({ logout, user }) {
  //TODO: adjust to use fragments instead of div when not needed
  return (
    <nav className="Navigation">
      <NavLink to="/">Jobly</NavLink>
      <div className="Navigation-pages">
      {
        user === null
        ? <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        : <div>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <Link onClick={logout} to='/'>Logout {user.username}</Link>
          </div>
      }
      </div>
    </nav>
  );
}

export default Navigation;
