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
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </nav>
  );
}

export default Navigation;
