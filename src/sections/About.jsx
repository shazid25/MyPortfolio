// import { useRef } from "react";
// import Card from "../components/Card";
// import { Globe } from "../components/globe";
// import CopyEmailButton from "../components/CopyEmailButton";
// import { Frameworks } from "../components/FrameWorks";

// const About = () => {
//   const grid2Container = useRef();
//   return (
//     <section className="c-space section-spacing" id="about">
//       <h2 className="text-heading">About Me</h2>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
//         {/* Grid 1 */}
//         {/* <div className="flex items-end grid-default-color grid-1">
//           <img
//             src="assets/coding-pov.png"
//             className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
//           />
//           <div className="z-10">
//             <p className="headtext">Hi, I'm Irfan Shazid</p>
//             <p className="subtext">
//               Over the last 1 year, I developed my frontend and backend dev
//               skills to deliver dynamic and software and web applications.
//             </p>
//           </div>
//           <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
//         </div> */}

//         <div className="flex items-end grid-default-color grid-1 relative overflow-hidden">
//           <img
//             src="assets/me.jpg"
//             className="absolute inset-0 w-full h-full object-cover"
//             alt="Irfan Shazid"
//           />

//           {/* Gradient overlay for better text readability */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//           <div className="z-10 relative p-6 animate-fade-in-up">
//             <p className="headtext text-white mb-3">Hi, I'm Irfan Shazid</p>
//             <p className="subtext text-gray-200 animate-slide-in-right">
//               Over the last 1 year, I developed my frontend and backend dev
//               skills to deliver web applications.
//             </p>
//           </div>

//           <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
//         </div>


//         {/* Grid 2 */}
//         <div className="grid-default-color grid-2">
//           <div
//             ref={grid2Container}
//             className="flex items-center justify-center w-full h-full"
//           >
//             <p className="flex items-end text-5xl text-gray-500">
//               CODE IS CRAFT
//             </p>
//             <Card
//               style={{ rotate: "75deg", top: "30%", left: "20%" }}
//               text="GRASP"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "-30deg", top: "60%", left: "45%" }}
//               text="SOLID"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
//               text="Design Patterns"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "-45deg", top: "55%", left: "0%" }}
//               text="Design Principles"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "20deg", top: "10%", left: "38%" }}
//               text="SRP"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "30deg", top: "70%", left: "70%" }}
//               image="assets/logos/csharp-pink.png"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "-45deg", top: "70%", left: "25%" }}
//               image="assets/logos/dotnet-pink.png"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "-45deg", top: "5%", left: "10%" }}
//               image="assets/logos/blazor-pink.png"
//               containerRef={grid2Container}
//             />
//           </div>
//         </div>
//         {/* Grid 3 */}
//         <div className="grid-black-color grid-3">
//           <div className="z-10 w-[50%]">
//             <p className="headtext">Time Zone</p>
//             <p className="subtext">
//               I'm based in Mars, and open to remote work worldwide
//             </p>
//           </div>
//           <figure className="absolute left-[30%] top-[10%]">
//             <Globe />
//           </figure>
//         </div>
//         {/* Grid 4 */}
//         <div className="grid-special-color grid-4">
//           <div className="flex flex-col items-center justify-center gap-4 size-full">
//             <p className="text-center headtext">
//               Do you want to start a project together?
//             </p>
//             <CopyEmailButton />
//           </div>
//         </div>
//         {/* Grid 5 */}
//         <div className="grid-default-color grid-5">
//           <div className="z-10 w-[50%]">
//             <p className="headText">Teck Stack</p>
//             <p className="subtext">
//               I specialize in a variety of languages, frameworks, and tools that
//               allow me to build robust and scalable applications
//             </p>
//           </div>
//           <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
//             <Frameworks />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;










