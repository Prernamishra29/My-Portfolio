import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Calendar, ExternalLink, BookOpen, MapPin, Trophy, Users, Shield, FileText, Star } from "lucide-react";

const CertificatesSection = () => {
  const [activeTab, setActiveTab] = useState("certificates");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    const fetchLinkedInData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Updated data with your actual certificates and awards
        const mockData = {
          name: "Prerna Mishra",
          certifications: [
            {
              title: "Industry Certification Program in Information Technology",
              issuer: "L&T Edutech (L&T Technology Services)",
              id: "HU/ESP-IT/2024/036",
              date: "Apr 2024",
              description: "Comprehensive industry certification program covering advanced IT concepts and practical applications in technology services.",
              skills: ["Information Technology", "Industry Practices", "Technical Solutions", "IT Infrastructure"],
              link: "https://www.linkedin.com/in/prerna-m-8a296b12b/details/certifications/1758385542006/single-media-viewer/?profileId=ACoAACAAEToBsdONky89u_V-48k_uxADdS0F8bs",
              icon: <Users size={20} />
            },
            {
              title: "Cybersecurity Fundamentals",
              issuer: "IBM",
              id: "IBM-CYBER-2023",
              date: "Jun 2023",
              description: "Fundamental cybersecurity principles, threat protection, and security best practices in modern IT environments.",
              skills: ["Cybersecurity", "Threat Protection", "Security Principles", "Risk Management"],
              link: "https://www.credly.com/badges/9076c40d-0cbd-4839-af60-38bdf5be6332/linked_in_profile",
              icon: <Shield size={20} />
            },
            {
              title: "Autodesk AutoCAD Certified",
              issuer: "CADD CENTRE",
              id: "ES211295198",
              date: "Apr 2022",
              description: "Professional certification in AutoCAD for 2D and 3D computer-aided design and drafting.",
              skills: ["AutoCAD", "CAD Design", "2D Drafting", "3D Modeling", "Technical Drawing"],
              link: "https://registry.caddcentre.com/ghbji.php?asdsad=NG53bnZFK2laaU93VTBUTHM4d2lOOXN2UmtzZGxUdzY5Y0VReDBXR3F3Y0tBaWRrUTZhR01YRk9JWDErNyt2YQ==",
              icon: <FileText size={20} />
            },
            {
              title: "Certified Web Engineer | Masai School & KSIF",
              issuer: "Masai School",
              id: "MASAI-EMP-052",
              date: "Oct 2024 - Jun 2025",
              description: "Intensive web engineering program covering full-stack development, modern frameworks, and industry-ready skills.",
              skills: ["Full-Stack Development", "Web Technologies", "JavaScript", "React", "Node.js"],
              link: "https://www.linkedin.com/in/prerna-m-8a296b12b/details/certifications/1758367391692/single-media-viewer/?profileId=ACoAACAAEToBsdONky89u_V-48k_uxADdS0F8bs",
              icon: <Award size={20} />
            }
          ],
          courses: [
            {
              title: "Web Development Fundamentals",
              issuer: "Masai School",
              id: "MASAI-WEB-2024",
              date: "2024",
              description: "Comprehensive course covering modern web development technologies and best practices.",
              skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
              link: "https://www.linkedin.com/in/prerna-m-8a296b12b/details/certifications/1758367391692/single-media-viewer/?profileId=ACoAACAAEToBsdONky89u_V-48k_uxADdS0F8bs",
              icon: <BookOpen size={20} />
            }
          ],
          workshops: [
            {
              title: "Innovative Design: Ideation to Realization",
              organizer: "Design Innovation Centre (DIC), IIT Roorkee",
              id: "DIC-IITR-2023",
              date: "May 2023",
              description: "Workshop on innovative design thinking processes from initial ideation to final realization and implementation.",
              skills: ["Design Thinking", "Innovation", "Product Design", "Ideation Techniques"],
              link: "https://www.linkedin.com/in/prerna-m-8a296b12b/details/certifications/1758385550951/single-media-viewer/?profileId=ACoAACAAEToBsdONky89u_V-48k_uxADdS0F8bs",
              type: "workshop",
              icon: <Users size={20} />
            },
            {
              title: "International Conference on Sustainable Development",
              organizer: "SDMEL-2025",
              id: "SDMEL0196",
              date: "2025",
              description: "Participation and presentation at the International Conference on Sustainable Development in Management, Engineering and Life Science.",
              skills: ["Sustainable Development", "Research Presentation", "Academic Conference", "Engineering Management"],
              link: "https://www.linkedin.com/in/prerna-m-8a296b12b/details/certifications/1758368720825/single-media-viewer/?profileId=ACoAACAAEToBsdONky89u_V-48k_uxADdS0F8bs",
              type: "conference",
              icon: <BookOpen size={20} />
            }
          ],
          awards: [
            {
              title: "UTKARSH 1.0 – State-Level Hackathon",
              issuer: "Veer Madho Singh Bhandari Uttarakhand Technical University",
              id: "UTKARSH-2025",
              date: "May 2025",
              position: "2nd Position",
              category: "AI Public Service App (Mobile App Category)",
              description: "Recognized for innovation in public service technology and teamwork excellence. Developed an AI-powered mobile application for public service enhancement.",
              skills: ["AI Development", "Mobile App Development", "Public Service Technology", "Team Collaboration", "Hackathon"],
              link: "https://www.linkedin.com/in/prerna-m-8a296b12b/overlay/1758385521067/single-media-viewer/?profileId=ACoAACAAEToBsdONky89u_V-48k_uxADdS0F8bs",
              icon: <Trophy size={20} />,
              achievementLevel: "State Level"
            },
            {
              title: "TechWizard 24-Hour College-Level Hackathon",
              issuer: "Trojan Club, Haridwar University under Institute's Innovation Council (IIC)",
              id: "TECHWIZARD-2024",
              date: "Oct 2024",
              position: "2nd Prize",
              category: "Expense Tracking Web App: Bill Bird",
              description: "Recognized for designing and developing an innovative web application to simplify personal expense tracking. Built a comprehensive expense management solution.",
              skills: ["Web Development", "Expense Tracking", "UI/UX Design", "Full-Stack Development", "Hackathon"],
              link: "https://www.linkedin.com/in/prerna-m-8a296b12b/overlay/1758385508874/single-media-viewer/?profileId=ACoAACAAEToBsdONky89u_V-48k_uxADdS0F8bs",
              icon: <Star size={20} />,
              achievementLevel: "College Level"
            }
          ]
        };
        
        setProfileData(mockData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load profile data");
        setLoading(false);
      }
    };

    fetchLinkedInData();
  }, []);

  const Card = ({ item, type }) => (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 h-full flex flex-col"
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(72, 187, 120, 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700">
          {item.icon || (type === "award" ? <Trophy size={24} /> : <Award size={24} />)}
        </div>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">
          {type === "certificate"
            ? "Certificate"
            : type === "course"
            ? "Course"
            : type === "workshop"
            ? "Workshop"
            : type === "conference"
            ? "Conference"
            : "Award"}
        </span>
      </div>

      <h3 className="text-xl font-bold text-emerald-900 mb-2">{item.title}</h3>
      <p className="text-emerald-700 mb-2">
        {item.issuer || item.organizer}
      </p>

      {/* Special award details */}
      {item.position && (
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
              {item.position}
            </span>
            <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              {item.achievementLevel}
            </span>
          </div>
          <p className="text-sm font-medium text-emerald-800">{item.category}</p>
        </div>
      )}

      <div className="flex items-center gap-3 text-sm text-emerald-600 mb-4">
        <Calendar size={16} />
        <span>{item.date}</span>
        {item.location && (
          <>
            <MapPin size={16} />
            <span>{item.location}</span>
          </>
        )}
      </div>

      <p className="text-emerald-700 mb-4 flex-grow">{item.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-emerald-800 mb-2">
          {type === "award" ? "Skills Demonstrated" : "Skills Covered"}
        </h4>
        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-emerald-100 flex justify-between items-center">
        <span className="text-xs font-mono text-emerald-600">ID: {item.id || "N/A"}</span>
        <motion.a
          href={item.link}
          className="flex items-center text-emerald-600 hover:text-emerald-800 font-medium text-sm"
          whileHover={{ x: 4 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Details <ExternalLink size={16} className="ml-1" />
        </motion.a>
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-white to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-emerald-700">Loading certifications...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-br from-white to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-emerald-700">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative py-20 bg-gradient-to-br from-white to-emerald-50 overflow-hidden"
      id="achievements"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full -translate-x-40 -translate-y-40 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full translate-x-40 translate-y-40 opacity-30"></div>
      <div className="absolute inset-0 bg-grid-emerald-900/[0.02] bg-[length:50px_50px]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16" style={{ opacity, scale }}>
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">Certifications & Achievements</h2>
          <p className="text-emerald-700 max-w-2xl mx-auto text-lg">
            Continuous learning through specialized courses, workshops, and recognition in competitive hackathons and technical events.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-emerald-100 p-1 rounded-xl">
            {["certificates", "courses", "workshops", "awards"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-white text-emerald-800 shadow-md"
                    : "text-emerald-600 hover:text-emerald-800"
                }`}
              >
                {tab === "certificates"
                  ? "Certifications"
                  : tab === "courses"
                  ? "Courses"
                  : tab === "workshops"
                  ? "Workshops"
                  : "Awards"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        {activeTab === "certificates" && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {profileData.certifications.map((cert, index) => (
              <Card key={index} item={cert} type="certificate" />
            ))}
          </motion.div>
        )}

        {activeTab === "courses" && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {profileData.courses.map((course, index) => (
              <Card key={index} item={course} type="course" />
            ))}
          </motion.div>
        )}

        {activeTab === "workshops" && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {profileData.workshops.map((workshop, index) => (
              <Card key={index} item={workshop} type={workshop.type || "workshop"} />
            ))}
          </motion.div>
        )}

        {activeTab === "awards" && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {profileData.awards.map((award, index) => (
              <Card key={index} item={award} type="award" />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection;