import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiSupabaseLine,
} from "@remixicon/react";
import {
  RiCodeSSlashLine,
  RiBubbleChartFill,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects & Experience", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Karan Kumar",
  role: "Frontend Developer",
  subheading:
    "“Frontend Developer focused on crafting clean, interactive, and responsive web experiences with React.js and modern JavaScript. Always exploring new technologies to create impactful digital solutions.”"
};

export const PROJECTS = [
  {
    id: 1,
    title: "Awarded Website UI Clone",
    description:
      "A Awarded website UI clone with smooth scrolling animation and beautiful design",
    techStack: ["React", "Gsap.js", "Tailwind", "React-router-dom"],
    imgSrc: project1,
    link: "https://awardedwebsiteclone.vercel.app/",
  },
  {
    id: 2,
    title: "Ai Image Enhancer",
    description:
      "A Ai Image Enhancer for imporving blurry image clarity with PicWish website Free API ",
    techStack: ["React", "Tailwind", "Axios", "PicWish API"],
    imgSrc: project2,
    link: "https://aiimageenhancer-xi.vercel.app/",
  },
  {
    id: 3,
    title: "Todo App",
    description:
      "Built a simple and minimalist To-Do app with features to add, update, delete tasks, and mark them complete using a checkbox.",
    techStack: ["React", "Tailwind", "Redux"],
    imgSrc: project3,
    link: "https://v0-new-project-7aqxgvv0gfu.vercel.app/",
  },
  {
    id: 4,
    title: "Movie App",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["React", "Tailwind", "Redux", "React-Router-Dom","TMDB API"],
    imgSrc: project4,
    link: "https://movieapp-orpin-three.vercel.app/",
  },
  {
    id: 5,
    title: "Real-Time Chat App",
    description:
      "I have built this Real-Time Chat App with clean and minimalist design. Using SupaBase for interacting with Logged in user also with Google Auth",
    techStack: ["React", "SupaBase", ],
    imgSrc: project5,
    link: "https://real-time-chat-app-liard-eight.vercel.app/",
  },

];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line size={50} className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line size={50} className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine size={50} className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine size={50} className="text-blue-400" />,
  },
  {
    name: "SupaBase",
    icon: <RiSupabaseLine size={50} className="text-green-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine size={50} className="text-teal-400" />,
  },
  {
    name: "Gsap",
    icon: <RiBubbleChartFill size={50} className="text-green-400" />,
  },
];

// export const EXPERIENCES = [
//   {
//     yearRange: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description:
//       "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
//     techStack: ["Javascript", "React.js", "Next.js", "MongoDB"],
//   },
//   {
//     yearRange: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description:
//       "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
//     techStack: ["HTML", "CSS", "Vue.js", "MySQL"],
//   },
//   {
//     yearRange: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description:
//       "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
//     techStack: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     yearRange: "2020 - 2021",
//     role: "Software Engineer",
//     company: "PayPal",
//     description:
//       "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
//     techStack: ["Ruby", "Rails", "PHP", "SQLite"],
//   },
// ];

export const EDUCATION = [
  {
    id: 1,
    degree: "Full Stack Course",
    institution: "Dice Academy",
    duration: "2025",
    description:
      "Currently pursuing a Full Stack Development course at Dice Academy, having already completed Frontend Development.",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Aplication",
    institution: "Indra Gandhi National Open University",
    duration: "2025 - 2027",
    description:
      "Currently pursuing a Bachelor of Computer Applications (BCA) from IGNOU, admitted in 2025.",
  }
 
];