import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading animate-fade-in">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 - Enhanced Hero Section */}
        <div className="md:col-span-4 flex items-end grid-default-color grid-1 relative overflow-hidden group">
          <img
            src="assets/me.jpg"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            alt="Irfan Shazid"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Animated content */}
          <div className="z-10 relative p-6 w-full">
            <p className="headtext text-white mb-3 animate-slide-in-up">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
                Irfan Shazid
              </span>
            </p>
            <p className="subtext text-gray-200 animate-slide-in-up delay-300">
              Over the last 1 year, I developed my{" "}
              <span className="text-yellow-300 font-semibold">frontend</span> and{" "}
              <span className="text-yellow-300 font-semibold">backend</span> dev skills to deliver dynamic web applications.
            </p>

            {/* Animated CTA Button */}
            <div className="mt-4 animate-bounce-in delay-500">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                View My Projects
              </button>
            </div>
          </div>

          {/* Floating elements animation */}
          <div className="absolute top-4 right-4 animate-float">
            <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
          </div>
          <div className="absolute bottom-8 left-6 animate-float delay-1000">
            <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
          </div>

          {/* Social Media Icons */}
          <div className="absolute bottom-4 left-6 flex space-x-4 text-white animate-slide-in-up">
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300 hover:scale-110 animate-float delay-[100ms]"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300 hover:scale-110 animate-float delay-[200ms]"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300 hover:scale-110 animate-float delay-[300ms]"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors duration-300 hover:scale-110 animate-float delay-[400ms]"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-300 hover:scale-110 animate-float delay-[500ms]"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Grid 2 - Skills Showcase (Replacement) */}
        <div className="md:col-span-2 grid-special-color grid-2 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
          <div className="flex flex-col items-center justify-center gap-6 size-full p-6">
            <div className="text-center animate-rotate-in">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-180 transition-transform duration-700">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <p className="headtext text-white">Skills</p>
            </div>

            {/* Animated skill tags */}
            <div className="flex flex-wrap justify-center gap-2 animate-stagger-fade">
              {["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Firebase", "C", "C++", "Git", "GitHub",].map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="subtext text-center text-gray-600 animate-fade-in delay-1000">
              Continuously learning and building
            </p>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-blue-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border-2 border-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Grid 3 - Time Zone */}
        <div className="md:col-span-3 grid-black-color grid-3 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
          <div className="z-10 w-[50%]">
            <p className="headtext animate-slide-in-right">Time Zone</p>
            <p className="subtext animate-slide-in-right delay-300">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%] group-hover:scale-110 transition-transform duration-700">
            <Globe />
          </figure>

          {/* Floating location pin */}
          <div className="absolute bottom-6 right-6 animate-bounce">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
              <span className="text-white text-lg">📍</span>
            </div>
          </div>
        </div>

        {/* Grid 4 - Collaboration */}
        <div className="md:col-span-3 grid-special-color grid-4 group hover:scale-[1.02] transition-transform duration-500">
          <div className="flex flex-col items-center justify-center gap-6 size-full p-6">
            <div className="text-center animate-scale-in">
              <p className="headtext mb-2">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Amazing</span>
              </p>
              <p className="subtext mb-4">
                Do you want to start a project together?
              </p>
            </div>
            <div className="animate-bounce-in delay-500">
              <CopyEmailButton />
            </div>

            {/* Animated connection dots */}
            <div className="flex gap-2 mt-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid 5 - Tech Stack */}
        <div className="md:col-span-6 grid-default-color grid-5 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
          <div className="z-10 w-[50%]">
            <p className="headText animate-fade-in">Tech Stack</p>
            <p className="subtext animate-fade-in delay-300">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 group-hover:scale-150 transition-transform duration-1000">
            <Frameworks />
          </div>

          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-400 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-purple-400 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slide-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes rotate-in {
          0% {
            opacity: 0;
            transform: rotate(-180deg) scale(0.3);
          }
          100% {
            opacity: 1;
            transform: rotate(0) scale(1);
          }
        }
        
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes stagger-fade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 1s ease-out both;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out both;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out both;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-rotate-in {
          animation: rotate-in 1s ease-out both;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out both;
        }
        
        .animate-stagger-fade > * {
          animation: stagger-fade 0.6s ease-out both;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default About;