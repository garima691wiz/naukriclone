// import { Suspense } from "react";
// import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import Wrapper from "./components/layout/Wrapper";
import ServicesPage from "./pages/ServicesPage";
import Register from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import JobDetailsPage from "./pages/JobDetailsPage";

import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      {/* <ErrorBoundary FallbackComponent={""}> */}
      {/* <Suspense fallback={""}> */}
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
          <Route path="/naukariServices" element={<ServicesPage />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/user/profile" element={<ProfilePage />} />
        </Routes>
      </Wrapper>
      {/* </Suspense> */}
      {/* </ErrorBoundary> */}
    </Router>
  );
}

export default App;
