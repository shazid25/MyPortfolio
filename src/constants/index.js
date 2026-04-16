export const myProjects = [


{
  id: 1,
  title: "Green Mart - Multi-Vendor E-Commerce & Delivery System",
  description:
    "A production-grade, multi-tenant ecosystem connecting vendors, customers, and delivery partners in one high-performance platform.",
  subDescription: [
    "Architected a sophisticated 5-tier role-based system (Super Admin, Admin, Vendor, Delivery, Customer) using Next.js 15 and TypeScript.",
    "Integrated Stripe for secure payment processing with automated status updates via real-time backend webhooks.",
    "Developed dedicated vendor dashboards for inventory control, product analytics, and independent shop management.",
    "Engineered a real-time delivery assignment system allowing admins to bridge the gap between vendors and riders.",
    "Implemented SEO-optimized Blog and FAQ engines with full CRUD capabilities and rich-text support.",
    "Built a modern, responsive 'Glassmorphism' UI using Tailwind CSS and Framer Motion for a premium user experience.",
    "Ensured strict data integrity and type-safety across the stack using Prisma ORM and Zod schema validation."
  ],

  href: "https://multivendor-phi.vercel.app/",
  frontendRepo: "https://github.com/shazid25/Multi-Vendor-Ecommerce-Delivery-System",
  backendRepo: "https://github.com/shazid25/Multi-Vendor-Ecommerce-Delivery-System",
  logo: "/assets/projects/green-mart.png",
  image: "/assets/projects/green-mart.png",
  
  // Demo Credentials for Portfolios/Testing
  credentials: [
    { role: "Super Admin", email: "irfanshazd814@gmail.com", pass: "irfanshazd814@gmail.com" },
    { role: "Admin", email: "driveintocode@gmail.com", pass: "driveintocode@gmail.com" },
    { role: "Vendor", email: "ishazid57@gmail.com", pass: "ishazid57@gmail.com" },
    { role: "Delivery Man", email: "jossjossjosss62@gmail.com", pass: "jossjossjosss62@gmail.com" }
  ],

  tags: [
    {
      id: 1,
      name: "Next.js 15",
      path: "/assets/logos/nextjs.jpeg",
    },
    {
      id: 2,
      name: "TypeScript",
      path: "/assets/logos/typescript.jpeg",
    },
    {
      id: 3,
      name: "TailwindCSS",
      path: "/assets/logos/tailwindcss.svg",
    },
    {
      id: 4,
      name: "Prisma",
      path: "/assets/logos/prisma.jpeg",
    },
    {
      id: 5,
      name: "PostgreSQL",
      path: "/assets/logos/postgresql.jpeg",
    },
    {
      id: 6,
      name: "Stripe",
      path: "/assets/logos/stripe.svg",
    }
  ],
},


//project 2
{
    id: 2,
    title: "Learn-Stack - Enterprise LMS Platform",
    description:
      "A high-performance, production-ready Learning Management System with AI-powered features and premium animations.",
    subDescription: [
      "Architected a scalable LMS using the T3 Stack (Next.js 16, TypeScript, Prisma, Tailwind CSS 4).",
      "Implemented an immersive UI/UX using GSAP ScrollTrigger, Framer Motion, and Lenis for smooth momentum scrolling.",
      "Integrated Stripe for secure payment processing, subscriptions, and automated billing webhooks.",
      "Engineered an advanced course builder with drag-and-drop curricula management and TipTap rich-text editing.",
      "Hardened application security using Arcjet for DDoS/Bot protection and Zod for end-to-end type-safe validation.",
      "Deployed a robust media infrastructure using AWS S3 for asset storage and Resend for automated email workflows.",
      "Optimized for Core Web Vitals with Server Components and React 19, achieving near-instant load times."
    ],

    href: "https://learn-stack-bot9.vercel.app/",
    frontendRepo: "https://github.com/shazid25/Learn-Stack",
    backendRepo: "https://github.com/shazid25/Learn-Stack",
    logo: "/assets/projects/learnStack.jpeg",
    image: "/assets/projects/learnStack.jpeg",
    tags: [
      {
        id: 1,
        name: "Next.js 16",
        path: "/assets/logos/nextjs.jpeg",
      },
      {
        id: 2,
        name: "React 19",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript.jpeg",
      },
      {
        id: 4,
        name: "TailwindCSS 4",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Prisma",
        path: "/assets/logos/prisma.jpeg",
      },
      {
        id: 6,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.jpeg",
      },
      {
        id: 7,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      }
    ],
  },


  //3rd
  {
    id: 3,
    title: "Medicare - Multi-vendor Medicine Platform",
    description:
      "A comprehensive multi-vendor medicine e-commerce platform with role-based access control",
    subDescription: [
      "Built a full-stack medicine marketplace connecting patients with multiple sellers.",
      "Implemented three-tier user system: Users, Sellers, and Admin.",
      "Users can browse, compare, and order medicines with secure payments.",
      "Sellers manage listings, inventory, and orders via dedicated dashboards.",
      "Admin approves seller applications, monitors transactions, and manages users.",
      "Users can apply to become sellers with admin-reviewed documentation.",
      "Admin email: Jorina@gmail.com & Admin password: Jorina@gmail.com",
      "Seller email: kuddus@gmail.com & Seller password:kuddus@gmail.com"
    ],

    href: "https://medicare-8d262.web.app/",
    logo: "",
    image: "/assets/projects/accessories.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.webp",
      },
      {
        id: 4,
        name: "Express.js",
        path: "/assets/logos/Expressjs.png",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/logos/mongodb.png",
      },
      {
        id: 6,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },


//4 project

{
    id: 4,
    title: "Edemy- A online course selling web app",
    description: "A online course selling web app where student can buy course, and teacher can sell course",
    subDescription: [
      "Built an interactive online course platform where students can browse, purchase, and access courses easily.",
      "Allows teachers to create, manage, and sell courses with full control over content and pricing.",
      "Implements secure authentication and role-based access for students and instructors.",
      "Features a smooth enrollment and payment process for a hassle-free learning experience.",
      "Provides lifetime or time-based course access with progress tracking for students.",
      "Designed to connect learners and educators, making online education simple and scalable."
    ],
    href: "https://lms-gs.vercel.app/",
    frontendRepo: "https://github.com/shazid25/Learner_Hub_Client.git",
    backendRepo: "https://github.com/shazid25/Learner_Hub_Server.git",
    logo: "",
    image: "/assets/projects/edemy.jpeg",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.webp",
      },
      {
        id: 4,
        name: "Express.js",
        path: "/assets/logos/Expressjs.png",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/logos/mongodb.png",
      },
      {
        id: 6,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },

    //5 project

 {
    id: 5,
    title: "DriveEasy",
    description:
      "Car rental service platform",
    subDescription: [
      "A user-friendly car rental platform connecting renters with a wide range of vehicles for easy and convenient rentals.",
    ],
    href: "https://car-rental-service-ae23a.web.app/",
     frontendRepo: " https://github.com/shazid25/Car-Rental-Web-Client-Site.git",
    backendRepo: " https://github.com/shazid25/car-rental-web-server-site.git",
    logo: "",
    image: "/assets/projects/car.jpeg",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.webp",
      },
      {
        id: 4,
        name: "Express.js",
        path: "/assets/logos/Expressjs.png",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/logos/mongodb.png",
      },
      {
        id: 6,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },



  //6 project

   {
    id: 6,
    title: "Plant Health Tracker",
    description:
      "Use can track the health details of a plant",
    subDescription: [
      "You can track the health data using it",
      "User can add own plant into the web",
      "Users can browse, compare the health details",
    ],
    href: "https://plant-client.web.app/",
    logo: "",
    image: "/assets/projects/plant.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.webp",
      },
      {
        id: 4,
        name: "Express.js",
        path: "/assets/logos/Expressjs.png",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/logos/mongodb.png",
      },
      {
        id: 6,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },


  //project 7



   {
    id: 7,
    title: "PhuDu",
    description:
      "A doctor appointment booking platform",
    subDescription: [
      "A user-friendly doctor appointment booking platform connecting patients with healthcare providers for easy scheduling and access to medical services.",
    ],
    href: "https://stately-khapse-4fcac2.netlify.app/",
    logo: "",
    image: "/assets/projects/phudu.jpeg",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.webp",
      },
      {
        id: 4,
        name: "Express.js",
        path: "/assets/logos/Expressjs.png",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/logos/mongodb.png",
      },
      {
        id: 6,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },



  //project 8

   {
    id: 8,
    title: "Animated Zentry Gaming Web",
    description:
      "",
    subDescription: [
      "A animated website inspired by Zentry",
      "A art of frontend",
      "Hold the middel of the banner to change video",
    ],
    href: "https://unrivaled-blini-806c07.netlify.app/",
    logo: "",
    image: "/assets/projects/zentry.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
    
      {
        id: 6,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },


  



   
  

  //9th project

  

];



export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/irfan-shazid/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/irfan_shazid/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "MERN Developer",
    job: "Job:Web Development",
    date: "2025-Present",
    contents: [
      "At Journals Media Co., I work as a Web Developer, responsible for designing, developing, and maintaining dynamic and responsive websites for media and digital campaigns. My role involves building user-friendly interfaces, optimizing performance, and ensuring seamless functionality across devices. I collaborate closely with the creative and marketing teams to deliver visually appealing and engaging web experiences. Using modern technologies like HTML, CSS,Tailwind CSS, JavaScript, React, Node.js , Express.js and MongoDB   I help bring innovative ideas to life and enhance the company’s digital presence through efficient, scalable, and high-performing web solutions."
    ],
  },
 {
    title: "Web Instructor || Volunteer",
    job: "Responsibility: Web Instructor at Shanto-Mariam University of Creative Technology, (Software Development Club)",
    date: "2025-Present",
    contents: [
      "As a Web Instructor at Shanto-Mariam University of Creative Technology, I am responsible for teaching and mentoring students in web development. My role involves designing and delivering engaging lessons on HTML, CSS, JavaScript, and modern frameworks like React. I guide students through hands-on projects, helping them build practical skills and a strong portfolio. Additionally, I provide support and feedback to foster their growth as aspiring web developers. Through this position, I aim to inspire and equip the next generation of tech talent with the knowledge and confidence to succeed in the dynamic field of web development."
    ],
  },



];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
