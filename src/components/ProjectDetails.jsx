
// import { motion } from "motion/react";

// const ProjectDetails = ({
//   title,
//   description,
//   subDescription,
//   image,
//   tags,
//   href,
//   closeModal,
// }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
//       <motion.div
//         className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//       >
//         {/* Close Button */}
//         <button
//           onClick={closeModal}
//           className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
//         >
//           <img src="assets/close.svg" className="w-6 h-6" alt="Close" />
//         </button>

//         {/* Project Image */}
//         <img src={image} alt={title} className="w-full rounded-t-2xl" />

//         {/* Project Details */}
//         <div className="p-5">
//           <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
//           <p className="mb-3 font-normal text-neutral-400">{description}</p>

//           {subDescription.map((subDesc, index) => (
//             <p key={index} className="mb-3 font-normal text-neutral-400">
//               {subDesc}
//             </p>
//           ))}

//           {/* Tags and Live Link */}
//           <div className="flex items-center justify-between mt-4">
//             <div className="flex gap-3">
//               {tags.map((tag) => (
//                 <img
//                   key={tag.id}
//                   src={tag.path}
//                   alt={tag.name}
//                   className="rounded-lg size-10 hover-animation"
//                 />
//               ))}
//             </div>

//             {/* ✅ Fixed Live Link Button */}
//             {href ? (
//               <a
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-white"
//               >
//                 Live Link{" "}
//                 <img
//                   src="assets/arrow-up.svg"
//                   className="size-4"
//                   alt="Open Link"
//                 />
//               </a>
//             ) : (
//               <span className="text-neutral-500 italic">No live link</span>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProjectDetails;



import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto bg-black/50 backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-2 right-2 sm:top-3 sm:right-3 md:top-5 md:right-5 bg-midnight hover:bg-gray-500 z-10"
        >
          <img src="assets/close.svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" alt="Close" />
        </button>

        {/* Project Image */}
        <div className="w-full overflow-hidden rounded-t-2xl">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto max-h-48 sm:max-h-64 md:max-h-80 object-cover" 
          />
        </div>

        {/* Project Details */}
        <div className="p-4 sm:p-5 md:p-6">
          <h5 className="mb-2 text-xl sm:text-2xl md:text-3xl font-bold text-white">{title}</h5>
          <p className="mb-3 text-sm sm:text-base text-neutral-400">{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 text-sm sm:text-base text-neutral-400">
              {subDesc}
            </p>
          ))}

          {/* Tags and Live Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-4">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 hover-animation"
                />
              ))}
            </div>

            {/* Live Link Button */}
            <div className="flex justify-center sm:justify-end">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-white text-sm sm:text-base px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  Live Link{" "}
                  <img
                    src="assets/arrow-up.svg"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    alt="Open Link"
                  />
                </a>
              ) : (
                <span className="text-neutral-500 italic text-sm sm:text-base">No live link</span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;