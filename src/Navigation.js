import "./Navigation.css";
import { NavLink } from "react-router-dom";

/** Navigation component to go to different pages
 *
 * Props:
 * - None
 *
 * States:
 * - None
 *
 * App -> Navigation
*/

function Navigation() {
  return (
    <nav className="Navigation">
      <NavLink to="/">Jobly</NavLink>
      <div className="Navigation-pages">
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/companies/baker-santos">baker-santos</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
