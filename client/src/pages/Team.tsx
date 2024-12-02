import React from 'react';
import { Briefcase, Code, Database, PenTool, Cpu } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  icon: React.ReactNode;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex items-center space-x-4">
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Revive Team</h1>
          <p className="text-2xl font-light">Innovating at the Intersection of Technology and Wellness</p>
        </header>

        {/* Team Composition */}
        <section className="p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Team Composition</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              A dynamic blend of core professionals and talented interns, working collaboratively to transform innovative ideas into groundbreaking wellness technology.
            </p>
          </div>

          {/* Core Team */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Core Team</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {coreTeam.map((member, index) => (
                <TeamMember key={index} name={member.name} role={member.role} icon={member.icon} />
              ))}
            </div>
          </div>

          {/* Intern Team */}
          <div>
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
