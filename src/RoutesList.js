import { Route, Routes, Navigate } from "react-router-dom";
import JobList from "./JobList";
import CompanyList from "./CompanyList";
import CompanyLoader from "./CompanyLoader";
import Homepage from "./Homepage";
import NotFound from "./NotFound";

/** RoutesList component for navigation
 *
 * Props:
 * -None
 *
 * States:
 * -None
 *
 * App -> RoutesList ->
 * { JobList, CompanyList, CompanyLoader, Homepage, NotFound }
 */

function RoutesList() {
  return (
    <Routes>
      <Route path="/jobs" element={<JobList />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:companyName" element={<CompanyLoader />} />
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesList;