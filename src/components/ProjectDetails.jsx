// import { motion } from "motion/react";
// import { useEffect } from "react";

// const ProjectDetails = ({
//   title,
//   description,
//   subDescription,
//   image,
//   tags,
//   href,
//   closeModal,
// }) => {
//   // Close modal on escape key press
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') {
//         closeModal();
//       }
//     };

//     document.addEventListener('keydown', handleEscape);
//     document.body.style.overflow = 'hidden'; // Prevent background scrolling

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [closeModal]);

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeModal();
//     }
//   };

//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-2 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
//       onClick={handleBackdropClick}
//     >
//       <motion.div
//         className="relative w-full max-w-[95vw] sm:max-w-md md:max-w-2xl border shadow-lg rounded-xl sm:rounded-2xl bg-gradient-to-l from-gray-900 to-gray-800 border-white/10 mx-auto my-auto"
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9, y: 20 }}
//         transition={{ type: "spring", damping: 25, stiffness: 300 }}
//       >
//         {/* Close Button */}
//         <button
//           onClick={closeModal}
//           className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 p-2 bg-black/70 hover:bg-gray-700 rounded-full transition-colors duration-200"
//           aria-label="Close modal"
//         >
//           <img 
//             src="assets/close.svg" 
//             className="w-4 h-4 sm:w-5 sm:h-5" 
//             alt="Close" 
//           />
//         </button>

//         {/* Project Image */}
//         <div className="w-full h-40 sm:h-48 md:h-64 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
//           <img 
//             src={image} 
//             alt={title} 
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Project Details */}
//         <div className="p-4 sm:p-5 md:p-6 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto">
//           <h5 className="mb-3 text-lg sm:text-xl md:text-2xl font-bold text-white">{title}</h5>
          
//           <div className="space-y-3">
//             <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
//               {description}
//             </p>

//             {Array.isArray(subDescription) && subDescription.map((subDesc, index) => (
//               <p key={index} className="text-sm sm:text-base text-neutral-300 leading-relaxed">
//                 {subDesc}
//               </p>
//             ))}
//           </div>

//           {/* Tags and Live Link */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4">
//             <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
//               {tags.map((tag, index) => (
//                 <div
//                   key={tag.id || index}
//                   className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
//                   title={tag.name}
//                 >
//                   {tag.path ? (
//                     <img
//                       src={tag.path}
//                       alt={tag.name}
//                       className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
//                     />
//                   ) : (
//                     <span className="text-xs text-white">{tag.name?.charAt(0)}</span>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Live Link Button */}
//             <div className="flex justify-center sm:justify-end">
//               {href ? (
//                 <a
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 font-medium cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg transition-all duration-200 min-w-[120px] justify-center"
//                 >
//                   Live Link
//                   <img
//                     src="assets/arrow-up.svg"
//                     className="w-3 h-3 sm:w-4 sm:h-4"
//                     alt="Open Link"
//                   />
//                 </a>
//               ) : (
//                 <span className="text-neutral-400 italic text-sm sm:text-base px-4 py-2 border border-neutral-600 rounded-lg">
//                   No live link
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProjectDetails;





// import { motion } from "motion/react";
// import { useEffect } from "react";

// const ProjectDetails = ({
//   title,
//   description,
//   subDescription,
//   image,
//   tags,
//   href,
//   frontendRepo,
//   backendRepo,
//   closeModal,
// }) => {
//   // Close modal on escape key press
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') {
//         closeModal();
//       }
//     };

//     document.addEventListener('keydown', handleEscape);
//     document.body.style.overflow = 'hidden'; // Prevent background scrolling

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [closeModal]);

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeModal();
//     }
//   };

//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-2 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
//       onClick={handleBackdropClick}
//     >
//       <motion.div
//         className="relative w-full max-w-[95vw] sm:max-w-md md:max-w-2xl border shadow-lg rounded-xl sm:rounded-2xl bg-gradient-to-l from-gray-900 to-gray-800 border-white/10 mx-auto my-auto"
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9, y: 20 }}
//         transition={{ type: "spring", damping: 25, stiffness: 300 }}
//       >
//         {/* Close Button */}
//         <button
//           onClick={closeModal}
//           className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 p-2 bg-black/70 hover:bg-gray-700 rounded-full transition-colors duration-200"
//           aria-label="Close modal"
//         >
//           <img 
//             src="assets/close.svg" 
//             className="w-4 h-4 sm:w-5 sm:h-5" 
//             alt="Close" 
//           />
//         </button>

