
import { Briefcase, Mic, Code, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Mic className="h-6 w-6 text-indigo-600" />,
    title: "AI-Powered Interviews",
    desc: "Realistic voice-driven mock interviews using Vapi.ai.",
  },
  {
    icon: <Code className="h-6 w-6 text-indigo-600" />,
    title: "Tech Stack Friendly",
    desc: "Covers multiple stacks: React, Node, Python, and more.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-indigo-600" />,
    title: "Job Ready Practice",
    desc: "Simulate HR + Technical rounds just like real interviews.",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-indigo-600" />,
    title: "Feedback Engine",
    desc: "Get instant feedback to improve your performance.",
  },
];

const About = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About AI Mock Interview</h1>
        <p className="text-lg text-gray-600 mb-10">
          Our platform helps students and professionals prepare for job interviews with AI agents that simulate real-world interviewers. Built with cutting-edge tools like React, Vite, Clerk, Firebase, and Vapi.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl shadow hover:shadow-md transition p-6"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-indigo-100 rounded-full p-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500">Made with ❤️. Learn. Practice. Succeed.</p>
      </div>
    </div>
  );
};

export default About;
