// src/components/Navbar.tsx
import React from 'react';
import { FaUserAlt, FaBell } from 'react-icons/fa';
import { Dropdown, Navbar } from 'flowbite-react';
import { FaHandHoldingMedical } from "react-icons/fa";
import { useAuth0 } from '@auth0/auth0-react';

const MyNavbar: React.FC = () => {
    const { loginWithRedirect ,isAuthenticated , logout} = useAuth0();
    return (
        <Navbar fluid className="bg-gray-700 px-4 py-2 shadow-lg">
            {/* Brand Section */}
            <Navbar.Brand href="/" className="flex items-center text-white">
                <FaHandHoldingMedical className="mr-2 text-2xl" />
                <span className="text-xl font-semibold">Revive</span>
            </Navbar.Brand>

            {/* Links and Icons */}
            <div className="flex md:order-2 gap-4">
                <Navbar.Toggle />


                {/* Notification and Settings Icons */}
                {!isAuthenticated &&  <button className="flex items-center text-white text-md hover:text-blue-300" onClick={()=>loginWithRedirect()}>
                    <FaBell className='mr-2'/>
                    Login
                </button>}
                {/* Dropdown Menu for Profile */}
                <Dropdown
                    inline
                    label={<FaUserAlt className="text-white text-md cursor-pointer" />}
                >
                    <Dropdown.Item>
                        <span>Profile</span>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <span onClick={()=>logout()}>Logout</span>
                    </Dropdown.Item>
                </Dropdown>
            </div>

            {/* Navbar Links */}
            <Navbar.Collapse>
                <Navbar.Link href="/" active>
                    Home
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
