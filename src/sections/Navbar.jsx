// // import { useState } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { motion } from "motion/react";

// // function Navigation() {
// //   const location = useLocation();
  
// //   // Helper function to check active link
// //   const isActive = (path) => {
// //     if (path === "/") {
// //       return location.pathname === "/";
// //     }
// //     return location.pathname === path;
// //   };

// //   return (
// //     <ul className="flex space-x-8">
// //       <li>
// //         <Link 
// //           className={`nav-link ${isActive("/") ? "text-white font-medium" : "text-neutral-400 hover:text-white"}`}
// //           to="/"
// //         >
// //           Home
// //         </Link>
// //       </li>
// //       <li>
// //         <Link 
// //           className={`nav-link ${isActive("/about") ? "text-white font-medium" : "text-neutral-400 hover:text-white"}`}
// //           to="/about"
// //         >
// //           About
// //         </Link>
// //       </li>
// //       <li>
// //         <Link 
// //           className={`nav-link ${isActive("/work") ? "text-white font-medium" : "text-neutral-400 hover:text-white"}`}
// //           to="/work"
// //         >
// //           Projects
// //         </Link>
// //       </li>
// //       <li>
// //         <Link 
// //           className={`nav-link ${isActive("/contact") ? "text-white font-medium" : "text-neutral-400 hover:text-white"}`}
// //           to="/contact"
// //         >
// //           Contact
// //         </Link>
// //       </li>
// //     </ul>
// //   );
// // }




// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   // Close mobile menu when link is clicked
// //   const handleLinkClick = () => {
// //     setIsOpen(false);
// //   };

// //   return (
// //     <div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-primary/40 h-16 border-b border-white/10">
// //       <div className="mx-auto c-space max-w-7xl h-full">
// //         <div className="flex items-center justify-between h-full py-2 sm:py-0">
// //           <Link
// //             to="/"
// //             className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
// //             onClick={handleLinkClick}
// //           >
// //             Irfan Shazid
// //           </Link>

// //           <button
// //             onClick={() => setIsOpen(!isOpen)}
// //             className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
// //             aria-label="Toggle menu"
// //           >
// //             <img
// //               src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
// //               className="w-6 h-6"
// //               alt="toggle"
// //             />
// //           </button>

// //           {/* Desktop Navigation */}
// //           <nav className="hidden sm:flex">
// //             <Navigation />
// //           </nav>
// //         </div>
// //       </div>

// //       {/* Mobile Navigation */}
// //       {isOpen && (
// //         <motion.div
// //           className="fixed top-16 left-0 right-0 bg-primary/95 backdrop-blur-lg border-b border-white/10 sm:hidden"
// //           initial={{ opacity: 0, y: -10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.3 }}
// //         >
// //           <nav className="py-5" onClick={handleLinkClick}>
// //             <div className="flex flex-col space-y-4 text-center">
// //               <Link 
// //                 className="nav-link text-neutral-400 hover:text-white py-2 transition-colors"
// //                 to="/"
// //               >
// //                 Home
// //               </Link>
// //               <Link 
// //                 className="nav-link text-neutral-400 hover:text-white py-2 transition-colors"
// //                 to="/about"
// //               >
// //                 About
// //               </Link>
// //               <Link 
// //                 className="nav-link text-neutral-400 hover:text-white py-2 transition-colors"
// //                 to="/work"
// //               >
// //                 Projects
// //               </Link>
// //               <Link 
// //                 className="nav-link text-neutral-400 hover:text-white py-2 transition-colors"
// //                 to="/contact"
// //               >
// //                 Contact
// //               </Link>
// //             </div>
// //           </nav>
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Navbar;






// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "motion/react";

// function Navigation({ onLinkClick, isMobile = false }) {
//   const location = useLocation();
  
//   const isActive = (path) => {
//     if (path === "/") {
//       return location.pathname === "/";
//     }
//     return location.pathname === path;
//   };

//   const handleClick = () => {
//     if (isMobile && onLinkClick) {
//       onLinkClick();
//     }
//   };

//   const navItems = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About" },
//     { path: "/work", label: "Projects" },
//     { path: "/contact", label: "Contact" }
//   ];

//   return (
//     <ul className={`flex ${isMobile ? 
//       "flex-col space-y-6 py-6" : 
//       "flex-row sm:space-x-8 space-y-0"}`}
//     >
//       {navItems.map((item) => (
//         <li key={item.path}>
//           <Link 
//             className={`nav-link block py-2 transition-all duration-300 ${
//               isActive(item.path) 
//                 ? "text-white font-semibold scale-105" 
//                 : "text-neutral-400 hover:text-white hover:scale-105"
//             } ${isMobile ? "text-lg" : ""}`}
//             to={item.path}
//             onClick={handleClick}
//           >
//             {item.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Close menu when clicking outside (optional enhancement)
//   // useEffect(() => {
//   //   const handleClickOutside = (event) => {
//   //     if (isOpen && !event.target.closest('.navbar-container')) {
//   //       setIsOpen(false);
//   //     }
//   //   };

