// import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

// const socials = [
//   {
//     name: "Facebook",
//     icon: <FaFacebook size={20} />,
//     href: "https://web.facebook.com/mr.warrior03",
//     bgClass: "bg-blue-600",
//     hoverBgClass: "hover:bg-blue-500",
//   },
//   {
//     name: "Instagram",
//     icon: <FaInstagram size={20} />,
//     href: "https://www.instagram.com/irfan_shazid/",
//     bgClass: "bg-pink-600",
//     hoverBgClass: "hover:bg-pink-500",
//   },
//   {
//     name: "LinkedIn",
//     icon: <FaLinkedin size={20} />,
//     href: "https://www.linkedin.com/in/irfan-shazid/",
//     bgClass: "bg-blue-500",
//     hoverBgClass: "hover:bg-blue-400",
//   },
//   {
//     name: "WhatsApp",
//     icon: <FaWhatsapp size={20} />,
//     href: "https://wa.me/8801647593123?text=Hello%20I%20want%20to%20contact%20you",
//     bgClass: "bg-green-600",
//     hoverBgClass: "hover:bg-green-500",
//   },
//   {
//     name: "GitHub",
//     icon: <FaGithub size={20} />,
//     href: "https://github.com/shazid25",
//     bgClass: "bg-gray-800",
//     hoverBgClass: "hover:bg-gray-700",
//   },
// ];

// const Footer = () => {
//   return (
//     <section className="flex flex-col items-center justify-center gap-4 pb-3 text-sm text-neutral-400 c-space md:flex-row md:justify-between md:gap-5">
//       <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full md:hidden" />

//       <div className="flex flex-wrap gap-2 text-center">
//         <p>Terms & Conditions</p>
//         <p>|</p>
//         <p>Privacy Policy</p>
//       </div>

//       <div className="flex gap-3 justify-center">
//         {socials.map((social, index) => (
//           <a
//             href={social.href}
//             key={index}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`social-icon ${social.bgClass} ${social.hoverBgClass}`}
//           >
//             {social.icon}
//           </a>
//         ))}
//       </div>

//       <p className="text-center">© 2025 Shazid. All rights reserved.</p>

//       <style jsx>{`
//         .social-icon {
//           width: 44px;
//           height: 44px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//         }

//         .social-icon:hover {
//           transform: scale(1.15) translateY(-3px);
//           box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Footer;






import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const socials = [
  {
    name: "Facebook",
    icon: <FaFacebook size={18} />,
    href: "https://web.facebook.com/mr.warrior03",
    bgClass: "bg-blue-600",
    hoverBgClass: "hover:bg-blue-500",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={18} />,
    href: "https://www.instagram.com/irfan_shazid/",
    bgClass: "bg-pink-600",
    hoverBgClass: "hover:bg-pink-500",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    href: "https://www.linkedin.com/in/irfan-shazid/",
    bgClass: "bg-blue-500",
    hoverBgClass: "hover:bg-blue-400",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={18} />,
    href: "https://wa.me/8801647593123?text=Hello%20I%20want%20to%20contact%20you",
    bgClass: "bg-green-600",
    hoverBgClass: "hover:bg-green-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={18} />,
    href: "https://github.com/shazid25",
    bgClass: "bg-gray-800",
    hoverBgClass: "hover:bg-gray-700",
  },
];

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-4 py-6 pb-4 text-sm text-neutral-400 c-space sm:px-6 md:flex-row md:justify-between md:gap-5 md:px-8">
      {/* Mobile divider */}
      <div className="mb-2 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full md:hidden" />

      {/* Terms & Privacy - Mobile optimized */}
      <div className="flex flex-wrap justify-center gap-2 text-center">
        <p className="text-xs sm:text-sm">Terms & Conditions</p>
        <p className="text-xs sm:text-sm">|</p>
        <p className="text-xs sm:text-sm">Privacy Policy</p>
      </div>

      {/* Social Icons - Mobile optimized */}
      <div className="flex gap-2 justify-center">
        {socials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-icon ${social.bgClass} ${social.hoverBgClass}`}
            aria-label={`Visit ${social.name}`}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Copyright - Mobile optimized */}
      <p className="text-xs text-center sm:text-sm">© 2025 Shazid. All rights reserved.</p>

      <style jsx>{`
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .social-icon:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        /* Mobile-first responsive design */
        @media (max-width: 640px) {
          .social-icon {
            width: 36px;
            height: 36px;
          }
        }

        @media (min-width: 768px) {
          .social-icon {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </section>
  );
};

export default Footer;