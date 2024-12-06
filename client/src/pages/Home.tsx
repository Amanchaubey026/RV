import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Smooth animation
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Hero Section */}
      <section className="bg-slate-100 text-gray-500 py-20 px-8 text-center">
        <div data-aos="fade-up" data-aos-delay="0" className="mb-6">
          <h1 className="text-5xl text-gray-800 font-bold">
            From Sound to Vibes. A Journey of Innovation.
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="mb-8">
          <p className="text-2xl font-light max-w-4xl mx-auto">
            From enhancing hearing to transforming mental health, discover how we evolved from a bone conduction hearing aid to a cutting-edge Vibe Therapy Device — a wearable that harnesses the power of personalised vibrations to soothe and balance your mind.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300">
            Start Your Vibe Journey
          </button>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-8 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">From Sound Enhancement to Mindful Vibes</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Our story began with a simple goal: to create a hearing aid that could provide a richer, more immersive sound experience. But as we gathered data from real-world usage, we discovered its potential to promote emotional well-being through personalised vibrations.
        </p>
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300">
          See How It Works
        </button>
      </section>

      {/* Interactive Section */}
      <section className="bg-blue-100 py-16 px-8" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-blue-900 text-center mb-6">Smart. Personalised. Effective.</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 mb-8">
            Real-time biometric feedback powers every vibration. Track vital signs like heart rate and skin temperature, and receive personalised vibrations to improve your mood instantly.
          </p>
          <div className="relative w-full h-72 bg-white rounded-lg shadow-md flex justify-center items-center">
            {/* Placeholder for interactive visual */}
            <span className="text-gray-400">[Interactive Visualization Placeholder]</span>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-8 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Every Vibration Counts. Every Mind Matters.</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          In a world where mental health is often overlooked, we believe in creating accessible solutions for emotional well-being. Join us in redefining mental health care with simple, effective, and personalized therapy.
        </p>
        <button className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-purple-700 transition-all duration-300">
          Take Action with Us
        </button>
      </section>
    </div>
  );
};

export default HomePage;
