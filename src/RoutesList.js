import { Route, Routes, Navigate } from "react-router-dom";
import JobList from "./JobList";
import CompanyList from "./CompanyList";
import CompanyLoader from "./CompanyLoader";
import Homepage from "./Homepage";
import NotFound from "./NotFound";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

/** RoutesList component for navigation
 *
 * Props:
 * -user - null or {username, firstName, lastName, email, isAdmin }
 * -authenticate (callback function for login)
 * -signup (callback function for sign up)
 *
 * States:
 * -None
 *
 * App -> RoutesList ->
 * { JobList, CompanyList, CompanyLoader, Homepage, NotFound }
 */

function RoutesList({ user, authenticate, signup }) {

  // show login routes if user not signed in
  if (user === null) {
    return (
      <Routes>
        <Route path="/login" element={<Login authenticate={authenticate}/>} />
        <Route path="/signup" element={<Signup signup={signup}/>} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    );
  }

  // show app routes for signed in user
  return (
    <Routes>
      <Route path="/jobs" element={<JobList />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:companyHandle" element={<CompanyLoader />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default RoutesList;