//         {/* Project Image */}
//         <div className="w-full h-40 sm:h-48 md:h-64 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
//           <img 
//             src={image} 
//             alt={title} 
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Project Details */}
//         <div className="p-4 sm:p-5 md:p-6 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto">
//           <h5 className="mb-3 text-lg sm:text-xl md:text-2xl font-bold text-white">{title}</h5>
          
//           <div className="space-y-3">
//             <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
//               {description}
//             </p>

//             {Array.isArray(subDescription) && subDescription.map((subDesc, index) => (
//               <p key={index} className="text-sm sm:text-base text-neutral-300 leading-relaxed">
//                 {subDesc}
//               </p>
//             ))}
//           </div>

//           {/* Tags Section */}
//           <div className="mt-6">
//             <h6 className="mb-3 text-sm font-medium text-neutral-400">Technologies Used</h6>
//             <div className="flex flex-wrap gap-2 sm:gap-3">
//               {tags.map((tag, index) => (
//                 <div
//                   key={tag.id || index}
//                   className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
//                   title={tag.name}
//                 >
//                   {tag.path ? (
//                     <img
//                       src={tag.path}
//                       alt={tag.name}
//                       className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
//                     />
//                   ) : (
//                     <span className="text-xs text-white">{tag.name?.charAt(0)}</span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Links Section - Three Buttons */}
//           <div className="mt-8">
//             <h6 className="mb-4 text-sm font-medium text-neutral-400">Project Links</h6>
//             <div className="flex flex-col gap-3">
              
//               {/* Live Link Button - Full Width */}
//               {href && (
//                 <a
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2 font-medium cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm sm:text-base px-4 py-3 rounded-lg transition-all duration-200 w-full group"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                   <span>View Live Demo</span>
//                   <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 </a>
//               )}

//               {/* Repository Buttons Container */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {/* Frontend Repo Button */}
//                 <a
//                   href={frontendRepo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2 font-medium cursor-pointer bg-gray-800 hover:bg-gray-700 text-white text-sm sm:text-base px-4 py-3 rounded-lg transition-all duration-200 w-full group"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                   </svg>
//                   <div className="text-left flex-1">
//                     <div className="font-semibold">Frontend Repo</div>
//                   </div>
//                   <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 </a>

//                 {/* Backend Repo Button */}
//                 <a
//                   href={backendRepo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2 font-medium cursor-pointer bg-gray-800 hover:bg-gray-700 text-white text-sm sm:text-base px-4 py-3 rounded-lg transition-all duration-200 w-full group"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                   </svg>
//                   <div className="text-left flex-1">
//                     <div className="font-semibold">Backend Repo</div>
//                   </div>
//                   <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProjectDetails;







import { motion } from "motion/react";
import { useEffect } from "react";
import { X, ExternalLink, Github, Eye, Globe } from "lucide-react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  frontendRepo,
  backendRepo,
  closeModal,
}) => {
  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [closeModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <motion.div
        className="relative w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl border border-white/10 rounded-2xl bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-xl shadow-2xl mx-auto my-auto"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {/* Close Button */}
        <motion.button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-gray-800/50 border border-white/10 backdrop-blur-sm transition-all duration-300"
          aria-label="Close modal"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
        >
          <X className="w-5 h-5 text-white" />
        </motion.button>

        {/* Project Image */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-2xl">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>

        {/* Project Content */}
        <div className="p-6 md:p-8 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto">
          {/* Title */}
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.div 
            className="space-y-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-300 leading-relaxed">
              {description}
            </p>

            {Array.isArray(subDescription) && subDescription.map((subDesc, index) => (
              <p key={index} className="text-gray-400 leading-relaxed">
                {subDesc}
              </p>
            ))}
          </motion.div>

          {/* Technologies */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <motion.div
                  key={tag.id || index}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  {tag.path && (
                    <img
                      src={tag.path}
                      alt={tag.name}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  <span className="text-sm font-medium text-gray-300">{tag.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Project Links
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Live Demo Button */}
              {href && (
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Globe className="w-5 h-5" />
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              )}

              {/* Frontend Repo Button */}
              {frontendRepo && (
                <motion.a
                  href={frontendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-5 h-5" />
                  <span>Frontend</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              )}

              {/* Backend Repo Button */}
              {backendRepo && (
                <motion.a
                  href={backendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-5 h-5" />
                  <span>Backend</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;