// import { useState, useEffect } from "react";
// import { myProjects } from "../constants";
// import Project from "../components/Project";
// import { motion, useMotionValue, useSpring } from "motion/react";

// const Work = () => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const springX = useSpring(x, { damping: 10, stiffness: 50 });
//   const springY = useSpring(y, { damping: 10, stiffness: 50 });
  
//   const [isMobile, setIsMobile] = useState(false);

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

//   // Safe projects data
//   const projects = Array.isArray(myProjects) && myProjects.length > 0 
//     ? myProjects 
//     : [];

//   return (
//     <section 
//       onMouseMove={handleMouseMove} 
//       className="relative min-h-screen pt-16 md:pt-20 px-4 sm:px-6 lg:px-8 section-spacing"
//     >
//       {/* Header Section */}
//       <div className="text-center mb-12 md:mb-16">
//         <motion.h1 
//           className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 md:mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           My Work
//         </motion.h1>
//         <motion.p 
//           className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto px-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           A collection of projects that showcase my skills and experience in web development
//         </motion.p>
//       </div>

//       {/* Projects Count */}
//       <motion.div 
//         className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 md:mb-8 gap-2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         <h2 className="text-xl sm:text-2xl font-semibold text-white text-center sm:text-left">
//           Selected Projects <span className="text-neutral-400">({projects.length})</span>
//         </h2>
//         {!isMobile && (
//           <div className="text-neutral-400 text-sm text-center sm:text-right">
//             Hover over project titles to preview
//           </div>
//         )}
//       </motion.div>

//       <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-8 md:mb-12" />

//       {/* Projects List */}
//       <div className="space-y-2">
//         {projects.length > 0 ? (
//           projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <Project 
//                 title={project.title}
//                 description={project.description}
//                 subDescription={project.subDescription}
//                 href={project.href}
//                 image={project.image}
//                 tags={project.tags}
//                 frontendRepo={project.frontendRepo}  // Add this line
//                 backendRepo={project.backendRepo}    // Add this line
//                 setPreview={isMobile ? undefined : setPreview}
//                 isMobile={isMobile}
//               />
//             </motion.div>
//           ))
//         ) : (
//           <motion.div 
//             className="text-center py-16 md:py-20"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="text-neutral-400 text-base md:text-lg">No projects to display.</p>
//             <p className="text-neutral-500 mt-2 text-sm md:text-base">Check the constants file for project data.</p>
//           </motion.div>
//         )}
//       </div>

//       {/* Floating Preview Image - Only show on desktop */}
//       {preview && !isMobile && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="fixed top-0 left-0 z-50 pointer-events-none hidden md:block"
//         >
//           <motion.img
//             src={preview}
//             style={{ x: springX, y: springY }}
//             className="h-48 w-64 md:h-56 md:w-80 object-cover rounded-lg shadow-2xl border-2 border-white/20"
//             alt="Project preview"
//           />
//         </motion.div>
//       )}

//       {/* Footer Note */}
//       {projects.length > 0 && (
//         <motion.div 
//           className="text-center mt-16 md:mt-20 pt-6 md:pt-8 border-t border-neutral-800"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//         >
//           <p className="text-neutral-400 text-sm md:text-base">
//             Interested in working together?{" "}
//             <a href="/contact" className="text-white hover:text-neutral-300 underline transition-colors">
//               Let's talk
//             </a>
//           </p>
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default Work;






import { useState, useEffect, useRef } from "react";
import { myProjects } from "../constants";
import ProjectDetails from "../components/ProjectDetails";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight, ExternalLink, Github, Eye, Sparkles, Clock, Zap, Award } from "lucide-react";

const Work = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 100 });
  const springY = useSpring(y, { damping: 15, stiffness: 100 });
  
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  // Filter projects by category (you can add categories to your project data)
  const filteredProjects = myProjects.filter(project => {
    if (activeFilter === "all") return true;
    // Add category filtering logic here when you add categories to your project data
    return true;
  });

  // Color gradients for cards
  const colorGradients = [
    "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    "from-emerald-500/20 via-green-500/20 to-lime-500/20",
    "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
    "from-rose-500/20 via-red-500/20 to-orange-500/20",
  ];

  // Tech categories for filtering (optional)
  const techFilters = [
    { id: "all", name: "All Projects", count: myProjects.length },
    { id: "react", name: "React", count: myProjects.filter(p => p.tags.some(t => t.name.toLowerCase().includes("react"))).length },
    { id: "node", name: "Node.js", count: myProjects.filter(p => p.tags.some(t => t.name.toLowerCase().includes("node"))).length },
    { id: "fullstack", name: "Full Stack", count: myProjects.filter(p => p.frontendRepo && p.backendRepo).length },
  ];

  return (
    <>
      <section 
        ref={sectionRef}
        onMouseMove={handleMouseMove} 
        className="relative min-h-screen pt-16 md:pt-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/30 to-black"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-transparent via-black/30 to-black pointer-events-none" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div 
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Featured Work</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Projects That
              </span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Define Excellence
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A curated selection of my most impactful work, showcasing the perfect blend 
              of innovation, craftsmanship, and technical excellence.
            </motion.p>
            
            {/* Stats Bar */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-8"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{myProjects.length}</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="w-px h-8 bg-gray-700" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {myProjects.filter(p => p.href).length}
                </div>
                <div className="text-sm text-gray-400">Live Demos</div>
              </div>
              <div className="w-px h-8 bg-gray-700" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {myProjects.reduce((acc, p) => acc + p.tags.length, 0)}
                </div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </motion.div>

            {/* Interactive Guidance */}
            {!isMobile && (
              <motion.div 
                className="flex items-center justify-center gap-4 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>Hover for preview</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-700" />
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Click for details</span>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Projects Grid Header */}
          <motion.div 
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Selected Projects
              </h2>
              <p className="text-gray-500 mt-2">
                Filter by technology or browse all {myProjects.length} projects
              </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {techFilters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.id 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' 
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.name} ({filter.count})
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => {
              const gradient = colorGradients[index % colorGradients.length];
              const isHovered = hoveredProject === project.id;

              return (
                <motion.article
                  key={project.id}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10`}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.1,
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
                  {/* Animated Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    
                    {/* Live Badge */}
                    {project.href && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-xs font-medium text-green-300">Live</span>
                        </div>
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
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
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`} />
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Full Stack • {project.tags.length} Techs
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Preview */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tag.id || tagIndex}
                            className={`px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 transition-all duration-300 ${isHovered ? 'hover:border-white/30 hover:bg-white/10' : ''}`}
                          >
                            {tag.name}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer Actions */}
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
                </motion.article>
              );
            })}
          </div>

          {/* View All Projects */}
          <motion.div 
            className="text-center mt-16 md:mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="inline-flex flex-col items-center gap-6">
              <motion.a
                href="https://github.com/shazid25"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gray-900 to-black border border-white/10 hover:border-white/20 text-white font-medium transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore More on GitHub</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.a>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Updated Recently</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-700" />
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Production Ready</span>
                </div>
              </div>
            </div>
            
            <motion.p 
              className="mt-8 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Interested in collaborating on a project?{" "}
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline transition-colors">
                Let's build something amazing together
              </a>
            </motion.p>
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
            <div className="relative w-72 h-48 md:w-80 md:h-56">
              <motion.img
                src={preview}
                className="w-full h-full object-cover rounded-xl shadow-2xl border-2 border-white/20"
                alt="Project preview"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                  <Eye className="w-3 h-3 text-white" />
                  <span className="text-xs font-medium text-white">Live Preview</span>
                </div>
              </div>
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

export default Work;