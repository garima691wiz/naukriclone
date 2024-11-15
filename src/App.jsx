import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import SomethingWentWrong from "./pages/SomethingWentWrong";

const Wrapper = lazy(() => import("./components/layout/Wrapper"));
const Loader = lazy(() => import("./components/ui/Loader"));
const Protected = lazy(() => import("./components/auth/Protected"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const HomePage = lazy(() => import("./pages/HomePage"));
const JobsPage = lazy(() => import("./pages/JobsPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const JobDetailsPage = lazy(() => import("./pages/JobDetailsPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

function App() {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={<SomethingWentWrong />}>
        <Suspense fallback={<Loader />}>
          <Wrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
              <Route path="/naukariServices" element={<ServicesPage />} />
              <Route path="/auth/register" element={<RegisterPage />} />
              <Route path="/auth/login" element={<LoginPage />} />
              <Route
                path="/user/profile"
                element={
                  <Protected>
                    <ProfilePage />
                  </Protected>
                }
              />
              {/* Default route (redirect to home if no match) */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Wrapper>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
