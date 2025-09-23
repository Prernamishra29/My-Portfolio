import React, { useState } from "react";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "BTECH in Computer Science & Engineering",
      school: "Uttarakhand Technical University",
      location: "Dehradun, Uttarakhand",
      mascot: "💻",
      year: "2025",
      achievements: [
        "Specialization in Software Development",
        "Completed projects in Web Development and AI",
      ],
      skills: ["Programming", "Data Structures", "Algorithms", "Web Development", "Database Management"],
      description:
        "Comprehensive engineering program focused on computer science fundamentals and software development.",
    },
    {
      degree: "Diploma in Civil Engineering",
      school: "Government Polytechnic Puranpur",
      location: "Pilibhit, Uttar Pradesh",
      mascot: "🔧",
      year: "2021",
      achievements: [
        "Completed a technical diploma program with strong focus on practical skills",
        "Undertook industrial training to gain hands-on engineering experience",
      ],
      skills: ["AUTOCAD", "Steel Design", "Fluid Mechanics", "Surveying"],
      description:
        "Diploma program in civil engineering emphasizing practical applications, technical skills, and preparation for higher engineering studies or professional work.",
    },
    {
      degree: "Senior Secondary Education (XII)",
      school: "Kendriya Vidyalaya No.2, OCF SPN",
      location: "Shahjahanpur, Uttar Pradesh",
      mascot: "📚",
      year: "2018",
      achievements: [
        "Completed senior secondary with focus on science stream",
        "Studied Physics, Chemistry, and Mathematics extensively",
      ],
      skills: ["Physics", "Chemistry", "Mathematics"],
      description:
        "Senior secondary program emphasizing strong foundation in core science subjects, preparing for higher technical and engineering studies.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px rgba(74, 222, 128, 0.15)",
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-20 bg-gradient-to-br from-emerald-50/70 to-green-50/90">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-200/40 rounded-full -translate-x-40 -translate-y-40 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/40 rounded-full -translate-x-40 translate-y-40 opacity-50"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-emerald-900/[0.02] bg-[length:50px_50px]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-emerald-100/80 rounded-full mb-4">
            {/* <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-200 to-green-200 flex items-center justify-center shadow-sm border border-emerald-300/50">
              <GraduationCap className="w-7 h-7 text-emerald-700" />
            </div> */}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Educational Journey
          </h2>
          <p className="text-emerald-800/90 max-w-2xl mx-auto text-lg">
            From foundational education to specialized computer science studies, 
            my academic path reflects a growing passion for technology and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`relative rounded-2xl p-6 transition-all duration-300 bg-gradient-to-br from-emerald-50 to-green-50 shadow-lg border border-emerald-200 ${
                hoveredIndex === index ? "ring-2 ring-emerald-500/30" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Degree icon with decorative background */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-2xl border border-emerald-200/50">
                {edu.mascot}
              </div>
              
              <div className="space-y-5">
                <div className="space-y-2 pr-16">
                  <h3 className="text-xl font-bold text-emerald-900">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-emerald-800 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    {edu.school}
                  </p>
                  <p className="text-emerald-700 flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </p>
                  <p className="text-emerald-600 flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-emerald-700/90 text-sm border-l-2 border-emerald-400 pl-3 py-1">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-emerald-800 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    Key Highlights
                  </h4>
                  <div className="flex flex-col gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 rounded-xl bg-emerald-100/50 text-emerald-700 flex items-start gap-2 text-sm border border-emerald-200/50"
                      >
                        <Award className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-600" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-emerald-800 mb-2">Skills Gained</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-300 rounded-bl-2xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;