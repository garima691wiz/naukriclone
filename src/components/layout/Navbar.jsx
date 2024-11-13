import { useState } from "react";
import { HiMenu } from "react-icons/hi"; // Import the Menu icon
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isloggedIn] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/images/logo/logo.svg"
                alt="Naukari logo"
                className="w-22 h-8"
              />
            </Link>
          </div>

          {/* Menu Items for Desktop */}
          <div className="hidden items-center space-x-8 font-semibold md:flex">
            <Link to="/Jobs" className="text-gray-700 hover:text-blue-600">
              Jobs
            </Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600">
              Companies
            </Link>
            <Link
              to="naukariServices"
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600">
              For employers
            </Link>
            {!isloggedIn ? (
              <>
                <Link
                  to="/auth/login"
                  className="rounded-full border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="rounded-full bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                  Register
                </Link>
              </>
            ) : (
              <Link
                to="/user/profile"
                className="text-gray-700 hover:text-blue-600"
              >
                Profile
              </Link>
            )}
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <HiMenu className="h-6 w-6" /> {/* Use React icon here */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/Jobs"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Jobs
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Companies
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Services
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            For employers
          </Link>
          {!isloggedIn ? (
            <>
              <Link
                to="/auth/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Register
              </Link>
            </>
          ) : (
            <Link
              to="/user/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              profile
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
