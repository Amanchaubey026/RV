import React, { useState } from 'react';
import { FaUserAlt, FaHandHoldingMedical, FaBars } from 'react-icons/fa';
import { Dropdown, Navbar, Drawer } from 'flowbite-react';
import { LogoutOptions, useAuth0 } from '@auth0/auth0-react';
import { Link, useLocation } from 'react-router-dom';

const MyNavbar: React.FC = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const getLinkClass = (path: string) =>
    location.pathname === path
      ? 'text-gray-900 font-semibold' // Active link style
      : 'text-gray-500 hover:text-gray-700'; // Inactive link style

  const NavLinks = () => (
    <>
      <Link 
        to="/" 
        className={`flex items-center no-underline ${getLinkClass('/')}`}
        onClick={() => setIsDrawerOpen(false)}
      >
        Home
      </Link>
      <Link 
        to="/portfolio" 
        className={`flex items-center no-underline ${getLinkClass('/portfolio')}`}
        onClick={() => setIsDrawerOpen(false)}
      >
        Portfolio
      </Link>
      <Link 
        to="/team" 
        className={`flex items-center no-underline ${getLinkClass('/team')}`}
        onClick={() => setIsDrawerOpen(false)}
      >
        Team
      </Link>
      <Link 
        to="/contact" 
        className={`flex items-center no-underline ${getLinkClass('/contact')}`}
        onClick={() => setIsDrawerOpen(false)}
      >
        Contact
      </Link>
    </>
  );

  return (
    <>
      <Navbar fluid className="bg-slate-100 px-4 py-2 shadow-lg">
        {/* Brand Section */}
        <Navbar.Brand href="/" className="flex items-center text-gray-500">
          <FaHandHoldingMedical className="mr-2 text-2xl" />
          <span className="text-xl font-semibold">Revive</span>
        </Navbar.Brand>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-6 mr-4">
          <NavLinks />
        </div>

        {/* Right Section (Icons and Authentication) */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsDrawerOpen(true)}
          >
            <FaBars className="text-xl" />
          </button>

          {/* Authentication Controls */}
          {!isAuthenticated && (
            <button
              className="hidden md:flex items-center text-gray-500 text-md hover:text-gray-700"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          )}

          {/* Dropdown Menu for Profile */}
          {isAuthenticated && (
            <Dropdown 
              inline 
              label={<FaUserAlt className="text-gray-500 text-md cursor-pointer" />}
            >
              <Dropdown.Item>
                <span>Profile</span>
              </Dropdown.Item>
              <Drawer.Divider />
              <Dropdown.Item>
                <span onClick={() => logout({ returnTo: window.location.origin } as LogoutOptions)}>
                  Logout
                </span>
              </Dropdown.Item>
            </Dropdown>
          )}
        </div>
      </Navbar>

      {/* Mobile Drawer */}
      <Drawer 
        open={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        position="right"
        className="md:hidden"
      >
        <Drawer.Header title="Menu" />
        <Drawer.Items>
          <div className="flex flex-col space-y-4 p-4">
            <NavLinks />
            
            {/* Mobile Authentication Controls */}
            {!isAuthenticated && (
              <button
                className="text-left text-gray-500 hover:text-gray-700"
                onClick={() => {
                  loginWithRedirect();
                  setIsDrawerOpen(false);
                }}
              >
                Login
              </button>
            )}
            
            {isAuthenticated && (
              <>
                <Link 
                  to="/profile" 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Profile
                </Link>
                <button
                  className="text-left text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    logout({ returnTo: window.location.origin } as LogoutOptions);
                    setIsDrawerOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default MyNavbar;