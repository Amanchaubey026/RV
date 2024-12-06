import React, { useEffect } from 'react';
import { Briefcase, Code, Database, PenTool, Cpu } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface TeamMemberProps {
  name: string;
  role: string;
  icon: React.ReactNode;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, icon }) => (
  <div data-aos="fade-up" className="bg-white p-6 rounded-xl transform hover:-translate-y-2 flex items-center space-x-4">
    <div className="bg-blue-100 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-blue-900">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

const VibeTherapyTeam: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const coreTeam = [
    { name: "Project Manager", role: "Strategic Leadership", icon: <Briefcase className="w-8 h-8 text-blue-600" /> },
    { name: "Hardware/Firmware Engineer", role: "Technical Innovation", icon: <Cpu className="w-8 h-8 text-green-600" /> },
    { name: "Software Developer", role: "Digital Solutions", icon: <Code className="w-8 h-8 text-purple-600" /> }
  ];

  const internTeam = [
    { name: "WebApp Intern", role: "Web Development", icon: <Code className="w-8 h-8 text-blue-500" /> },
    { name: "Industrial Designer", role: "Product Design", icon: <PenTool className="w-8 h-8 text-red-500" /> },
    { name: "Firmware Intern", role: "Embedded Systems", icon: <Cpu className="w-8 h-8 text-green-500" /> },
    { name: "Data Science Intern", role: "Analytics & Insights", icon: <Database className="w-8 h-8 text-purple-500" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden">
        {/* Header Section */}
        <header className="text-center py-12 bg-slate-100">
          <h1 data-aos="fade-up" className="text-5xl font-bold text-gray-800">Revive Team</h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-2xl font-light text-gray-600 mt-4">
            Innovating at the Intersection of Technology and Wellness
          </p>
        </header>

        {/* Team Composition */}
        <section className="p-12">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Team Composition</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              A dynamic blend of core professionals and talented interns, working collaboratively to transform innovative ideas into groundbreaking wellness technology.
            </p>
          </div>

          {/* Core Team */}
          <div data-aos="fade-up" className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Core Team</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {coreTeam.map((member, index) => (
                <TeamMember key={index} name={member.name} role={member.role} icon={member.icon} />
              ))}
            </div>
          </div>

          {/* Intern Team */}
          <div data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Intern Team</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {internTeam.map((member, index) => (
                <TeamMember key={index} name={member.name} role={member.role} icon={member.icon} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VibeTherapyTeam;
