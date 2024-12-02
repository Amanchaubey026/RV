import React from 'react';
import { Award, Zap, Heart, Activity } from 'lucide-react';

const VibeTherapyPortfolio: React.FC = () => {
  const milestones = [
    {
      phase: 'Conceptualisation',
      description: 'Development of bone conduction hearing aid with real-time data model',
      timeline: 'Feb – Mar 2023',
      icon: <Zap className="w-8 h-8 text-blue-500" />
    },
    {
      phase: 'MVP Stage 1',
      description: 'Creation of first prototype using bone conduction tech',
      timeline: 'Apr – Jun 2023',
      icon: <Award className="w-8 h-8 text-purple-500" />
    },
    {
      phase: 'MVP Stage 2',
      description: 'Integration of real-time data for personalised hearing',
      timeline: 'Jul – Oct 2023',
      icon: <Activity className="w-8 h-8 text-green-500" />
    },
    {
      phase: 'Pivot Decision',
      description: 'Re-evaluation and pivoting to mental wellness product',
      timeline: 'Oct 2023 - Jan 2024',
      icon: <Heart className="w-8 h-8 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 text-center">
          <h1 className="text-5xl font-bold mb-4">VibeTherapy</h1>
          <p className="text-2xl font-light">From Hearing to Healing</p>
        </header>

        {/* Project Overview */}
        <section className="grid md:grid-cols-2 gap-8 p-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">Project Evolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our journey began with a bone conduction hearing aid, designed to provide an innovative solution for individuals with hearing impairments. Through user insights, we discovered an unexpected therapeutic potential in the device's vibrations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This led to a pivotal transformation from a hearing aid to a mental wellness device that delivers personalized vibrational therapy to manage stress, improve focus, and enhance sleep quality.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Key Innovations</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Zap className="mr-3 text-blue-600" />
                Bone Conduction Technology
              </li>
              <li className="flex items-center">
                <Activity className="mr-3 text-green-600" />
                Real-Time Physiological Data Integration
              </li>
              <li className="flex items-center">
                <Heart className="mr-3 text-red-600" />
                Personalized Wellness Vibrations
              </li>
            </ul>
          </div>
        </section>

        {/* Project Milestones */}
        <section className="bg-gray-50 p-12">
          <h2 className="text-3xl font-semibold mb-8 text-center text-blue-800">Project Milestones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone) => (
              <div
                key={milestone.phase}
                className="bg-white border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  {milestone.icon}
                  <h3 className="ml-4 text-xl font-semibold text-blue-900">{milestone.phase}</h3>
                </div>
                <p className="text-gray-600 mb-2">{milestone.description}</p>
                <p className="text-sm text-blue-600 font-medium">{milestone.timeline}</p>
              </div>
            ))}

          </div>
        </section>

        {/* Testimonial or Impact Section */}
        <section className="p-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <blockquote className="max-w-3xl mx-auto text-2xl font-light italic">
            "Transforming a hearing aid into a device that improves mental wellness, proving that innovative technology can create unexpected paths to healing."
          </blockquote>
        </section>
      </div>
    </div>
  );
};

export default VibeTherapyPortfolio;
