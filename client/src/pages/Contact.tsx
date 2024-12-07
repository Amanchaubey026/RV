import React, { useEffect } from "react";
import {FormWeb} from "../components/webFeedbackForm";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs: React.FC = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in ms
          easing: 'ease-in-out', // Smooth animation
        });
      }, []);
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="container mx-auto px-4 py-4">
                <div className="max-w-2xl mx-auto">
                    <p data-aos="fade-down" data-aos-delay="500" className="text-gray-600 text-sm text-center max-w-sm mx-auto ">
                        Have questions or need support? Fill out the form below, and our team will get back to you as soon as possible.
                    </p>
                    <div data-aos="fade-up" data-aos-delay="0">
                    <FormWeb />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
