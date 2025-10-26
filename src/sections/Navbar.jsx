// // import { useState } from "react";
// // import { motion } from "motion/react";
// // function Navigation() {
// //   return (
// //     <ul className="nav-ul">
// //       <li className="nav-li">
// //         <a className="nav-link" href="#home">
// //           Home
// //         </a>
// //       </li>
// //       <li className="nav-li">
// //         <a className="nav-link" href="#about">
// //           About
// //         </a>
// //       </li>
// //       <li className="nav-li">
// //         <a className="nav-link" href="#work">
// //           Work
// //         </a>
// //       </li>

    


// //       <li className="nav-li">
// //         <a className="nav-link" href="#contact">
// //           Contact
// //         </a>
// //       </li>
// //     </ul>
// //   );
// // }
// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   return (
// //     <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
// //       <div className="mx-auto c-space max-w-7xl">
// //         <div className="flex items-center justify-between py-2 sm:py-0">
// //           <a
// //             href="/"
// //             className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
// //           >
// //             Irfan Shazid
// //           </a>
// //           <button
// //             onClick={() => setIsOpen(!isOpen)}
// //             className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
// //           >
// //             <img
// //               src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
// //               className="w-6 h-6"
// //               alt="toggle"
// //             />
// //           </button>
// //           <nav className="hidden sm:flex">
// //             <Navigation />
// //           </nav>
// //         </div>
// //       </div>
// //       {isOpen && (
// //         <motion.div
// //           className="block overflow-hidden text-center sm:hidden"
// //           initial={{ opacity: 0, x: -10 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           style={{ maxHeight: "100vh" }}
// //           transition={{ duration: 1 }}
// //         >
// //           <nav className="pb-5">
// //             <Navigation />
// //           </nav>
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Navbar;




// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "motion/react";

// function Navigation() {
//   return (
//     <ul className="nav-ul">
//       <li className="nav-li">
//         <Link className="nav-link" to="/">
//           Home
//         </Link>
//       </li>
//       <li className="nav-li">
//         <Link className="nav-link" to="/about">
//           About
//         </Link>
//       </li>
//       <li className="nav-li">
//         <Link className="nav-link" to="/work">
//           Work
//         </Link>
//       </li>
//       <li className="nav-li">
//         <Link className="nav-link" to="/contact">
//           Contact
//         </Link>
//       </li>
//     </ul>
//   );
// }

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
//       <div className="mx-auto c-space max-w-7xl">
//         <div className="flex items-center justify-between py-2 sm:py-0">
//           <Link
//             to="/"
//             className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
//           >
//             Irfan Shazid
//           </Link>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
//           >
//             <img
//               src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
//               className="w-6 h-6"
//               alt="toggle"
//             />
//           </button>

//           <nav className="hidden sm:flex">
//             <Navigation />
//           </nav>
//         </div>
//       </div>

//       {isOpen && (
//         <motion.div
//           className="block overflow-hidden text-center sm:hidden"
//           initial={{ opacity: 0, x: -10 }}
//           animate={{ opacity: 1, x: 0 }}
//           style={{ maxHeight: "100vh" }}
//           transition={{ duration: 1 }}
//         >
//           <nav className="pb-5">
//             <Navigation />
//           </nav>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Navbar;




import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

function Navigation() {
  const location = useLocation();
  
  // Helper function to check active link
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <ul className="flex space-x-8">
      <li>
        <Link 
          className={`nav-link ${isActive("/") ? "text-white font-medium" : "text-neutral-400 hover:text-white"}`}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          className={`nav-link ${isActive("/about") ? "text-white font-medium" : "text-neutral-400 hover:text-white"}`}
          to="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link 
          className={`nav-link ${isActive("/work") ? "text-white font-medium" : "text-neutral-400 hover:text-white"}`}
          to="/work"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link 
          className={`nav-link ${isActive("/contact") ? "text-white font-medium" : "text-neutral-400 hover:text-white"}`}
          to="/contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-primary/40 h-16 border-b border-white/10">
      <div className="mx-auto c-space max-w-7xl h-full">
        <div className="flex items-center justify-between h-full py-2 sm:py-0">
          <Link
            to="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            onClick={handleLinkClick}
          >
            Irfan Shazid
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="fixed top-16 left-0 right-0 bg-primary/95 backdrop-blur-lg border-b border-white/10 sm:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="py-5" onClick={handleLinkClick}>
            <div className="flex flex-col space-y-4 text-center">
              <Link 
                className="nav-link text-neutral-400 hover:text-white py-2 transition-colors"
                to="/"
              >
                Home
              </Link>
              <Link 
                className="nav-link text-neutral-400 hover:text-white py-2 transition-colors"
                to="/about"
              >
                About
              </Link>
              <Link 
                className="nav-link text-neutral-400 hover:text-white py-2 transition-colors"
                to="/work"
              >
                Projects
              </Link>
              <Link 
                className="nav-link text-neutral-400 hover:text-white py-2 transition-colors"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;