//   //   document.addEventListener('mousedown', handleClickOutside);
//   //   return () => document.removeEventListener('mousedown', handleClickOutside);
//   // }, [isOpen]);

//   return (
//     <div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-primary/40 border-b border-white/10 navbar-container">
//       <div className="mx-auto c-space max-w-7xl">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 sm:py-2">
//           {/* Logo and Mobile Menu Button */}
//           <div className="flex items-center justify-between w-full sm:w-auto">
//             <Link
//               to="/"
//               className="text-xl font-bold transition-all duration-300 text-neutral-400 hover:text-white hover:scale-105"
//               onClick={() => setIsOpen(false)}
//             >
//               Irfan Shazid
//             </Link>

//             {/* Hamburger Menu Button */}
//             <button
//               onClick={toggleMenu}
//               className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden transition-all duration-300"
//               aria-label="Toggle menu"
//               aria-expanded={isOpen}
//             >
//               <motion.span
//                 className="w-6 h-0.5 bg-current mb-1.5 rounded-full"
//                 animate={{
//                   rotate: isOpen ? 45 : 0,
//                   y: isOpen ? 8 : 0,
//                   opacity: 1
//                 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <motion.span
//                 className="w-6 h-0.5 bg-current mb-1.5 rounded-full"
//                 animate={{
//                   opacity: isOpen ? 0 : 1,
//                   scale: isOpen ? 0 : 1
//                 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <motion.span
//                 className="w-6 h-0.5 bg-current rounded-full"
//                 animate={{
//                   rotate: isOpen ? -45 : 0,
//                   y: isOpen ? -8 : 0,
//                   opacity: 1
//                 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </button>
//           </div>

//           {/* Desktop Navigation - Always Visible */}
//           <nav className="hidden sm:flex">
//             <Navigation />
//           </nav>

//           {/* Mobile Navigation - Animated */}
//           <AnimatePresence>
//             {isOpen && (
//               <motion.div
//                 className="sm:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-lg border-b border-white/10"
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//               >
//                 <nav className="px-6">
//                   <Navigation onLinkClick={handleLinkClick} isMobile={true} />
//                 </nav>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

function Navigation({ onLinkClick, isMobile = false }) {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  const handleClick = () => {
    if (isMobile && onLinkClick) {
      onLinkClick();
    }
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/work", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <ul className={`flex ${isMobile ? 
      "flex-col space-y-4 md:space-y-6 py-4 md:py-6" : 
      "flex-row space-x-4 md:space-x-6 lg:space-x-8"}`}
    >
      {navItems.map((item) => (
        <li key={item.path}>
          <Link 
            className={`nav-link block py-1 md:py-2 transition-all duration-300 ${
              isActive(item.path) 
                ? "text-white font-semibold scale-105" 
                : "text-neutral-400 hover:text-white hover:scale-105"
            } ${isMobile ? "text-base md:text-lg text-center" : "text-sm md:text-base"}`}
            to={item.path}
            onClick={handleClick}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on a link or outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 navbar-container ${
      isScrolled 
        ? 'backdrop-blur-xl bg-primary/80 border-b border-white/10 shadow-lg' 
        : 'backdrop-blur-lg bg-primary/40 border-b border-white/5'
    }`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 sm:py-4">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center justify-between w-full sm:w-auto">
            <Link
              to="/"
              className="text-lg sm:text-xl font-bold transition-all duration-300 text-neutral-400 hover:text-white hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Irfan Shazid
            </Link>

            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden transition-all duration-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <motion.span
                className="w-6 h-0.5 bg-current mb-1.5 rounded-full"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 6 : 0,
                  opacity: 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-current mb-1.5 rounded-full"
                animate={{
                  opacity: isOpen ? 0 : 1,
                  scale: isOpen ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-current rounded-full"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -6 : 0,
                  opacity: 1
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden sm:flex">
            <Navigation onLinkClick={handleLinkClick} />
          </nav>

          {/* Mobile Navigation - Animated */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="sm:hidden fixed inset-0 top-14 bg-primary/95 backdrop-blur-xl z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div
                  className="bg-gradient-to-b from-primary/95 to-primary/90 border-b border-white/10 shadow-xl"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <nav className="px-6 pb-6 pt-4">
                    <Navigation onLinkClick={handleLinkClick} isMobile={true} />
                  </nav>
                </motion.div>
                
                {/* Click outside to close area */}
                <div 
                  className="flex-1 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;