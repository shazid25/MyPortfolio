// // import { useRef, useEffect } from "react";
// // import Card from "../components/Card";
// // import { Globe } from "../components/globe";
// // import CopyEmailButton from "../components/CopyEmailButton";
// // import { Frameworks } from "../components/FrameWorks";
// // import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
// // import { Link } from "react-router";

// // const About = () => {
// //   const grid2Container = useRef();

// //   useEffect(() => {
// //     // Add intersection observer for scroll animations
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add('animate-visible');
// //           }
// //         });
// //       },
// //       { threshold: 0.1 }
// //     );

// //     document.querySelectorAll('.animate-on-scroll').forEach((el) => {
// //       observer.observe(el);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <section className="c-space section-spacing" id="about">
// //       <h2 className="text-heading animate-fade-in">About Me</h2>
// //       <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
// //         {/* Grid 1 - Full Screen Hero Section */}
// //         <div className="md:col-span-6 flex items-end grid-default-color grid-1 relative overflow-hidden group animate-on-scroll min-h-[500px] md:min-h-[600px]">
// //           {/* Full Screen Background Image */}
// //           <div className="absolute inset-0 w-full h-full">
// //             <img
// //               src="assets/me.jpg"
// //               className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
// //               alt="Irfan Shazid"
// //               style={{ transformOrigin: 'center center' }}
// //             />
// //           </div>

// //           {/* Enhanced Gradient overlay */}
// //           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
// //           <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        

// //           {/* Enhanced Social Media Icons */}
// //           <div className="absolute top-8 right-8 z-20 animate-slide-in-left">
// //             <div className="flex flex-col space-y-4">
// //               <a
// //                 href="https://web.facebook.com/mr.warrior03"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="social-icon bg-blue-600 hover:bg-blue-500 animate-float delay-[100ms]"
// //               >
// //                 <FaFacebook size={20} />
// //               </a>
// //               <a
// //                 href="https://www.instagram.com/irfan_shazid/"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="social-icon bg-pink-600 hover:bg-pink-500 animate-float delay-[200ms]"
// //               >
// //                 <FaInstagram size={20} />
// //               </a>
// //               <a
// //                 href="https://www.linkedin.com/in/irfan-shazid/"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="social-icon bg-blue-500 hover:bg-blue-400 animate-float delay-[300ms]"
// //               >
// //                 <FaLinkedin size={20} />
// //               </a>
// //               <a
// //                 href="https://wa.me/8801647593123?text=Hello%20I%20want%20to%20contact%20you"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="social-icon bg-green-600 hover:bg-green-500 animate-float delay-[400ms]"
// //               >
// //                 <FaWhatsapp size={20} />
// //               </a>
// //               <a
// //                 href="https://github.com/shazid25"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="social-icon bg-gray-800 hover:bg-gray-700 animate-float delay-[500ms]"
// //               >
// //                 <FaGithub size={20} />
// //               </a>
// //             </div>
// //           </div>

// //           {/* Bottom Content Section */}
// //           <div className="z-10 relative p-8 w-full mt-auto">
// //             <div className="max-w-2xl animate-slide-in-up delay-300">
// //               <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
// //                 Over the last 1 year, I've mastered <span className="text-yellow-400 font-bold">frontend</span> and{" "}
// //                 <span className="text-yellow-300 font-bold">backend</span> development to create dynamic, scalable web applications
// //                 that deliver exceptional user experiences.
// //               </p>

// //               {/* Enhanced CTA Button */}

// //               <div className="animate-bounce-in delay-500">
// //                 <Link to="/work">
// //                   <button className="cta-button bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl glow-effect text-lg">
// //                     🚀 View My Projects
// //                   </button>
// //                 </Link>
// //               </div>

// //             </div>
// //           </div>

// //           {/* Enhanced floating elements animation */}
// //           <div className="absolute top-20 left-1/4 animate-float-slow">
// //             <div className="w-6 h-6 bg-blue-400 rounded-full opacity-80 glow-blue"></div>
// //           </div>
// //           <div className="absolute bottom-40 right-1/3 animate-float-slower">
// //             <div className="w-4 h-4 bg-purple-400 rounded-full opacity-80 glow-purple"></div>
// //           </div>
// //           <div className="absolute top-1/2 left-20 animate-pulse-slow">
// //             <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-70 glow-yellow"></div>
// //           </div>
// //           <div className="absolute bottom-1/4 right-20 animate-bounce-slow">
// //             <div className="w-5 h-5 bg-cyan-400 rounded-full opacity-60"></div>
// //           </div>
// //         </div>

