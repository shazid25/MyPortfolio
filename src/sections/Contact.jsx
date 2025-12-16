// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import Alert from "../components/Alert";
// import { Particles } from "../components/Particles";
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   // service_fox3qoa
//   //template_sz9aq79
//   const [isLoading, setIsLoading] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [alertType, setAlertType] = useState("success");
//   const [alertMessage, setAlertMessage] = useState("");
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const showAlertMessage = (type, message) => {
//     setAlertType(type);
//     setAlertMessage(message);
//     setShowAlert(true);
//     setTimeout(() => {
//       setShowAlert(false);
//     }, 5000);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       console.log("From submitted:", formData);
//       await emailjs.send(
//         "service_fox3qoa",
//         "template_sz9aq79",
//         {
//           from_name: formData.name,
//           to_name: "Irfan Shazid",
//           from_email: formData.email,
//           to_email: "ishazid57@gmail.com",
//           message: formData.message,
//         },
//         "Zq_vSGIokBfqGGyHo"
//       );
//       setIsLoading(false);
//       setFormData({ name: "", email: "", message: "" });
//       showAlertMessage("success", "You message has been sent!");
//     } catch (error) {
//       setIsLoading(false);
//       console.log(error);
//       showAlertMessage("danger", "Somthing went wrong!");
//     }
//   };
//   return (
//     <section className="relative flex items-center c-space section-spacing">
//       <Particles
//         className="absolute inset-0 -z-50"
//         quantity={100}
//         ease={80}
//         color={"#ffffff"}
//         refresh
//       />
//       {showAlert && <Alert type={alertType} text={alertMessage} />}
//       <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
//         <div className="flex flex-col items-start w-full gap-5 mb-10">
//           <h2 className="text-heading">Let's Talk</h2>
//           <p className="font-normal text-neutral-400">
//             Whether you're loking to build a new website, improve your existing
//             platform, or bring a unique project to life, I'm here to help
//           </p>
//         </div>
//         <form className="w-full" onSubmit={handleSubmit}>
//           <div className="mb-5">
//             <label htmlFor="name" className="feild-label">
//               Full Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               className="field-input field-input-focus"
//               placeholder="John Doe"
//               autoComplete="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-5">
//             <label htmlFor="email" className="feild-label">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               className="field-input field-input-focus"
//               placeholder="JohnDoe@email.com"
//               autoComplete="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-5">
//             <label htmlFor="message" className="feild-label">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               type="text"
//               rows="4"
//               className="field-input field-input-focus"
//               placeholder="Share your thoughts..."
//               autoComplete="message"
//               value={formData.message}
//               onChange={handleChange}
//               required 
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
//           >
//             {!isLoading ? "Send" : "Sending..."}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);
      await emailjs.send(
        "service_fox3qoa",
        "template_sz9aq79",
        {
          from_name: formData.name,
          to_name: "Irfan Shazid",
          from_email: formData.email,
          to_email: "ishazid57@gmail.com",
          message: formData.message,
        },
        "Zq_vSGIokBfqGGyHo"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent successfully!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong! Please try again.");
    }
  };

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://web.facebook.com/mr.warrior03", color: "bg-blue-600 hover:bg-blue-500", label: "Facebook" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/irfan_shazid/", color: "bg-pink-600 hover:bg-pink-500", label: "Instagram" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/irfan-shazid/", color: "bg-blue-500 hover:bg-blue-400", label: "LinkedIn" },
    { icon: <FaWhatsapp />, href: "https://wa.me/8801647593123?text=Hello%20I%20want%20to%20contact%20you", color: "bg-green-600 hover:bg-green-500", label: "WhatsApp" },
    { icon: <FaGithub />, href: "https://github.com/shazid25", color: "bg-gray-800 hover:bg-gray-700", label: "GitHub" },
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: "+880 1647-593123", href: "tel:+8801647593123" },
    { icon: <FaEnvelope />, text: "ishazid57@gmail.com", href: "mailto:ishazid57@gmail.com" },
    { icon: <FaMapMarkerAlt />, text: "Dhaka, Bangladesh", href: "#" },
  ];

  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Section - Social Media & Contact Info */}
          <div className="order-2 lg:order-1">
            <div className="bg-primary/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-4">Let's Connect</h2>
                <p className="text-neutral-300">
                  Whether you're looking to build a new website, improve your existing platform, 
                  or bring a unique project to life, I'm here to help. Reach out through any channel below.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 mb-10">
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group"
                    target={item.href.startsWith('http') ? "_blank" : "_self"}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lavender/20 to-royal/20 flex items-center justify-center group-hover:from-lavender/30 group-hover:to-royal/30 transition-all">
                      <span className="text-lg text-lavender">{item.icon}</span>
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </a>
                ))}
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-icon ${social.color} animate-float delay-[${(index + 1) * 100}ms] w-14 h-14 flex items-center justify-center`}
                      aria-label={social.label}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Note */}
              <div className="mt-10 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-sm text-neutral-400">
                  <span className="text-green-400 font-medium">Available for work:</span> I typically respond within 24 hours. For urgent matters, please call or WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="border border-white/10 rounded-2xl bg-primary p-6 lg:p-8">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Send a Message</h3>
                <p className="text-neutral-400">
                  Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-lavender focus:ring-2 focus:ring-lavender/20 transition-all"
                      placeholder="John Doe"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-lavender focus:ring-2 focus:ring-lavender/20 transition-all"
                      placeholder="johndoe@example.com"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-2 font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-lavender focus:ring-2 focus:ring-lavender/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-1 py-4 text-lg font-medium rounded-lg cursor-pointer bg-gradient-to-r from-lavender to-royal hover:from-lavender/90 hover:to-royal/90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>

              {/* Privacy Note */}
              <div className="mt-6 text-center">
                <p className="text-xs text-neutral-500">
                  Your information is safe with me. I'll never share your details with anyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;