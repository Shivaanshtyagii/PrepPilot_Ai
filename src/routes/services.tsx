import React from "react";
import { Mic, Code2, LayoutDashboard, BrainCircuit } from "lucide-react";

const services = [
  {
    title: "AI Mock Interviews",
    icon: <Mic className="h-6 w-6 text-indigo-600" />,
    desc: "Voice-powered AI agents simulate HR and technical interviews with real-time interaction.",
  },
  {
    title: "Interview Feedback",
    icon: <BrainCircuit className="h-6 w-6 text-indigo-600" />,
    desc: "Get instant feedback, improvement suggestions, and ratings after each mock session.",
  },
  {
    title: "Multi-Tech Stack Support",
    icon: <Code2 className="h-6 w-6 text-indigo-600" />,
    desc: "Covers frontend, backend, data structures, system design and domain-specific questions.",
  },
  {
    title: "Performance Dashboard",
    icon: <LayoutDashboard className="h-6 w-6 text-indigo-600" />,
    desc: "Track your progress with detailed analytics and previous session history.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          AI-powered tools to help you ace your job interviews and land your dream role.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-indigo-100 p-2 rounded-full">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
            </div>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