// //         {/* Grid 2 - Skills Showcase */}
// //         <div className="md:col-span-2 grid-special-color grid-2 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 animate-on-scroll">
// //           <div className="flex flex-col items-center justify-center gap-6 size-full p-6">
// //             <div className="text-center animate-rotate-in">
// //               <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-180 transition-transform duration-700 shadow-lg">
// //                 <span className="text-white text-2xl">🚀</span>
// //               </div>
// //               <p className="headtext text-white font-bold">Skills</p>
// //             </div>

// //             {/* Animated skill tags */}
// //             <div className="flex flex-wrap justify-center gap-2 animate-stagger-fade">
// //               {["HTML", "CSS", "Tailwind CSS", "JavaScript(ES6+)", "React", "Node.js", "Express.js", "MongoDB", "C", "C++"].map((skill, index) => (
// //                 <span
// //                   key={skill}
// //                   className="skill-tag px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:glow-white"
// //                   style={{ animationDelay: `${index * 100}ms` }}
// //                 >
// //                   {skill}
// //                 </span>
// //               ))}
// //             </div>

// //             <p className="subtext text-center text-gray-600 animate-fade-in delay-1000">
// //               Continuously learning and building
// //             </p>
// //           </div>

// //           {/* Enhanced animated background elements */}
// //           <div className="absolute inset-0 opacity-15">
// //             <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-blue-400 rounded-full animate-ping-slow"></div>
// //             <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border-2 border-purple-400 rounded-full animate-pulse-slow"></div>
// //             <div className="absolute top-3/4 left-1/3 w-4 h-4 border-2 border-cyan-400 rounded-full animate-bounce-slow"></div>
// //           </div>
// //         </div>

// //         {/* Grid 3 - Tools Section */}
// //         <div className="md:col-span-2 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 grid-2 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 animate-on-scroll">
// //           <div className="flex flex-col items-center justify-center gap-6 size-full p-6">
// //             <div className="text-center animate-rotate-in">
// //               <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-180 transition-transform duration-700 shadow-lg">
// //                 <span className="text-white text-2xl">🛠️</span>
// //               </div>
// //               <p className="headtext text-white font-bold">Tools</p>
// //             </div>

// //             {/* Enhanced tools tags with new additions */}
// //             <div className="flex flex-wrap justify-center gap-2 animate-stagger-fade">
// //               {["Firebase", "Git", "GitHub", "Vercel", "Netlify", "GSAP", "Framer Motion"].map((tool, index) => (
// //                 <span
// //                   key={tool}
// //                   className="tool-tag px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:glow-white"
// //                   style={{ animationDelay: `${index * 100}ms` }}
// //                 >
// //                   {tool}
// //                 </span>
// //               ))}
// //             </div>

// //             <p className="subtext text-center text-gray-200 animate-fade-in delay-1000">
// //               Powering amazing experiences
// //             </p>
// //           </div>

// //           {/* Enhanced animated background elements */}
// //           <div className="absolute inset-0 opacity-10">
// //             <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-green-300 rounded-full animate-ping-slower"></div>
// //             <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border-2 border-emerald-300 rounded-full animate-pulse-slow"></div>
// //             <div className="absolute top-2/3 left-1/2 w-5 h-5 border-2 border-lime-300 rounded-full animate-spin-slow"></div>
// //           </div>
// //         </div>

// //         {/* Grid 4 - Collaboration */}
// //         <div className="md:col-span-3 grid-special-color grid-4 group hover:scale-[1.02] transition-transform duration-500 animate-on-scroll">
// //           <div className="flex flex-col items-center justify-center gap-6 size-full p-6">
// //             <div className="text-center animate-scale-in">
// //               <p className="headtext mb-2 font-bold">
// //                 Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-text-glow">Amazing</span>
// //               </p>
// //               <p className="subtext mb-4">
// //                 Do you want to start a project together?
// //               </p>
// //             </div>
// //             <div className="animate-bounce-in delay-500">
// //               <CopyEmailButton />
// //             </div>

// //             {/* Enhanced animated connection dots */}
// //             <div className="flex gap-3 mt-4">
// //               {[0, 1, 2, 3, 4].map((i) => (
// //                 <div
// //                   key={i}
// //                   className="connection-dot w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse-grow"
// //                   style={{ animationDelay: `${i * 300}ms` }}
// //                 ></div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Grid 5 - Tech Stack */}
// //         <div className="md:col-span-6 grid-default-color grid-5 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500 animate-on-scroll">
// //           <div className="z-10 w-[50%]">
// //             <p className="headText text-amber-500 text-3xl animate-fade-in font-bold">Tech Stack</p>
// //             <p className="subtext animate-fade-in delay-300">
// //               I specialize in a wide range of modern languages, frameworks, and tools that help me build fast, scalable, and high-quality applications.
// //               From crafting smooth and intuitive user interfaces to developing secure and powerful back-end systems, I love turning ideas into real products.
// //               I’m always learning new technologies, refining my skills, and creating better digital experiences every single day.
// //             </p>
// //           </div>
// //           <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 group-hover:scale-150 transition-transform duration-1000">
// //             <Frameworks />
// //           </div>

