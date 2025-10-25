import { useState } from "react";
import { myProjects } from "../constants";
import Project from "../components/Project";
import { motion, useMotionValue, useSpring } from "motion/react";

const Work = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  // Safe projects data
  const projects = Array.isArray(myProjects) && myProjects.length > 0 
    ? myProjects 
    : [];

  return (
    <section 
      onMouseMove={handleMouseMove} 
      className="relative min-h-screen pt-20 c-space section-spacing"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Work
        </motion.h1>
        <motion.p 
          className="text-xl text-neutral-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A collection of projects that showcase my skills and experience in web development
        </motion.p>
      </div>

      {/* Projects Count */}
      <motion.div 
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-white">
          Selected Projects <span className="text-neutral-400">({projects.length})</span>
        </h2>
        <div className="text-neutral-400 text-sm">
          Hover over project titles to preview
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-12" />

      {/* Projects List */}
      <div className="space-y-2">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Project 
                title={project.title}
                description={project.description}
                subDescription={project.subDescription}
                href={project.href}
                image={project.image}
                tags={project.tags}
                setPreview={setPreview}
              />
            </motion.div>
          ))
        ) : (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-neutral-400 text-lg">No projects to display.</p>
            <p className="text-neutral-500 mt-2">Check the constants file for project data.</p>
          </motion.div>
        )}
      </div>

      {/* Floating Preview Image */}
      {preview && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed top-0 left-0 z-50 pointer-events-none"
        >
          <motion.img
            src={preview}
            style={{ x: springX, y: springY }}
            className="h-56 w-80 object-cover rounded-lg shadow-2xl border-2 border-white/20"
            alt="Project preview"
          />
        </motion.div>
      )}

      {/* Footer Note */}
      {projects.length > 0 && (
        <motion.div 
          className="text-center mt-20 pt-8 border-t border-neutral-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-neutral-400">
            Interested in working together?{" "}
            <a href="/contact" className="text-white hover:text-neutral-300 underline transition-colors">
              Let's talk
            </a>
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default Work;