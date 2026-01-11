import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Cpu, Database, Globe, Server, Smartphone } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Stats component
const StatsSection = () => {
  const stats = [
    { icon: <Code size={20} />, value: "5+", label: "Projects Completed" },
    { icon: <Globe size={20} />, value: "5+", label: "Technologies Mastered" },
    { icon: <Cpu size={20} />, value: "1+", label: "Years Experience" },
    { icon: <Database size={20} />, value: "2", label: "Databases Worked With" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center p-4 bg-white rounded-xl shadow-md border border-emerald-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center text-emerald-600 mb-2">
            {stat.icon}
          </div>
          <div className="text-2xl font-bold text-emerald-800">{stat.value}</div>
          <div className="text-sm text-emerald-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

// Tech Skills component
const TechSkills = () => {
  const skills = [
    "React.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Git/GitHub",
    "REST APIs",
    "UI/UX Design",
    "Agile Development"
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-emerald-800 mb-4">Technical Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-white to-emerald-50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
              Developer, Innovator, Tech Enthusiast
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-emerald-700 text-lg">
                Hello! I'm <span className="font-bold text-emerald-800">Prerna Mishra</span>, a 
                passionate <span className="font-bold text-emerald-800">Software Developer</span> with a 
                <span className="font-bold text-emerald-800"> Bachelor's degree in Computer Science</span> from 
                <span className="font-bold text-emerald-800"> Uttarakhand Technical University</span>.
              </p>

              <p className="text-emerald-700 text-lg">
                I specialize in <span className="font-bold text-emerald-800">full-stack web development</span> with 
                expertise in modern technologies like <span className="font-bold text-emerald-800">React, Node.js, 
                and cloud platforms</span>. I love transforming complex problems into simple, beautiful, 
                and intuitive solutions.
              </p>

              <p className="text-emerald-700 text-lg">
                My passion lies in <span className="font-bold text-emerald-800">creating innovative applications </span> 
                that make a difference. I'm committed to writing clean, efficient code and staying updated 
                with the latest industry trends and technologies.
              </p>

              {/* Quote */}
              <motion.blockquote 
                className="border-l-4 border-emerald-400 pl-6 py-4 bg-emerald-50 rounded-r-xl mt-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-emerald-800 italic text-lg">
                  "I believe in the power of code to transform ideas into reality. 
                  My goal is to create technology that enhances people's lives while 
                  continuously growing as a developer and contributing to the tech community."
                </p>
                <footer className="mt-4 text-emerald-700 font-medium">
                  — Prerna Mishra, Software Developer
                </footer>
                <div className="flex items-center mt-2">
                  <span className="text-emerald-600 text-sm">Full Stack Developer & Tech Enthusiast</span>
                </div>
              </motion.blockquote>
            </motion.div>

            {/* Visual Elements */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              {/* Animated background elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-emerald-200 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-emerald-100 rounded-full opacity-40"></div>
              
              {/* Main content card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 relative z-10">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6 text-center">Development Focus</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                      <Code className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-800">Full-Stack Development</h4>
                      <p className="text-emerald-600 text-sm">Building end-to-end web applications with modern frameworks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-800">Responsive Design</h4>
                      <p className="text-emerald-600 text-sm">Creating applications that work seamlessly across all devices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                      <Server className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-800">Backend Development</h4>
                      <p className="text-emerald-600 text-sm">Building robust APIs and server-side logic</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-300 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-emerald-400 rounded-full"></div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants}>
            <StatsSection />
          </motion.div>

          {/* Tech Skills */}
          <motion.div variants={itemVariants}>
            <TechSkills />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}