// //           {/* Enhanced animated background pattern */}
// //           <div className="absolute inset-0 opacity-5">
// //             <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-400 animate-pulse-slow"></div>
// //             <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-purple-400 animate-pulse-slow delay-1500"></div>
// //             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-cyan-400 rounded-full animate-spin-slow"></div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Enhanced Animation Styles */}
// //       <style jsx>{`
// //         @keyframes fade-in {
// //           0% { opacity: 0; }
// //           100% { opacity: 1; }
// //         }
        
// //         @keyframes slide-in-up {
// //           0% {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         @keyframes slide-in-left {
// //           0% {
// //             opacity: 0;
// //             transform: translateX(30px);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }
        
// //         @keyframes slide-in-right {
// //           0% {
// //             opacity: 0;
// //             transform: translateX(-30px);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }
        
// //         @keyframes bounce-in {
// //           0% {
// //             opacity: 0;
// //             transform: scale(0.3);
// //           }
// //           50% {
// //             opacity: 1;
// //             transform: scale(1.05);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: scale(1);
// //           }
// //         }
        
// //         @keyframes float {
// //           0%, 100% {
// //             transform: translateY(0);
// //           }
// //           50% {
// //             transform: translateY(-10px);
// //           }
// //         }

// //         @keyframes float-slow {
// //           0%, 100% {
// //             transform: translateY(0);
// //           }
// //           50% {
// //             transform: translateY(-15px);
// //           }
// //         }

// //         @keyframes float-slower {
// //           0%, 100% {
// //             transform: translateY(0);
// //           }
// //           50% {
// //             transform: translateY(-8px);
// //           }
// //         }
        
// //         @keyframes rotate-in {
// //           0% {
// //             opacity: 0;
// //             transform: rotate(-180deg) scale(0.3);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: rotate(0) scale(1);
// //           }
// //         }
        
// //         @keyframes scale-in {
// //           0% {
// //             opacity: 0;
// //             transform: scale(0.5);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: scale(1);
// //           }
// //         }
        
// //         @keyframes stagger-fade {
// //           0% {
// //             opacity: 0;
// //             transform: translateY(10px);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         @keyframes pulse-slow {
// //           0%, 100% {
// //             opacity: 0.5;
// //           }
// //           50% {
// //             opacity: 1;
// //           }
// //         }

// //         @keyframes ping-slow {
// //           0% {
// //             transform: scale(1);
// //             opacity: 1;
// //           }
// //           75%, 100% {
// //             transform: scale(2);
// //             opacity: 0;
// //           }
// //         }

// //         @keyframes bounce-slow {
// //           0%, 100% {
// //             transform: translateY(0);
// //           }
// //           50% {
// //             transform: translateY(-10px);
// //           }
// //         }

// //         @keyframes spin-slow {
// //           0% {
// //             transform: rotate(0deg);
// //           }
// //           100% {
// //             transform: rotate(360deg);
// //           }
// //         }

// //         @keyframes text-glow {
// //           0%, 100% {
// //             text-shadow: 0 0 5px rgba(34, 211, 238, 0.5);
// //           }
// //           50% {
// //             text-shadow: 0 0 20px rgba(34, 211, 238, 0.8), 0 0 30px rgba(34, 211, 238, 0.6);
// //           }
// //         }

// //         @keyframes pulse-grow {
// //           0%, 100% {
// //             transform: scale(1);
// //           }
// //           50% {
// //             transform: scale(1.3);
// //           }
// //         }

// //         @keyframes expand-width {
// //           0% {
// //             width: 0;
// //           }
// //           100% {
// //             width: 8rem;
// //           }
// //         }

// //         @keyframes visible {
// //           0% {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         .animate-fade-in {
// //           animation: fade-in 1s ease-out;
// //         }
        
// //         .animate-slide-in-up {
// //           animation: slide-in-up 1s ease-out both;
// //         }

// //         .animate-slide-in-left {
// //           animation: slide-in-left 1s ease-out both;
// //         }
        
// //         .animate-slide-in-right {
// //           animation: slide-in-right 1s ease-out both;
// //         }
        
// //         .animate-bounce-in {
// //           animation: bounce-in 0.8s ease-out both;
// //         }
        
// //         .animate-float {
// //           animation: float 3s ease-in-out infinite;
// //         }

