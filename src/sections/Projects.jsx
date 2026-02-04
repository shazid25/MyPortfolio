// import { useState, useEffect } from "react";
// import { myProjects } from "../constants";
// import Project from "../components/Project";
// import { motion, useMotionValue, useSpring } from "motion/react";

// const Projects = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const springX = useSpring(x, { damping: 10, stiffness: 50 });
//   const springY = useSpring(y, { damping: 10, stiffness: 50 });

//   // Check if device is mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const handleMouseMove = (e) => {
//     if (!isMobile) {
//       x.set(e.clientX + 20);
//       y.set(e.clientY + 20);
//     }
//   };

//   const [preview, setPreview] = useState(null);

//   return (
//     <section 
//       onMouseMove={handleMouseMove} 
//       className="relative px-4 py-8 md:px-8 lg:px-16 xl:px-24 md:py-16"
//     >
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center md:text-left mb-8 md:mb-12">
//         My Projects
//       </h2>
      
//       <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full mb-8 md:mb-12" />

//       {Array.isArray(myProjects) &&
//         myProjects.map((project) => (
//           <Project 
//             key={project.id} 
//             title={project.title}
//             description={project.description}
//             subDescription={project.subDescription}
//             href={project.href}
//             image={project.image}
//             tags={project.tags}
//             frontendRepo={project.frontendRepo}  // Make sure this is passed
//             backendRepo={project.backendRepo}    // Make sure this is passed
//             setPreview={setPreview} 
//             isMobile={isMobile} 
//           />
//         ))}

//       {preview && !isMobile && (
//         <motion.img
//           src={preview}
//           style={{ x: springX, y: springY }}
//           className="fixed top-0 left-0 z-50 h-40 w-64 md:h-56 md:w-80 object-cover rounded-lg shadow-lg pointer-events-none hidden md:block"
//           alt="Project preview"
//         />
//       )}
//     </section>
//   );
// };

// export default Projects;





import { useState, useEffect, useRef } from "react";
import { myProjects } from "../constants";
// import ProjectDetails from "./ProjectDetails";
import ProjectDetails from "../components/ProjectDetails"

import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight, ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 100 });
  const springY = useSpring(y, { damping: 15, stiffness: 100 });

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!isMobile) {
      x.set(e.clientX + 20);
      y.set(e.clientY + 20);
    }
  };

  const [preview, setPreview] = useState(null);

  // Color gradients for each project card
  const colorGradients = [
    "from-blue-500 via-cyan-500 to-teal-500",
    "from-purple-500 via-pink-500 to-rose-500",
    "from-orange-500 via-amber-500 to-yellow-500",
    "from-emerald-500 via-green-500 to-lime-500",
    "from-violet-500 via-purple-500 to-fuchsia-500",
    "from-rose-500 via-red-500 to-orange-500",
  ];

  // Animation delays for staggered entrance
  const getDelay = (index) => `${400 + index * 150}ms`;

  return (
    <>
      <section 
        ref={sectionRef}
        onMouseMove={handleMouseMove} 
        className="relative min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900"
      >
        {/* Animated background elements */}
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-transparent via-black/50 to-black pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Featured Work
            </motion.span>
            
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Projects That Define{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A curated selection of my most impactful work, showcasing the perfect blend 
              of innovation and craftsmanship.
            </motion.p>
            
            <motion.div 
              className="mt-12 flex items-center justify-center gap-4 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>{myProjects.length} Projects</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-700" />
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Hover for preview</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.isArray(myProjects) &&
              myProjects.map((project, index) => {
                const gradient = colorGradients[index % colorGradients.length];
                const isHovered = hoveredProject === project.id;

                return (
                  <motion.div
                    key={project.id}
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:scale-[1.02]`}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    onMouseEnter={() => {
                      setHoveredProject(project.id);
                      if (!isMobile) setPreview(project.image);
                    }}
                    onMouseLeave={() => {
                      setHoveredProject(null);
                      if (!isMobile) setPreview(null);
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`} />

                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80" />
                      
                      {/* Live indicator */}
                      {project.href && (
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-medium text-green-300">Live</span>
                          </div>
                        </div>
                      )}

                      {/* View Details button */}
                      <div className="absolute bottom-4 right-4">
                        <motion.button
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      {/* Title and Category */}
                      <div className="mb-4">
                        <motion.div
                          className="inline-flex items-center gap-2 mb-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isHovered ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`} />
                          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            {project.tags.slice(0, 2).map(tag => tag.name).join(" • ")}
                          </span>
                        </motion.div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 4).map((tag, tagIndex) => (
                            <motion.span
                              key={tag.id || tagIndex}
                              className={`px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:scale-105 transition-all duration-300 ${isHovered ? 'hover:border-white/30 hover:bg-white/10' : ''}`}
                              whileHover={{ scale: 1.05 }}
                            >
                              {tag.name}
                            </motion.span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400">
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          {project.frontendRepo && (
                            <motion.a
                              href={project.frontendRepo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-4 h-4 text-white" />
                            </motion.a>
                          )}
                          {project.backendRepo && (
                            <motion.a
                              href={project.backendRepo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-4 h-4 text-white" />
                            </motion.a>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-3">
                          {project.href && (
                            <motion.a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors duration-300"
                              whileHover={{ x: 3 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Live Demo</span>
                              <ExternalLink className="w-4 h-4" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                  </motion.div>
                );
              })}
          </div>

          {/* View More Button */}
          <motion.div 
            className="text-center mt-16 md:mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/shazid25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gray-900 to-black border border-white/10 hover:border-white/20 text-white font-medium transition-all duration-300 hover:scale-105 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
            
            <p className="mt-6 text-sm text-gray-500">
              Interested in working together?{" "}
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline transition-colors">
                Let's collaborate
              </a>
            </p>
          </motion.div>
        </div>

        {/* Floating Preview Image - Desktop Only */}
        {preview && !isMobile && (
          <motion.div
            className="fixed top-0 left-0 z-40 pointer-events-none hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ x: springX, y: springY }}
          >
            <div className="relative w-64 h-40 md:w-80 md:h-56">
              <motion.img
                src={preview}
                className="w-full h-full object-cover rounded-xl shadow-2xl border-2 border-white/20"
                alt="Project preview"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
            </div>
          </motion.div>
        )}
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails
          title={selectedProject.title}
          description={selectedProject.description}
          subDescription={selectedProject.subDescription}
          image={selectedProject.image}
          tags={selectedProject.tags}
          href={selectedProject.href}
          frontendRepo={selectedProject.frontendRepo}
          backendRepo={selectedProject.backendRepo}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;