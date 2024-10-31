// src/components/Navbar.tsx
import React from 'react';
import { FaUserAlt, FaBell } from 'react-icons/fa';
import { Dropdown, Navbar } from 'flowbite-react';
import { FaHandHoldingMedical } from "react-icons/fa";

const MyNavbar: React.FC = () => {
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
                <button className="flex items-center text-white text-md hover:text-blue-300">
                    <FaBell className='mr-2'/>
                    Login
                </button>
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
                        <span>Logout</span>
                    </Dropdown.Item>
                </Dropdown>
            </div>

            {/* Navbar Links */}
            <Navbar.Collapse>
                <Navbar.Link href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="/about">About</Navbar.Link>
                <Navbar.Link href="/services">Services</Navbar.Link>
                <Navbar.Link href="/contact">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
