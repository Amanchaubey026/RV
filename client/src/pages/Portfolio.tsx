import React, { useEffect } from 'react';
import { Award, Zap, Heart, Activity } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VibeTherapyPortfolio: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const milestones = [
    {
      phase: 'Conceptualisation',
      description: 'Development of bone conduction hearing aid with real-time data model',
      timeline: 'Feb – Mar 2023',
      icon: <Zap className="w-8 h-8 text-blue-500" />,
    },
    {
      phase: 'MVP Stage 1',
      description: 'Creation of first prototype using bone conduction tech',
      timeline: 'Apr – Jun 2023',
      icon: <Award className="w-8 h-8 text-purple-500" />,
    },
    {
      phase: 'MVP Stage 2',
      description: 'Integration of real-time data for personalised hearing',
      timeline: 'Jul – Oct 2023',
      icon: <Activity className="w-8 h-8 text-green-500" />,
    },
    {
      phase: 'Pivot Decision',
      description: 'Re-evaluation and pivoting to mental wellness product',
      timeline: 'Oct 2023 - Jan 2024',
      icon: <Heart className="w-8 h-8 text-red-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* Header Section */}
      <header className="text-center py-12 bg-slate-100">
        <h1 data-aos="fade-up" className="text-5xl font-bold text-gray-800">
          Revive
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-2xl font-light text-gray-600 mt-4">
          From Hearing to Healing
        </p>
      </header>
      
      {/* Testimonial Section */}
      <section className="py-16 px-8 text-center bg-white shadow-sm">
        <blockquote
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-2xl font-light italic text-gray-700"
        >
          "Transforming a hearing aid into a device that improves mental wellness, proving that innovative technology can create unexpected paths to healing."
        </blockquote>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-8 text-center">
        <div data-aos="fade-up" className="max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-semibold text-blue-900">Project Evolution</h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our journey began with a bone conduction hearing aid, designed to provide an innovative solution for individuals with hearing impairments. Through user insights, we discovered an unexpected therapeutic potential in the device's vibrations.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This led to a pivotal transformation from a hearing aid to a mental wellness device that delivers personalized vibrational therapy to manage stress, improve focus, and enhance sleep quality.
          </p>
        </div>
      </section>

      {/* Key Innovations */}
      <section className="py-16 px-8 text-center bg-white shadow-sm">
        <div data-aos="fade-up" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Key Innovations</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-center">
              <Zap className="mr-3 text-blue-600" />
              <span className="text-gray-700">Bone Conduction Technology</span>
            </li>
            <li className="flex items-center justify-center">
              <Activity className="mr-3 text-green-600" />
              <span className="text-gray-700">Real-Time Physiological Data Integration</span>
            </li>
            <li className="flex items-center justify-center">
              <Heart className="mr-3 text-red-600" />
              <span className="text-gray-700">Personalized Wellness Vibrations</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Project Milestones */}
      <section className="py-16 px-8">
        <h2 data-aos="fade-up" className="text-3xl font-semibold text-blue-900 text-center mb-8">
          Project Milestones
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone) => (
            <div
              key={milestone.phase}
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {milestone.icon}
                <h3 className="ml-4 text-xl font-semibold text-blue-900">{milestone.phase}</h3>
              </div>
              <p className="text-gray-600">{milestone.description}</p>
              <p className="text-sm text-blue-600 font-medium mt-2">{milestone.timeline}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VibeTherapyPortfolio;
