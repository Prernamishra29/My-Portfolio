import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Cpu,
  Database,
  Server,
  GitBranch,
  Layout,
  Smartphone,
  Cloud,
  Shield,
  BarChart3,
  Brain,
  Zap,
  Sparkles
} from "lucide-react";
import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiExpress,
  SiTypescript,
  SiFirebase,
  SiVercel,
  SiFigma,
  SiAdobexd,
  SiCplusplus,
  SiReact
} from "react-icons/si";

const SkillCard = ({ icon: Icon, title, skills, index, isHovered, onHover }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-70' : ''}`}></div>
      
      <Card 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`group bg-white/95 border border-emerald-200/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden relative ${
          isHovered ? 'scale-105 rotate-1' : 'scale-100 rotate-0'
        }`}
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateY(${(mousePosition.x - 150) / 25}deg) rotateX(${-(mousePosition.y - 150) / 25}deg) scale3d(1.05, 1.05, 1.05)` 
            : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
        }}
      >
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[1, 2, 3, 4, 5].map(i => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/30 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <CardContent className="p-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl group-hover:scale-110 transition-transform duration-500 shadow-md">
              <Icon className="w-7 h-7 text-emerald-600 group-hover:text-green-600 transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors duration-500">
              {title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <Badge
                key={i}
                variant="outline"
                className="bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 border border-emerald-200/60 text-emerald-800 rounded-lg px-3 py-1.5 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-2 text-sm">
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </span>
                  {skill.name}
                </span>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Sparkle Component for background animation
const Sparkle = ({ size, color, left, top, delay }) => {
  return (
    <div
      className="absolute animate-sparkle"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          boxShadow: `0 0 ${size} ${size} ${color}40`,
        }}
      ></div>
    </div>
  );
};

const SkillsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "JavaScript", icon: <FaJs className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "Java", icon: <FaJava className="w-4 h-4 text-[#007396]" /> },
        { name: "C++", icon: <SiCplusplus className="w-4 h-4 text-[#00599C]" /> },
        { name: "HTML5", icon: <FaHtml5 className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="w-4 h-4 text-[#1572B6]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "React Native", icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-black" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" /> },
        { name: "Responsive Design", icon: <Smartphone className="w-4 h-4 text-emerald-500" /> },
        { name: "UI/UX Design", icon: <SiFigma className="w-4 h-4 text-[#F24E1E]" /> },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-black" /> },
        { name: "RESTful APIs", icon: <Cloud className="w-4 h-4 text-blue-500" /> },
        { name: "GraphQL", icon: <Zap className="w-4 h-4 text-[#E10098]" /> },
        { name: "Authentication", icon: <Shield className="w-4 h-4 text-gray-600" /> },
      ],
    },
    {
      icon: Database,
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-black" /> },
      ],
    },
    {
      icon: GitBranch,
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", icon: <FaGithub className="w-4 h-4 text-black" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "CI/CD Pipelines", icon: <BarChart3 className="w-4 h-4 text-blue-500" /> },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#C21325]" /> },
        { name: "Webpack", icon: <Cpu className="w-4 h-4 text-[#8DD6F9]" /> },
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", icon: <Brain className="w-4 h-4 text-[#FF6F00]" /> },
        { name: "Scikit-learn", icon: <BarChart3 className="w-4 h-4 text-[#F7931E]" /> },
        { name: "Data Analysis", icon: <BarChart3 className="w-4 h-4 text-green-500" /> },
        { name: "Neural Networks", icon: <Brain className="w-4 h-4 text-purple-500" /> },
        { name: "NLP", icon: <Zap className="w-4 h-4 text-blue-500" /> },
      ],
    }
  ];

  // Generate random sparkles for background
  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 12 + 4,
    color: `hsl(${Math.random() * 60 + 120}, 70%, 60%)`, // Greenish colors
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <main className="bg-gradient-to-b from-white via-emerald-50 to-green-50 min-h-screen py-16 px-6 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient circles */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div 
            key={i}
            className="absolute w-64 h-64 bg-gradient-to-br from-emerald-100/40 to-green-100/40 rounded-full blur-3xl animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
        
        {/* Sparkle effects */}
        {sparkles.map(sparkle => (
          <Sparkle
            key={sparkle.id}
            size={sparkle.size}
            color={sparkle.color}
            left={sparkle.left}
            top={sparkle.top}
            delay={sparkle.delay}
          />
        ))}
        
        {/* Floating bubbles */}
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-emerald-200/20 animate-float-bubble"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          ></div>
        ))}
      </div>

      <section 
        ref={containerRef}
        className="container mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-emerald-100/80 rounded-full mb-4">
            {/* <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-200 to-green-200 flex items-center justify-center shadow-sm border border-emerald-300/50">
              <Sparkles className="w-7 h-7 text-emerald-700" />
            </div> */}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-emerald-800/90 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise as a Computer Science student, spanning full-stack development, cloud technologies, and AI/ML.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-4 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <SkillCard
                index={index}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                isHovered={hoveredCard === index}
                onHover={setHoveredCard}
              />
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
            opacity: 1;
          }
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
        }
        
        @keyframes float-bubble {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translateY(-30px) translateX(10px) scale(1.1);
            opacity: 0.5;
          }
          66% {
            transform: translateY(-60px) translateX(-5px) scale(0.9);
            opacity: 0.4;
          }
          100% {
            transform: translateY(-90px) translateX(0) scale(1);
            opacity: 0;
          }
        }
        
        @keyframes sparkle {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-bubble {
          animation: float-bubble linear forwards;
        }
        
        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;