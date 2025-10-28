import { useRef, useEffect } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const About = () => {
  const grid2Container = useRef();

  useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading animate-fade-in">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 - Full Screen Hero Section */}
        <div className="md:col-span-6 flex items-end grid-default-color grid-1 relative overflow-hidden group animate-on-scroll min-h-[500px] md:min-h-[600px]">
          {/* Full Screen Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="assets/me.jpg"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              alt="Irfan Shazid"
              style={{ transformOrigin: 'center center' }}
            />
          </div>

          {/* Enhanced Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

          {/* Enhanced Name Section */}
          {/* <div className="absolute top-8 left-8 z-20 animate-slide-in-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
              IRFAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-text-glow">SHAZID</span>
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-3 animate-expand-width"></div>
            <p className="text-xl md:text-2xl text-gray-200 font-semibold tracking-wide">MERN Stack Developer</p>
          </div> */}

          {/* Enhanced Social Media Icons */}
          <div className="absolute top-8 right-8 z-20 animate-slide-in-left">
            <div className="flex flex-col space-y-4">
              <a
                href="https://web.facebook.com/mr.warrior03"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bg-blue-600 hover:bg-blue-500 animate-float delay-[100ms]"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/irfan_shazid/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bg-pink-600 hover:bg-pink-500 animate-float delay-[200ms]"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/irfan-shazid/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bg-blue-500 hover:bg-blue-400 animate-float delay-[300ms]"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://wa.me/8801647593123?text=Hello%20I%20want%20to%20contact%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bg-green-600 hover:bg-green-500 animate-float delay-[400ms]"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://github.com/shazid25"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bg-gray-800 hover:bg-gray-700 animate-float delay-[500ms]"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Bottom Content Section */}
          <div className="z-10 relative p-8 w-full mt-auto">
            <div className="max-w-2xl animate-slide-in-up delay-300">
              <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                Over the last 1 year, I've mastered <span className="text-yellow-300 font-bold">frontend</span> and{" "}
                <span className="text-yellow-300 font-bold">backend</span> development to create dynamic, scalable web applications
                that deliver exceptional user experiences.
              </p>

              {/* Enhanced CTA Button */}

              <div className="animate-bounce-in delay-500">
                <Link to="/work">
                  <button className="cta-button bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl glow-effect text-lg">
                    🚀 View My Projects
                  </button>
                </Link>
              </div>

            </div>
          </div>

          {/* Enhanced floating elements animation */}
          <div className="absolute top-20 left-1/4 animate-float-slow">
            <div className="w-6 h-6 bg-blue-400 rounded-full opacity-80 glow-blue"></div>
          </div>
          <div className="absolute bottom-40 right-1/3 animate-float-slower">
            <div className="w-4 h-4 bg-purple-400 rounded-full opacity-80 glow-purple"></div>
          </div>
          <div className="absolute top-1/2 left-20 animate-pulse-slow">
            <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-70 glow-yellow"></div>
          </div>
          <div className="absolute bottom-1/4 right-20 animate-bounce-slow">
            <div className="w-5 h-5 bg-cyan-400 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Grid 2 - Skills Showcase */}
        <div className="md:col-span-2 grid-special-color grid-2 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 animate-on-scroll">
          <div className="flex flex-col items-center justify-center gap-6 size-full p-6">
            <div className="text-center animate-rotate-in">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-180 transition-transform duration-700 shadow-lg">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <p className="headtext text-white font-bold">Skills</p>
            </div>

            {/* Animated skill tags */}
            <div className="flex flex-wrap justify-center gap-2 animate-stagger-fade">
              {["HTML", "CSS", "Tailwind CSS", "JavaScript(ES6+)", "React", "Node.js", "Express.js", "MongoDB", "C", "C++"].map((skill, index) => (
                <span
                  key={skill}
                  className="skill-tag px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:glow-white"
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

          {/* Enhanced animated background elements */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-blue-400 rounded-full animate-ping-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border-2 border-purple-400 rounded-full animate-pulse-slow"></div>
            <div className="absolute top-3/4 left-1/3 w-4 h-4 border-2 border-cyan-400 rounded-full animate-bounce-slow"></div>
          </div>
        </div>

        {/* Grid 3 - Tools Section */}
        <div className="md:col-span-2 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 grid-2 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 animate-on-scroll">
          <div className="flex flex-col items-center justify-center gap-6 size-full p-6">
            <div className="text-center animate-rotate-in">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-180 transition-transform duration-700 shadow-lg">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <p className="headtext text-white font-bold">Tools</p>
            </div>

            {/* Enhanced tools tags with new additions */}
            <div className="flex flex-wrap justify-center gap-2 animate-stagger-fade">
              {["Firebase", "Git", "GitHub", "Vercel", "Netlify", "GSAP", "Framer Motion"].map((tool, index) => (
                <span
                  key={tool}
                  className="tool-tag px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:glow-white"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="subtext text-center text-gray-200 animate-fade-in delay-1000">
              Powering amazing experiences
            </p>
          </div>

          {/* Enhanced animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-green-300 rounded-full animate-ping-slower"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border-2 border-emerald-300 rounded-full animate-pulse-slow"></div>
            <div className="absolute top-2/3 left-1/2 w-5 h-5 border-2 border-lime-300 rounded-full animate-spin-slow"></div>
          </div>
        </div>

        {/* Grid 4 - Collaboration */}
        <div className="md:col-span-3 grid-special-color grid-4 group hover:scale-[1.02] transition-transform duration-500 animate-on-scroll">
          <div className="flex flex-col items-center justify-center gap-6 size-full p-6">
            <div className="text-center animate-scale-in">
              <p className="headtext mb-2 font-bold">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-text-glow">Amazing</span>
              </p>
              <p className="subtext mb-4">
                Do you want to start a project together?
              </p>
            </div>
            <div className="animate-bounce-in delay-500">
              <CopyEmailButton />
            </div>

            {/* Enhanced animated connection dots */}
            <div className="flex gap-3 mt-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="connection-dot w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse-grow"
                  style={{ animationDelay: `${i * 300}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid 5 - Tech Stack */}
        <div className="md:col-span-6 grid-default-color grid-5 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500 animate-on-scroll">
          <div className="z-10 w-[50%]">
            <p className="headText text-amber-500 text-3xl animate-fade-in font-bold">Tech Stack</p>
            <p className="subtext animate-fade-in delay-300">
              I specialize in a wide range of modern languages, frameworks, and tools that help me build fast, scalable, and high-quality applications.
              From crafting smooth and intuitive user interfaces to developing secure and powerful back-end systems, I love turning ideas into real products.
              I’m always learning new technologies, refining my skills, and creating better digital experiences every single day.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 group-hover:scale-150 transition-transform duration-1000">
            <Frameworks />
          </div>

          {/* Enhanced animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-400 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-purple-400 animate-pulse-slow delay-1500"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-cyan-400 rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Animation Styles */}
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

        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
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

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(34, 211, 238, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(34, 211, 238, 0.8), 0 0 30px rgba(34, 211, 238, 0.6);
          }
        }

        @keyframes pulse-grow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }

        @keyframes expand-width {
          0% {
            width: 0;
          }
          100% {
            width: 8rem;
          }
        }

        @keyframes visible {
          0% {
            opacity: 0;
            transform: translateY(30px);
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

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out both;
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

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 5s ease-in-out infinite;
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

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s ease-in-out infinite;
        }

        .animate-ping-slower {
          animation: ping-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }

        .animate-pulse-grow {
          animation: pulse-grow 2s ease-in-out infinite;
        }

        .animate-expand-width {
          animation: expand-width 1s ease-out 0.5s both;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .animate-on-scroll.animate-visible {
          opacity: 1;
          transform: translateY(0);
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

        /* Enhanced component styles */
        .social-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .social-icon:hover {
          transform: scale(1.15) translateY(-3px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .cta-button {
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .glow-effect:hover {
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
        }

        .glow-blue {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
        }

        .glow-purple {
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.6);
        }

        .glow-yellow {
          box-shadow: 0 0 15px rgba(250, 204, 21, 0.6);
        }

        .skill-tag:hover, .tool-tag:hover {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .connection-dot {
          box-shadow: 0 0 8px rgba(34, 211, 238, 0.5);
        }

        /* Custom shadow for better visibility */
        .hover\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default About;