// //         .animate-float-slow {
// //           animation: float-slow 4s ease-in-out infinite;
// //         }

// //         .animate-float-slower {
// //           animation: float-slower 5s ease-in-out infinite;
// //         }
        
// //         .animate-rotate-in {
// //           animation: rotate-in 1s ease-out both;
// //         }
        
// //         .animate-scale-in {
// //           animation: scale-in 0.8s ease-out both;
// //         }
        
// //         .animate-stagger-fade > * {
// //           animation: stagger-fade 0.6s ease-out both;
// //         }

// //         .animate-pulse-slow {
// //           animation: pulse-slow 3s ease-in-out infinite;
// //         }

// //         .animate-ping-slow {
// //           animation: ping-slow 2s ease-in-out infinite;
// //         }

// //         .animate-ping-slower {
// //           animation: ping-slow 3s ease-in-out infinite;
// //         }

// //         .animate-bounce-slow {
// //           animation: bounce-slow 4s ease-in-out infinite;
// //         }

// //         .animate-spin-slow {
// //           animation: spin-slow 8s linear infinite;
// //         }

// //         .animate-text-glow {
// //           animation: text-glow 2s ease-in-out infinite;
// //         }

// //         .animate-pulse-grow {
// //           animation: pulse-grow 2s ease-in-out infinite;
// //         }

// //         .animate-expand-width {
// //           animation: expand-width 1s ease-out 0.5s both;
// //         }

// //         .animate-on-scroll {
// //           opacity: 0;
// //           transform: translateY(30px);
// //           transition: opacity 0.6s ease, transform 0.6s ease;
// //         }

// //         .animate-on-scroll.animate-visible {
// //           opacity: 1;
// //           transform: translateY(0);
// //         }

// //         .delay-300 {
// //           animation-delay: 0.3s;
// //         }
        
// //         .delay-500 {
// //           animation-delay: 0.5s;
// //         }
        
// //         .delay-1000 {
// //           animation-delay: 1s;
// //         }

// //         /* Enhanced component styles */
// //         .social-icon {
// //           width: 44px;
// //           height: 44px;
// //           border-radius: 50%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           color: white;
// //           transition: all 0.3s ease;
// //           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// //         }

// //         .social-icon:hover {
// //           transform: scale(1.15) translateY(-3px);
// //           box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
// //         }

