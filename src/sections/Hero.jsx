import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Circle, Cpu, Rocket, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const scrollRef = useRef(null);

  const terminalLines = [
    { text: "sudo systemctl start irfan-shazid.profile", color: "text-green-400" },
    { text: "[OK] Core identity loaded: Irfan Shazid", color: "text-blue-400" },
    { text: "ls --skills /frontend", color: "text-green-400" },
    { text: "-> Next.js, React.js, TypeScript, Tailwind, shadcn/ui", color: "text-purple-400" },
    { text: "-> Framer Motion animations initialized", color: "text-purple-300" },
    { text: "ls --skills /backend", color: "text-green-400" },
    { text: "-> Node.js, Express.js, NestJS, REST APIs", color: "text-blue-400" },
    { text: "-> Auth: JWT, Clerk, Better Auth", color: "text-blue-300" },
    { text: "db.connect --provider=prisma", color: "text-green-400" },
    { text: "Connecting: PostgreSQL, MongoDB, Firebase", color: "text-yellow-400" },
    { text: "check --deployment-status", color: "text-green-400" },
    { text: "Vercel: Online | GitHub: Connected | Postman: Testing OK", color: "text-gray-400" },
    { text: "ssh remote@malaysia-furniture-project", color: "text-green-400" },
    { text: "[SUCCESS] International E-commerce Instance: LIVE", color: "text-indigo-400" },
    { text: "grep --philosophy 'Clean Code'", color: "text-green-400" },
    { text: "> Applying Custom Error Classes & Type-Safe Architecture...", color: "text-gray-500" },
    { text: "Status: System ready. Irfan is available for hire.", color: "text-green-400 font-bold" },
  ];

  useEffect(() => {
    if (visibleLines.length < terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, terminalLines[prev.length]]);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    // Removed min-h-screen, flex centering, and all padding (p-0)
    <section className="bg-[#030712] font-mono overflow-hidden mt-25 w-full m-0 p-0">
      {/* Grid gap remains for side-by-side spacing, but vertical margins/padding are gone */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch border-b border-gray-800">

        {/* Left Side: Professional Summary */}
        <motion.div
          className="lg:col-span-5 flex flex-col justify-between bg-[#030712] border-r border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Content Wrapper with zero top/bottom margins */}
          <div className="p-8 space-y-0">
            <div className="inline-block px-3 py-1 border border-indigo-500/30 bg-indigo-500/10 rounded-none mb-4">
              <span className="text-indigo-400 text-xs font-bold uppercase flex items-center gap-2">
                <Cpu size={14} /> Full-Stack Engineer
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white m-0 p-0 leading-none tracking-tighter">
              IRFAN<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400">SHAZID</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mt-4 mb-0 leading-relaxed border-l-4 border-indigo-500 pl-4">
              Building scalable digital architectures from <span className="text-white">Dhaka to the world</span>.
              I prioritize maintainable logic and high-performance engineering.
            </p>

            <div className="flex flex-wrap gap-0 mt-8 border-t border-gray-800">
              <Link to="/work" className="flex-1">
                <button className="w-full py-6 bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all flex items-center justify-center gap-3">
                  Projects <Rocket size={20} />
                </button>
              </Link>

              <a href="/assets/Irfan_Shazid_Resume.pdf" download className="flex-1">
                <button className="w-full py-6 border-l border-gray-800 text-gray-400 font-bold hover:text-white transition-all bg-[#0d1117]/50">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Auto-Scrolling Terminal */}
        <motion.div
          className="lg:col-span-7 relative w-full bg-[#0d1117]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Terminal Container - rounded corners removed to sit flush */}
          <div className="w-full h-full flex flex-col">
            {/* Terminal Header */}
            <div className="bg-[#161b22] px-6 py-4 flex items-center justify-between border-b border-gray-800">
              <div className="flex gap-2">
                <Circle size={12} className="text-[#ff5f56] fill-current" />
                <Circle size={12} className="text-[#ffbd2e] fill-current" />
                <Circle size={12} className="text-[#27c93f] fill-current" />
              </div>
              <div className="text-gray-500 text-xs font-bold flex items-center gap-2">
                <Terminal size={14} /> <span>ZSH — SESSION:MAIN</span>
              </div>
            </div>

            {/* Terminal Body - height expanded to occupy space */}
            <div
              ref={scrollRef}
              className="p-6 text-sm md:text-base h-[600px] lg:h-full overflow-y-auto scroll-smooth flex flex-col gap-2"
            >
              <AnimatePresence>
                {visibleLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-indigo-500/50 select-none font-bold">➜</span>
                    <span className={`${line.color} leading-snug tracking-wide`}>
                      {line.text}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>

              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="flex items-center gap-2 mt-0"
              >
                <ChevronRight size={18} className="text-indigo-500" />
                <div className="w-2.5 h-5 bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;