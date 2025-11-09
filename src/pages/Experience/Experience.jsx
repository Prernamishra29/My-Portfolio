import React, { useState } from "react";
import { Beaker, Calendar, ChevronDown, ChevronUp, ExternalLink, Code, Laptop, Cpu } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  bullets,
  icon: Icon,
  isExpanded,
  onToggle
}) => (
  <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl">
    {/* Main card */}
    <div className="relative bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 h-full border border-emerald-200 shadow-lg transition-all duration-500 hover:shadow-xl">
      <div className="relative mb-6 flex justify-between items-start">
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400/30 to-green-400/30 rounded-full opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
          <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center shadow-sm border border-emerald-200/50">
            <Icon className="w-7 h-7 text-emerald-700" />
          </div>
        </div>
        
        <button 
          onClick={onToggle}
          className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 hover:bg-emerald-200 transition-colors duration-300 group-hover:scale-110"
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* Main content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-emerald-900 group-hover:text-emerald-800 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex flex-wrap justify-between items-center gap-2">
          <span className="font-semibold text-emerald-700 bg-emerald-100/80 px-3 py-1.5 rounded-full text-sm">
            {company}
          </span>
          <span className="text-xs font-medium bg-emerald-50 px-3 py-1.5 rounded-full flex items-center text-emerald-800">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            {period}
          </span>
        </div>
        
        <p className="text-emerald-800/90 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Expandable content */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-emerald-200/70 animate-fadeIn">
          <h4 className="font-semibold text-emerald-900 mb-3 flex items-center">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Key Responsibilities & Achievements
          </h4>
          
          <ul className="space-y-3">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start text-emerald-800/90">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5 mr-3 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 pt-4 border-t border-dashed border-emerald-200/50">
            <button className="flex items-center text-emerald-700 font-medium text-sm hover:text-emerald-800 transition-colors duration-300 group">
              View project details
              <ExternalLink size={16} className="ml-1.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      )}

      {/* Hover effects */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-300/50 group-hover:animate-pulse-short transition-all duration-500 pointer-events-none" />
      <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-emerald-300 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-emerald-300 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-emerald-100/50 to-green-100/50 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:scale-105" />
  </div>
);

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const experiences = [
    
    {
      icon: Code,
      title: "Software Developer ",
      company: "Creditors Academy",
      period: "May 2025 – Present",
      description: "Currently working on React.js-based applications, focusing on learning management systems and responsive web development.",
      bullets: [
        "Developing and maintaining React.js-based applications for clients",
        "Working on Cypher LMS and responsive websites",
        "Improving user experience through real-time features and optimization",
        "Collaborating with team members on agile development processes"
      ]
    },
    {
      icon: Laptop,
      title: "Front-End Developer Intern",
      company: "GrowSharp India Pvt Ltd",
      period: "Mar 2025 – May 2025",
      description: "Built responsive web UIs using modern frontend technologies during this internship.",
      bullets: [
        "Built responsive web UIs using React.js, Tailwind CSS, HTML, and JavaScript",
        "Collaborated with designers to implement pixel-perfect interfaces",
        "Participated in code reviews and team meetings",
        "Gained experience in modern frontend development workflows"
      ]
    },
    {
      icon: Cpu,
      title: "Software Development Intern",
      company: "Farmicon India (TIDES, IIT Roorkee)",
      period: "Feb 2024 – May 2024",
      description: "Worked on both frontend development and machine learning related tasks during this internship.",
      bullets: [
        "Developed components using React.js to improve frontend performance",
        "Performed dataset training and testing using LabelImg for ML-related tasks",
        "Collaborated with the team on agricultural technology solutions",
        "Gained experience in both software development and machine learning processes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/70 to-green-50/90 relative overflow-hidden py-16 px-4">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-200/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_49%,rgba(110,231,183,0.15)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/30 rounded-full blur-3xl animate-float-slower"></div>

      <div className="relative container mx-auto max-w-4xl">
        <div className="flex flex-col items-center space-y-4 mb-16 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-emerald-100/80 rounded-full mb-4">
            {/* <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-200 to-green-200 flex items-center justify-center shadow-sm border border-emerald-300/50">
              <Beaker className="w-7 h-7 text-emerald-700" />
            </div> */}
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-emerald-900 animate-fadeIn">
            Professional Experience
          </h3>
          <p className="text-lg text-emerald-800/90 max-w-2xl leading-relaxed">
            Bridging technology and software development through practical experience.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-4"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={index} 
                {...exp} 
                isExpanded={expandedCard === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-emerald-700/90 font-medium">
            Interested in collaborating on projects?{" "}
            <button className="text-emerald-700 hover:text-emerald-800 underline decoration-dashed transition-colors duration-300">
              Let's connect
            </button>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes pulse-short {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
        .animate-pulse-short {
          animation: pulse-short 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ExperienceSection;