// //         .cta-button {
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .cta-button::before {
// //           content: '';
// //           position: absolute;
// //           top: 0;
// //           left: -100%;
// //           width: 100%;
// //           height: 100%;
// //           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
// //           transition: left 0.5s;
// //         }

// //         .cta-button:hover::before {
// //           left: 100%;
// //         }

// //         .glow-effect:hover {
// //           box-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
// //         }

// //         .glow-blue {
// //           box-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
// //         }

// //         .glow-purple {
// //           box-shadow: 0 0 15px rgba(168, 85, 247, 0.6);
// //         }

// //         .glow-yellow {
// //           box-shadow: 0 0 15px rgba(250, 204, 21, 0.6);
// //         }

// //         .skill-tag:hover, .tool-tag:hover {
// //           box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
// //         }

// //         .connection-dot {
// //           box-shadow: 0 0 8px rgba(34, 211, 238, 0.5);
// //         }

// //         /* Custom shadow for better visibility */
// //         .hover\:shadow-3xl:hover {
// //           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default About;








// import { useRef, useEffect } from "react";
// import CopyEmailButton from "../components/CopyEmailButton";
// import { Frameworks } from "../components/FrameWorks";
// import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
// import { Link } from "react-router";
// import { motion, useAnimation, useInView } from "framer-motion";
// import { 
//   Code, Server, Database, Cpu, Terminal, 
//   Layers, Shield, Zap, Cloud, GitBranch,
//   Palette, Smartphone, Globe, CpuIcon, 
//   HardDrive, Wrench, Package
// } from "lucide-react";

// const About = () => {
//   const ref = useRef();
//   const isInView = useInView(ref, { once: true, amount: 0.3 });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [isInView, controls]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const floatingVariants = {
//     float: {
//       y: ["0%", "-15%", "0%"],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut"
//       }
//     }
//   };

//   // Categories
//   const frontendSkills = [
//     { name: "HTML5", icon: "🌐", level: 95 },
//     { name: "CSS3", icon: "🎨", level: 90 },
//     { name: "Tailwind CSS", icon: "🌀", level: 85 },
//     { name: "JavaScript", icon: "⚡", level: 88 },
//     { name: "React.js", icon: "⚛️", level: 85 },
//     { name: "Next.js", icon: "🚀", level: 80 },
//     { name: "TypeScript", icon: "📘", level: 75 },
//     { name: "shadcn/ui", icon: "✨", level: 70 },
//     { name: "Framer Motion", icon: "🎬", level: 75 }
//   ];

//   const backendSkills = [
//     { name: "Node.js", icon: "🟢", level: 85 },
//     { name: "Express.js", icon: "🚂", level: 80 },
//     { name: "REST APIs", icon: "🔗", level: 85 },
//     { name: "JWT Auth", icon: "🔐", level: 75 },
//     // { name: "C++", icon: "➕", level: 65 },
//     // { name: "C", icon: "🔷", level: 70 },
//     // { name: "Python", icon: "🐍", level: 60 },
//     { name: "Better Auth", icon: "🛡️", level: 70 },
//     { name: "Clerk", icon: "👥", level: 65 }
//   ];

//   const databaseSkills = [
    
//     { name: "PostgreSQL", icon: "🐘", level: 75 },
//     { name: "Prisma", icon: "⚙️", level: 70 },
//     { name: "MongoDB", icon: "🍃", level: 80 },
//     { name: "Firebase", icon: "🔥", level: 75 },
//     { name: "Redis", icon: "🗃️", level: 65 },
//     { name: "MySQL", icon: "🐬", level: 70 }
//   ];

//   const tools = [
//     { name: "Git", icon: "📌", category: "Version Control" },
//     { name: "GitHub", icon: "🐙", category: "Version Control" },
//     { name: "VS Code", icon: "💻", category: "Editor" },
//     { name: "Vercel", icon: "▲", category: "Deployment" },
//     { name: "Netlify", icon: "🌐", category: "Deployment" },
//     { name: "Firebase", icon: "🔥", level: 75 },
    
//     // { name: "Docker", icon: "🐳", category: "Container" },
//     { name: "Postman", icon: "📫", category: "API Testing" },
//     // { name: "Figma", icon: "🎨", category: "Design" },
//     // { name: "AWS", icon: "☁️", category: "Cloud" }
//   ];

//   return (
//     <section 
//       ref={ref}
//       className="relative min-h-screen pt-16 md:pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-black via-gray-900/30 to-black"
//       id="about"
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Hero Section */}
//         <motion.div 
//           className="relative rounded-3xl overflow-hidden mb-16 md:mb-24 min-h-[600px] md:min-h-[700px]"
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//         >
//           {/* Background Image with Parallax */}
//           <motion.div 
//             className="absolute inset-0"
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//           >
//             <img
//               src="assets/me.jpg"
//               className="w-full h-full object-cover object-center"
//               alt="Irfan Shazid"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
//             <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
//           </motion.div>

//           {/* Content */}
//           <div className="relative h-full flex flex-col justify-end p-6 md:p-12">
//             <div className="max-w-3xl">
//               {/* Social Media Icons */}
//               <motion.div 
//                 className="absolute top-6 right-6 flex flex-col gap-3"
//                 variants={itemVariants}
//               >
//                 {[
//                   { Icon: FaFacebook, href: "https://web.facebook.com/mr.warrior03", color: "bg-blue-600" },
//                   { Icon: FaInstagram, href: "https://www.instagram.com/irfan_shazid/", color: "bg-gradient-to-r from-pink-500 to-purple-500" },
//                   { Icon: FaLinkedin, href: "https://www.linkedin.com/in/irfan-shazid/", color: "bg-blue-700" },
//                   { Icon: FaWhatsapp, href: "https://wa.me/8801647593123?text=Hello%20I%20want%20to%20contact%20you", color: "bg-green-500" },
//                   { Icon: FaGithub, href: "https://github.com/shazid25", color: "bg-gray-800" },
//                 ].map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white backdrop-blur-sm border border-white/20 hover:scale-110 transition-all duration-300`}
//                     variants={floatingVariants}
//                     animate="float"
//                     style={{ animationDelay: `${index * 0.3}s` }}
//                     whileHover={{ scale: 1.2, rotate: 5 }}
//                   >
//                     <social.Icon size={20} />
//                   </motion.a>
//                 ))}
//               </motion.div>

//               {/* Introduction Text */}
//               <motion.div variants={itemVariants}>
//                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
//                   <Zap className="w-4 h-4 text-cyan-400" />
//                   <span className="text-sm font-medium text-cyan-400">Full Stack Developer</span>
//                 </div>

//                 <motion.h1 
//                   className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
//                   variants={itemVariants}
//                 >
//                   Crafting Digital{" "}
//                   <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
//                     Experiences
//                   </span>
//                 </motion.h1>

