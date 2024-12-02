import React from 'react';
import { FaUserAlt, FaBell, FaHandHoldingMedical, FaList, FaUsers } from 'react-icons/fa';
import { Dropdown, Navbar } from 'flowbite-react';
import { LogoutOptions, useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const MyNavbar: React.FC = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <Navbar fluid className="bg-gray-700 px-4 py-2 shadow-lg">
      {/* Brand Section */}
      <Navbar.Brand href="/" className="flex items-center text-white">
        <FaHandHoldingMedical className="mr-2 text-2xl" />
        <span className="text-xl font-semibold">Revive</span>
      </Navbar.Brand>

      {/* Main Navbar Links */}
      <div className="flex-1 flex items-center justify-center space-x-6">
        <Link
          to="/portfolio"
          className="flex items-center text-white hover:text-blue-300 no-underline"
        >
          <FaList className="mr-2" />
          Portfolio
        </Link>
        <Link
          to="/team"
          className="flex items-center text-white hover:text-blue-300 no-underline"
        >
          <FaUsers className="mr-2" />
          Team
        </Link>
      </div>

      {/* Right Section (Icons and Authentication) */}
      <div className="flex items-center gap-4">
        {!isAuthenticated && (
          <button
            className="flex items-center text-white text-md hover:text-blue-300"
            onClick={() => loginWithRedirect()}
          >
            <FaBell className="mr-2" />
            Login
          </button>
        )}

        {/* Dropdown Menu for Profile */}
        {isAuthenticated && (
          <Dropdown inline label={<FaUserAlt className="text-white text-md cursor-pointer" />}>
            <Dropdown.Item>
              <span>Profile</span>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <span onClick={() => logout({ returnTo: window.location.origin } as LogoutOptions)}>
                Logout
              </span>
            </Dropdown.Item>
          </Dropdown>
        )}
      </div>
    </Navbar>
  );
};

export default MyNavbar;
