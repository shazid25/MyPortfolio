// import React, { useState } from "react";
// import ProjectDetails from "./ProjectDetails";

// const Project = ({
//   title,
//   description,
//   subDescription,
//   href,
//   image,
//   tags = [], // ✅ fallback to empty array
//   setPreview,
// }) => {
//   const [isHidden, setIsHidden] = useState(false);

//   return (
//     <>
//       <div
//         className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
//         onMouseEnter={() => setPreview(image)}
//         onMouseLeave={() => setPreview(null)}
//       >
//         <div>
//           <p className="text-2xl">{title}</p>

//           <div className="flex gap-5 mt-2 text-sand">
//             {tags?.map((tag, index) => (
//               <span key={tag.id || index}>{tag.name || tag}</span>
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={() => setIsHidden(true)}
//           className="flex items-center gap-1 cursor-pointer hover-animation"
//         >
//           Read More
//           <img src="assets/arrow-right.svg" className="w-5" alt="arrow" />
//         </button>
//       </div>

//       <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

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
        {/* <div className="w-full sm:w-auto">
          <p className="text-xl sm:text-2xl font-semibold text-white">{title}</p>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 text-neutral-300">
            {tags?.map((tag, index) => (
              <span 
                key={tag.id || index} 
                className="text-xs sm:text-sm px-2 py-1 bg-white/10 rounded-md"
              >
                {tag.name || tag}
              </span>
            ))}
          </div>
        </div> */}

        <div className="w-full sm:w-auto flex flex-col items-start">
          {/* Title */}
          <p className="text-lg sm:text-2xl font-semibold text-white leading-snug text-center sm:text-left">
            {title}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mt-2 sm:mt-3 text-neutral-300">
            {tags?.map((tag, index) => (
              <span
                key={tag.id || index}
                className="text-[10px] xs:text-xs sm:text-sm px-2 sm:px-3 py-1 bg-white/10 rounded-md whitespace-nowrap"
              >
                {tag.name || tag}
              </span>
            ))}
          </div>
        </div>


        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-2 cursor-pointer bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200 w-full sm:w-auto justify-center"
          aria-label={`Read more about ${title}`}
        >
          <span className="text-sm sm:text-base">Read More</span>
          <img
            src="assets/arrow-right.svg"
            className="w-4 h-4 sm:w-5 sm:h-5"
            alt="arrow right"
          />
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
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;