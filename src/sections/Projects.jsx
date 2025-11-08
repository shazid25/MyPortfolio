// import { useState } from "react";
// import { myProjects } from "../constants";
// import Project from "../components/Project";
// import { motion, useMotionValue, useSpring } from "motion/react";

// const Projects = () => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const springX = useSpring(x, { damping: 10, stiffness: 50 });
//   const springY = useSpring(y, { damping: 10, stiffness: 50 });

//   const handleMouseMove = (e) => {
//     x.set(e.clientX + 20);
//     y.set(e.clientY + 20);
//   };

//   const [preview, setPreview] = useState(null);

//   return (
//     <section onMouseMove={handleMouseMove} className="relative c-space section-spacing">
//       <h2 className="text-heading">My Projects</h2>
//       <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

//       {Array.isArray(myProjects) &&
//         myProjects.map((project) => (
//           <Project key={project.id} {...project} setPreview={setPreview} />
//         ))}

//       {preview && (
//         <motion.img
//           src={preview}
//           style={{ x: springX, y: springY }}
//           className="fixed top-0 left-0 z-50 h-56 w-80 object-cover rounded-lg shadow-lg pointer-events-none"
//         />
//       )}
//     </section>
//   );
// };

// export default Projects;



import { useState, useEffect } from "react";
import { myProjects } from "../constants";
import Project from "../components/Project";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (!isMobile) {
      x.set(e.clientX + 20);
      y.set(e.clientY + 20);
    }
  };

  const [preview, setPreview] = useState(null);

  return (
    <section 
      onMouseMove={handleMouseMove} 
      className="relative px-4 py-8 md:px-8 lg:px-16 xl:px-24 md:py-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center md:text-left mb-8 md:mb-12">
        My Projects
      </h2>
      
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full mb-8 md:mb-12" />

      {Array.isArray(myProjects) &&
        myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} isMobile={isMobile} />
        ))}

      {preview && !isMobile && (
        <motion.img
          src={preview}
          style={{ x: springX, y: springY }}
          className="fixed top-0 left-0 z-50 h-40 w-64 md:h-56 md:w-80 object-cover rounded-lg shadow-lg pointer-events-none hidden md:block"
          alt="Project preview"
        />
      )}
    </section>
  );
};

export default Projects;