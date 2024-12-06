import React from 'react';
import { FaUserAlt, FaHandHoldingMedical } from 'react-icons/fa';
import { Dropdown, Navbar } from 'flowbite-react';
import { LogoutOptions, useAuth0 } from '@auth0/auth0-react';
import { Link, useLocation } from 'react-router-dom';

const MyNavbar: React.FC = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const location = useLocation();

  const getLinkClass = (path: string) =>
    location.pathname === path
      ? 'text-gray-900 font-semibold' // Active link style
      : 'text-gray-500 hover:text-gray-700'; // Inactive link style

  return (
    <Navbar fluid className="bg-slate-100 px-4 py-2 shadow-lg">
      {/* Brand Section */}
      <Navbar.Brand href="/" className="flex items-center text-gray-500">
        <FaHandHoldingMedical className="mr-2 text-2xl" />
        <span className="text-xl font-semibold">Revive</span>
      </Navbar.Brand>

      {/* Main Navbar Links */}
      <div className="flex-1 flex items-center justify-end space-x-6 mr-4">
        <Link to="/" className={`flex items-center no-underline ${getLinkClass('/')}`}>
          Home
        </Link>

        <Link to="/portfolio" className={`flex items-center no-underline ${getLinkClass('/portfolio')}`}>
          Portfolio
        </Link>

        <Link to="/team" className={`flex items-center no-underline ${getLinkClass('/team')}`}>
          Team
        </Link>
      </div>

      {/* Right Section (Icons and Authentication) */}
      <div className="flex items-center gap-4">
        {!isAuthenticated && (
          <button
            className="flex items-center text-gray-500 text-md hover:text-gray-700"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}

        {/* Dropdown Menu for Profile */}
        {isAuthenticated && (
          <Dropdown inline label={<FaUserAlt className="text-gray-500 text-md cursor-pointer" />}>
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
