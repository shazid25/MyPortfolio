// import React, { useState } from "react";
// import ProjectDetails from "./ProjectDetails";

// const Project = ({
//   title,
//   description,
//   subDescription,
//   href,
//   image,
//   tags = [],
//   setPreview,
//   isMobile
// }) => {
//   const [isHidden, setIsHidden] = useState(false);

//   const handleMouseEnter = () => {
//     if (!isMobile) {
//       setPreview(image);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!isMobile) {
//       setPreview(null);
//     }
//   };

//   return (
//     <>
//       <div
//         className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between py-6 sm:py-8 md:py-10 gap-4 sm:gap-0"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
       

//         <div className="w-full sm:w-auto flex flex-col items-start">
//           {/* Title */}
//           <p className="text-lg sm:text-2xl font-semibold text-white leading-snug text-center sm:text-left">
//             {title}
//           </p>

//           {/* Tags */}
//           <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mt-2 sm:mt-3 text-neutral-300">
//             {tags?.map((tag, index) => (
//               <span
//                 key={tag.id || index}
//                 className="text-[10px] xs:text-xs sm:text-sm px-2 sm:px-3 py-1 bg-white/10 rounded-md whitespace-nowrap"
//               >
//                 {tag.name || tag}
//               </span>
//             ))}
//           </div>
//         </div>


//         <button
//           onClick={() => setIsHidden(true)}
//           className="flex items-center gap-2 cursor-pointer bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200 w-full sm:w-auto justify-center"
//           aria-label={`Read more about ${title}`}
//         >
//           <span className="text-sm sm:text-base">Read More</span>
//           <img
//             src="assets/arrow-right.svg"
//             className="w-4 h-4 sm:w-5 sm:h-5"
//             alt="arrow right"
//           />
//         </button>
//       </div>

//       <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />

//       {isHidden && (
//         <ProjectDetails
//           title={title}
//           description={description}
//           subDescription={subDescription}
//           image={image}
//           tags={tags}
//           href={href}
//           closeModal={() => setIsHidden(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Project;









import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags = [],
  frontendRepo,
  backendRepo,
  setPreview,
  isMobile
}) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setPreview(image);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setPreview(null);
    }
  };

  return (
    <>
      <div
        className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between py-6 sm:py-8 md:py-10 gap-4 sm:gap-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Title and Tags Container */}
        <div className="w-full sm:w-auto flex flex-col items-start flex-1">
          {/* Title */}
          <p className="text-lg sm:text-2xl font-semibold text-white leading-snug text-center sm:text-left">
            {title}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mt-2 sm:mt-3 text-neutral-300">
            {tags?.slice(0, 4).map((tag, index) => (
              <span
                key={tag.id || index}
                className="text-[10px] xs:text-xs sm:text-sm px-2 sm:px-3 py-1 bg-white/10 rounded-md whitespace-nowrap hover:bg-white/20 transition-colors duration-200"
              >
                {tag.name || tag}
              </span>
            ))}
            {tags?.length > 4 && (
              <span className="text-[10px] xs:text-xs sm:text-sm px-2 sm:px-3 py-1 bg-white/5 rounded-md whitespace-nowrap">
                +{tags.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* View Details Button - Improved Styling */}
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm sm:text-base px-5 py-3 rounded-lg transition-all duration-200 w-full sm:w-auto group min-w-[140px]"
          aria-label={`View details about ${title}`}
        >
          <span className="font-medium">View Details</span>
          <svg 
            className="w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          frontendRepo={frontendRepo}
          backendRepo={backendRepo}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;