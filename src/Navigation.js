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
    <ul>
      <li><NavLink to="/">Jobly</NavLink></li>
      <li><NavLink to="/companies">Companies</NavLink></li>
      <li><NavLink to="/jobs">Jobs</NavLink></li>
    </ul>
  );
}

export default Navigation;
