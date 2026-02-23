import { useRef, useEffect, useMemo } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router";
import { 
  Code, Server, Database, Cpu, Terminal, 
  Layers, Zap, Globe, CpuIcon, HardDrive, 
  Wrench, Package, Palette 
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

// Internal Components
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

// --- Static Data Outside Component to Prevent Re-renders ---
const SKILLS = {
  frontend: [
    { name: "HTML5", icon: "🌐" }, { name: "CSS3", icon: "🎨" },
    { name: "Tailwind CSS", icon: "🌀" }, { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" }, { name: "Next.js", icon: "🚀" },
    { name: "TypeScript", icon: "📘" }, { name: "shadcn/ui", icon: "✨" },
    { name: "Framer Motion", icon: "🎬" }
  ],
  backend: [
    { name: "Node.js", icon: "🟢" }, { name: "Express.js", icon: "🚂" },
    { name: "REST APIs", icon: "🔗" }, { name: "JWT Auth", icon: "🔐" },
    { name: "Better Auth", icon: "🛡️" }, { name: "Clerk", icon: "👥" }
  ],
  database: [
    { name: "PostgreSQL", icon: "🐘" }, { name: "Prisma", icon: "⚙️" },
    { name: "MongoDB", icon: "🍃" }, { name: "Firebase", icon: "🔥" },
    { name: "Redis", icon: "🗃️" }, { name: "MySQL", icon: "🐬" }
  ],
  tools: [
    { name: "Git", icon: "📌", category: "Version Control" },
    { name: "GitHub", icon: "🐙", category: "Version Control" },
    { name: "VS Code", icon: "💻", category: "Editor" },
    { name: "Vercel", icon: "▲", category: "Deployment" },
    { name: "Firebase", icon: "🔥", category: "Database" },
    { name: "Postman", icon: "📫", category: "API Testing" },
  ]
};

const SOCIALS = [
  { Icon: FaFacebook, href: "https://web.facebook.com/mr.warrior03", color: "bg-blue-600" },
  { Icon: FaInstagram, href: "https://www.instagram.com/irfan_shazid/", color: "bg-gradient-to-r from-pink-500 to-purple-500" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/irfan-shazid/", color: "bg-blue-700" },
  { Icon: FaWhatsapp, href: "https://wa.me/8801647593123", color: "bg-green-500" },
  { Icon: FaGithub, href: "https://github.com/shazid25", color: "bg-gray-800" },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen pt-16 md:pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
      id="about"
    >
      {/* Background Decor - Optimized with will-change */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse will-change-transform" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden mb-16 md:mb-24 min-h-[600px] bg-gray-900"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div className="absolute inset-0" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }}>
            <img
              src="/assets/me.jpg" 
              className="w-full h-full object-cover"
              alt="Irfan Shazid"
              loading="eager" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </motion.div>

          <div className="relative h-full flex flex-col justify-end p-6 md:p-12 min-h-[600px]">
            <div className="max-w-3xl">
              {/* Socials */}
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                {SOCIALS.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} w-11 h-11 rounded-full flex items-center justify-center text-white border border-white/20 hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 8 }}
                  >
                    <social.Icon size={18} />
                  </motion.a>
                ))}
              </div>

              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Full Stack Developer</span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                  Crafting Digital <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Experiences</span>
                </h1>

                <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                  Over the last year, I've mastered <span className="text-cyan-400">frontend</span> and <span className="text-purple-400">backend</span> development to create scalable web applications.
                </p>

                <Link to="/work">
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold flex items-center gap-2"
                  >
                    🚀 View My Projects
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <SkillCard title="Frontend" icon={<Palette className="text-cyan-400"/>} skills={SKILLS.frontend} color="hover:border-cyan-500/50" />
          <SkillCard title="Backend" icon={<Server className="text-green-400"/>} skills={SKILLS.backend} color="hover:border-green-500/50" />
          <SkillCard title="Database" icon={<Database className="text-purple-400"/>} skills={SKILLS.database} color="hover:border-purple-500/50" />
          <SkillCard title="Tools" icon={<Wrench className="text-orange-400"/>} skills={SKILLS.tools} color="hover:border-orange-500/50" isTool />
        </div>

        {/* Frameworks Visualization - The "Heavy" Part */}
        <motion.div 
          className="relative rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-white/10 p-8 mb-16"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-4">Complete Tech Ecosystem</h3>
              <p className="text-gray-400">I use a modern stack designed for performance and developer experience.</p>
            </div>
            <div className="lg:w-2/3 w-full min-h-[300px]">
              {/* Ensure this component handles its own internal loading/errors */}
              <Frameworks />
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center p-12 rounded-3xl bg-gradient-to-b from-gray-900 to-black border border-white/5" variants={itemVariants}>
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Build Something Amazing?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <CopyEmailButton />
            <a href="#contact" className="px-8 py-3 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors">
              Send Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Sub-component for cleaner code
const SkillCard = ({ title, icon, skills, color, isTool }) => (
  <motion.div 
    variants={itemVariants}
    className={`p-6 rounded-2xl bg-gray-900/40 border border-white/5 transition-colors ${color}`}
  >
    <div className="flex items-center gap-3 mb-6">
      {icon}
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    <div className="space-y-3">
      {skills.map((skill) => (
        <div key={skill.name} className="flex items-center gap-3">
          <span className="text-lg">{skill.icon}</span>
          <div>
            <p className="text-sm font-medium text-white leading-none">{skill.name}</p>
            {isTool && <p className="text-[10px] text-gray-500 mt-1">{skill.category}</p>}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default About;