//                 <motion.p 
//                   className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
//                   variants={itemVariants}
//                 >
//                   Over the last year, I've mastered both <span className="text-cyan-400 font-bold">frontend</span> and{" "}
//                   <span className="text-purple-400 font-bold">backend</span> development to create dynamic, 
//                   scalable web applications that deliver exceptional user experiences.
//                 </motion.p>

//                 <motion.div variants={itemVariants}>
//                   <Link to="/work">
//                     <motion.button
//                       className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg overflow-hidden"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <span className="relative z-10 flex items-center gap-2">
//                         🚀 View My Projects
//                         <motion.span
//                           animate={{ x: [0, 5, 0] }}
//                           transition={{ duration: 1, repeat: Infinity }}
//                         >
//                           →
//                         </motion.span>
//                       </span>
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
//                         initial={{ x: "-100%" }}
//                         whileHover={{ x: "0%" }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </motion.button>
//                   </Link>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Skills Grid */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//         >
//           {/* Frontend Skills Card */}
//           <motion.div
//             className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-6 hover:border-cyan-500/30 transition-all duration-500"
//             variants={itemVariants}
//             whileHover={{ y: -10 }}
//           >
//             <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
//               <Code className="w-6 h-6 text-cyan-400" />
//             </div>
            
//             <div className="mb-6">
//               <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
//                 <Palette className="w-5 h-5 text-cyan-400" />
//                 Frontend Development
//               </h3>
//               <p className="text-gray-400 text-sm">Building beautiful, responsive user interfaces</p>
//             </div>

//             <div className="space-y-3">
//               {frontendSkills.map((skill, index) => (
//                 <div key={skill.name} className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <span className="text-xl">{skill.icon}</span>
//                     <span className="text-white">{skill.name}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
//                       <motion.div
//                         className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
//                         initial={{ width: 0 }}
//                         animate={{ width: `${skill.level}%` }}
//                         transition={{ duration: 1, delay: index * 0.1 }}
//                       />
//                     </div>
//                     <span className="text-sm text-gray-400 w-8">{skill.level}%</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Backend Skills Card */}
//           <motion.div
//             className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-6 hover:border-green-500/30 transition-all duration-500"
//             variants={itemVariants}
//             whileHover={{ y: -10 }}
//           >
//             <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 flex items-center justify-center">
//               <Server className="w-6 h-6 text-green-400" />
//             </div>
            
//             <div className="mb-6">
//               <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
//                 <CpuIcon className="w-5 h-5 text-green-400" />
//                 Backend Development
//               </h3>
//               <p className="text-gray-400 text-sm">Building robust, scalable server-side applications</p>
//             </div>

//             <div className="space-y-3">
//               {backendSkills.map((skill, index) => (
//                 <div key={skill.name} className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <span className="text-xl">{skill.icon}</span>
//                     <span className="text-white">{skill.name}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
//                       <motion.div
//                         className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
//                         initial={{ width: 0 }}
//                         animate={{ width: `${skill.level}%` }}
//                         transition={{ duration: 1, delay: index * 0.1 }}
//                       />
//                     </div>
//                     <span className="text-sm text-gray-400 w-8">{skill.level}%</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Database Skills Card */}
//           <motion.div
//             className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-6 hover:border-purple-500/30 transition-all duration-500"
//             variants={itemVariants}
//             whileHover={{ y: -10 }}
//           >
//             <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center">
//               <Database className="w-6 h-6 text-purple-400" />
//             </div>
            
//             <div className="mb-6">
//               <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
//                 <HardDrive className="w-5 h-5 text-purple-400" />
//                 Database & Storage
//               </h3>
//               <p className="text-gray-400 text-sm">Managing data with modern database solutions</p>
//             </div>

//             <div className="space-y-3">
//               {databaseSkills.map((skill, index) => (
//                 <div key={skill.name} className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <span className="text-xl">{skill.icon}</span>
//                     <span className="text-white">{skill.name}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
//                       <motion.div
//                         className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
//                         initial={{ width: 0 }}
//                         animate={{ width: `${skill.level}%` }}
//                         transition={{ duration: 1, delay: index * 0.1 }}
//                       />
//                     </div>
//                     <span className="text-sm text-gray-400 w-8">{skill.level}%</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Tools Card */}
//           <motion.div
//             className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-6 hover:border-orange-500/30 transition-all duration-500"
//             variants={itemVariants}
//             whileHover={{ y: -10 }}
//           >
//             <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 flex items-center justify-center">
//               <Wrench className="w-6 h-6 text-orange-400" />
//             </div>
            
//             <div className="mb-6">
//               <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
//                 <Package className="w-5 h-5 text-orange-400" />
//                 Development Tools
//               </h3>
//               <p className="text-gray-400 text-sm">Tools and platforms that power my workflow</p>
//             </div>

