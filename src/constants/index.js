import {
  abromart,
  backend,
  bootstrap,
  codedrops,
  corrtex,
  creator,
  css,
  fib,
  figma,
  git,
  github,
  gmail,
  html,
  instagram,
  jQuery,
  javascript,
  linkedin,
  mobile,
  reactjs,
  redux,
  restro,
  tailwind,
  twitter,
  typescript,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    desktop: "",
    title: "Home",
  },
  {
    id: "work",
    desktop: "work",
    title: "Work",
  },
  {
    id: "contact",
    desktop: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Responsive Web Design",
    icon: web,
  },
  {
    title: "Frontend Web Development",
    icon: mobile,
  },
  {
    title: "Custom Web Design",
    icon: backend,
  },
  {
    title: "Website Optimization",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "jQuery",
    icon: jQuery,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "UI/UX Designer",
    company_name: "Wit Waze",
    icon: codedrops,
    iconBg: "#383E56",
    date: "June 2023 - November 2023",
    points: [
      "Created a human centered design using Figma",
    ],
  },
  {
    title: "UI/UX Designer and Interactive Map developer",
    company_name: "mapaWIT",
    icon: codedrops,
    iconBg: "#383E56",
    date: "December 2024 - Present",
    points: [
      "Created a human centered design using Figma",
      "Created an interactive map using Mappedin"
    ],
  },
];

const socials = [
  {
    image: linkedin,
    link: "https://www.linkedin.com/in/audrey-margarette-camaya-aa4786359"
  },
  {
    image: github,
    link: "https://github.com/itsyana1"
  },
  {
    image: twitter,
    link: "https://twitter.com/Audreycamaya"
  },
  {
    image: instagram,
    link: "https://www.instagram.com/jewel_aetheldred"
  },
  {
    image: gmail,
    link: "mailto:dreycamaya01@gmail.com"
  }
]

const projects = [
  {
    name: "mapaWIT",
    description:
      "MapaWIT helps you find classrooms, offices, and facilities quickly. MapaWIT is your ultimate campus navigation companion, designed to help students, faculty, and visitors easily find classrooms, offices, and essential facilities across all WIT campuses. Whether you're a new student trying to locate your assigned room, a guest looking for an event venue, or a faculty member navigating between buildings.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient"
      },
      {
        name: "mappedin",
        color: "pink-text-gradient",
      },
    ],
    image: fib,
    openSource: false,
    source_code_link: "https://mapawit-com.onrender.com/",
  },
  {
    name: "Awesometodos",
    description:
      "A minimal Todo app with full CRUD (Create, Read, Update, and Delete) functionality.",
    tags: [
      {
        name: "Mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "orange-text-gradient"
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: corrtex,
    openSource: false,
    source_code_link: "https://camaya-awesometodosapp.onrender.com/",
  },
  {
    name: "WIT Info Tech Website",
    description:
      "The website serves as a comprehensive resource for students and visitors interested in the WIT Information Technology Department. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      }
    ],
    image: abromart,
    openSource: false,
    source_code_link: "",
  },
  {
    name: "SynC",
    description:
      "The goal of the app is to help students efficiently manage their academic tasks and performance. Through features like viewing course schedules, attending online classes, tracking tasks and attendance, receiving notifications for reminders, and organizing notes, the app will empower students to stay organized, improve time management, and enhance their academic success.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      }
    ],
    image: restro,
    openSource: false,
    source_code_link: "https://www.figma.com/design/RmOLsFG5ZL2jdGrAtpVkMV/SynC-Prototype?node-id=0-1&t=ssrUsxY8AHGvMgtl-1",
  },
];

export { services, technologies, experiences, projects, socials };