//             <div className="space-y-4">
//               {tools.map((tool, index) => (
//                 <motion.div
//                   key={tool.name}
//                   className="flex items-center gap-3 group/tool"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/tool:bg-white/10 transition-colors">
//                     <span className="text-xl">{tool.icon}</span>
//                   </div>
//                   <div>
//                     <span className="text-white font-medium">{tool.name}</span>
//                     <p className="text-xs text-gray-500">{tool.category}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Tech Stack Visualization */}
//         <motion.div
//           className="relative rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-8 mb-16 overflow-hidden"
//           variants={itemVariants}
//           initial="hidden"
//           animate={controls}
//         >
//           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
          
//           <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
//             <div className="lg:w-1/3">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
//                 <Layers className="w-4 h-4 text-cyan-400" />
//                 <span className="text-sm font-medium text-cyan-400">Tech Ecosystem</span>
//               </div>
              
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                 Complete Development Stack
//               </h3>
              
//               <p className="text-gray-400 mb-6">
//                 I specialize in a wide range of modern languages, frameworks, and tools that help me build 
//                 fast, scalable, and high-quality applications. From crafting intuitive user interfaces to 
//                 developing secure back-end systems, I love turning ideas into real products.
//               </p>
              
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {["Full Stack", "MERN", "Next.js", "TypeScript", "REST APIs", "Responsive Design"].map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="lg:w-2/3 relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
//               <Frameworks />
//             </div>
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           className="relative rounded-2xl bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 p-8 md:p-12 overflow-hidden"
//           variants={itemVariants}
//           initial="hidden"
//           animate={controls}
//         >
//           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
          
//           <div className="relative z-10 text-center">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
//               <Globe className="w-4 h-4 text-cyan-400" />
//               <span className="text-sm font-medium text-cyan-400">Let's Connect</span>
//             </div>
            
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//               Ready to Build Something{" "}
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 Amazing
//               </span>
//               ?
//             </h3>
            
//             <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//               Whether you have a project in mind, need technical consultation, or just want to connect, 
//               I'm always open to discussing new opportunities and collaborations.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <CopyEmailButton />
              
//               <motion.a
//                 href="#contact"
//                 className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 hover:border-white/20 transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Send Message
//               </motion.a>
//             </div>
            
//             {/* Animated Connection Dots */}
//             <div className="flex justify-center gap-3 mt-8">
//               {[0, 1, 2, 3, 4].map((i) => (
//                 <motion.div
//                   key={i}
//                   className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
//                   animate={{
//                     scale: [1, 1.5, 1],
//                     opacity: [0.5, 1, 0.5]
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     delay: i * 0.3
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;





import { useRef, useEffect } from "react";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Code, Server, Database, Cpu, Terminal, 
  Layers, Shield, Zap, Cloud, GitBranch,
  Palette, Smartphone, Globe, CpuIcon, 
  HardDrive, Wrench, Package
} from "lucide-react";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    float: {
      y: ["0%", "-15%", "0%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Categories
  const frontendSkills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Tailwind CSS", icon: "🌀" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "🚀" },
    { name: "TypeScript", icon: "📘" },
    { name: "shadcn/ui", icon: "✨" },
    { name: "Framer Motion", icon: "🎬" }
  ];

  const backendSkills = [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "REST APIs", icon: "🔗" },
    { name: "JWT Auth", icon: "🔐" },
    { name: "Better Auth", icon: "🛡️" },
    { name: "Clerk", icon: "👥" }
  ];

  const databaseSkills = [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Prisma", icon: "⚙️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "Redis", icon: "🗃️" },
    { name: "MySQL", icon: "🐬" }
  ];

  const tools = [
    { name: "Git", icon: "📌", category: "Version Control" },
    { name: "GitHub", icon: "🐙", category: "Version Control" },
    { name: "VS Code", icon: "💻", category: "Editor" },
    { name: "Vercel", icon: "▲", category: "Deployment" },
    { name: "Netlify", icon: "🌐", category: "Deployment" },
    { name: "Firebase", icon: "🔥", category: "Database/Deployment" },
    { name: "Postman", icon: "📫", category: "API Testing" },
  ];

  return (
    <section 
      ref={ref}
      className="relative min-h-screen pt-16 md:pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-black via-gray-900/30 to-black"
      id="about"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden mb-16 md:mb-24 min-h-[600px] md:min-h-[700px]"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Background Image with Parallax */}
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src="assets/me.jpg"
              className="w-full h-full object-cover object-center"
              alt="Irfan Shazid"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          </motion.div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-3xl">
              {/* Social Media Icons */}
              <motion.div 
                className="absolute top-6 right-6 flex flex-col gap-3"
                variants={itemVariants}
              >
                {[
                  { Icon: FaFacebook, href: "https://web.facebook.com/mr.warrior03", color: "bg-blue-600" },
                  { Icon: FaInstagram, href: "https://www.instagram.com/irfan_shazid/", color: "bg-gradient-to-r from-pink-500 to-purple-500" },
                  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/irfan-shazid/", color: "bg-blue-700" },
                  { Icon: FaWhatsapp, href: "https://wa.me/8801647593123?text=Hello%20I%20want%20to%20contact%20you", color: "bg-green-500" },
                  { Icon: FaGithub, href: "https://github.com/shazid25", color: "bg-gray-800" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white backdrop-blur-sm border border-white/20 hover:scale-110 transition-all duration-300`}
                    variants={floatingVariants}
                    animate="float"
                    style={{ animationDelay: `${index * 0.3}s` }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <social.Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Introduction Text */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium text-cyan-400">Full Stack Developer</span>
                </div>

                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
                  variants={itemVariants}
                >
                  Crafting Digital{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </motion.h1>

                <motion.p 
                  className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
                  variants={itemVariants}
                >
                  Over the last year, I've mastered both <span className="text-cyan-400 font-bold">frontend</span> and{" "}
                  <span className="text-purple-400 font-bold">backend</span> development to create dynamic, 
                  scalable web applications that deliver exceptional user experiences.
                </motion.p>

                <motion.div variants={itemVariants}>
                  <Link to="/work">
                    <motion.button
                      className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        🚀 View My Projects
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Frontend Skills Card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-6 hover:border-cyan-500/30 transition-all duration-500"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
              <Code className="w-6 h-6 text-cyan-400" />
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Palette className="w-5 h-5 text-cyan-400" />
                Frontend Development
              </h3>
              <p className="text-gray-400 text-sm">Building beautiful, responsive user interfaces</p>
            </div>

            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-3 group/skill"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/skill:bg-white/10 transition-colors">
                    <span className="text-xl">{skill.icon}</span>
                  </div>
                  <div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills Card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-6 hover:border-green-500/30 transition-all duration-500"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 flex items-center justify-center">
              <Server className="w-6 h-6 text-green-400" />
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <CpuIcon className="w-5 h-5 text-green-400" />
                Backend Development
              </h3>
              <p className="text-gray-400 text-sm">Building robust, scalable server-side applications</p>
            </div>

            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-3 group/skill"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/skill:bg-white/10 transition-colors">
                    <span className="text-xl">{skill.icon}</span>
                  </div>
                  <div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Database Skills Card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-6 hover:border-purple-500/30 transition-all duration-500"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center">
              <Database className="w-6 h-6 text-purple-400" />
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-purple-400" />
                Database & Storage
              </h3>
              <p className="text-gray-400 text-sm">Managing data with modern database solutions</p>
            </div>

            <div className="space-y-4">
              {databaseSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-3 group/skill"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/skill:bg-white/10 transition-colors">
                    <span className="text-xl">{skill.icon}</span>
                  </div>
                  <div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-6 hover:border-orange-500/30 transition-all duration-500"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 flex items-center justify-center">
              <Wrench className="w-6 h-6 text-orange-400" />
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Package className="w-5 h-5 text-orange-400" />
                Development Tools
              </h3>
              <p className="text-gray-400 text-sm">Tools and platforms that power my workflow</p>
            </div>

            <div className="space-y-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="flex items-center gap-3 group/tool"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/tool:bg-white/10 transition-colors">
                    <span className="text-xl">{tool.icon}</span>
                  </div>
                  <div>
                    <span className="text-white font-medium">{tool.name}</span>
                    <p className="text-xs text-gray-500">{tool.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Stack Visualization */}
        <motion.div
          className="relative rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-8 mb-16 overflow-hidden"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Tech Ecosystem</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Complete Development Stack
              </h3>
              
              <p className="text-gray-400 mb-6">
                I specialize in a wide range of modern languages, frameworks, and tools that help me build 
                fast, scalable, and high-quality applications. From crafting intuitive user interfaces to 
                developing secure back-end systems, I love turning ideas into real products.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {["Full Stack", "MERN", "Next.js", "TypeScript", "REST APIs", "Responsive Design"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
              <Frameworks />
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="relative rounded-2xl bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 p-8 md:p-12 overflow-hidden"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Let's Connect</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Build Something{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Amazing
              </span>
              ?
            </h3>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, need technical consultation, or just want to connect, 
              I'm always open to discussing new opportunities and collaborations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CopyEmailButton />
              
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.a>
            </div>
            
            {/* Animated Connection Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;