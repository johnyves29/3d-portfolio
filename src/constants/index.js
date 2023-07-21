import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  github,
  bootstrap,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  githubsign,
  gallery
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web",
    icon: web,
  },
  {
    title: "UI / UX",
    icon: mobile,
  },
  {
    title: "Software",
    icon: backend,
  },
  {
    title: "Application",
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Github",
    icon: githubsign
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Associate Developer",
    company_name: "Four13 Group LLC ",
    icon: gallery,
    iconBg: "#383E56",
    date: " Dec 2021 - Dec 2022",
    points: [
      "Take the layout and prototype from the design team and convert them into code.",
      "Collaborate with the team to develop and maintain systems.",
      "Developed Bigcommerce and MERN Stack project.",
      "Provide level 2 support to users.",
      "Investigate and analyze issues to provide solutions.",
      "Check application responsiveness on web and mobile devices and browsers."
    ],
  },
  {
    title: "Junior Programmer",
    company_name: "Mnk.Soft Sofware Development",
    icon: gallery,
    iconBg: "#E6DEDD",
    date: "Apr 2019 - May 2021",
    points: [
      "Take layout and prototype from the design team to develop a website.",
      "Manages and documents client requests and error reports.",
      "Check application responsiveness on web and mobile devices and browsers.",
      "Collaborate with the team to develop and maintain the company ERP system built with MEAN Stack.",
      "Support users and clients in using the system.",
      "Redesign and update the company website.",
      "Technical documentation about processes, updates, and flows of the project."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Wilmar LLC",
    description:
      "A web-based platform that allows users to search, and choose products that provides quality tools and great service.",
    tags: [
      {
        name: "bigcommerce",
        color: "blue-text-gradient",
      },
    ],
    image: "https://s6.imgcdn.dev/xafTg.webp",
    source_code_link: "",
    site_link: 'https://wilmarllc.com/',
  },
  {
    name: "Portfolio",
    description:
      "A website that showcase information about myself, skills, recent work, projects and certificates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: "https://s6.imgcdn.dev/xaZ0o.md.webp",
    source_code_link: "https://github.com/johnyves29/react-portfolio-v3",
    site_link: 'https://johnyvesmarin1992.netlify.app/'
  },
  {
    name: "APS",
    description:
      "A web-based application that allows users to buy and sell financial assets such as stocks, cryptocurrencies, commodities, and forex.",
    tags: [
      {
        name: "angularjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: "https://s6.imgcdn.dev/xaxxh.md.webp",
    source_code_link: "",
    site_link: 'https://aps-site-sample.netlify.app',
  },
  {
    name: "Workboard",
    description:
      "A web-based application that helps organisations automate and manage core business processes for optimal performance.",
    tags: [
      {
        name: "MEAN",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: 'https://s6.imgcdn.dev/xavnl.md.webp',
    source_code_link: "",
    site_link: 'https://workboard.ph/',
  },
  {
    name: "Mnk.soft",
    description:
      "A website that was created to represent the company and provide information and access to customers, partners, clients.",
    tags: [
      {
        name: "MEAN",
        color: "blue-text-gradient",
      },
      {
        name: "bootsrap",
        color: "green-text-gradient",
      },
    ],
    image: 'https://s6.imgcdn.dev/xaOCK.md.webp',
    source_code_link: "",
    site_link: 'https://mnksoft.com.ph/',
  },
  {
    name: "ETC23",
    description:
      "A personal website where you can watch videos about places the blogger visited, tips and information about life, etc.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: 'https://s6.imgcdn.dev/xa2FV.md.webp',
    source_code_link: "",
    site_link: '',
  },
  {
    name: "CE Online Classroom",
    description:
      "A digital learning environment that allows teachers and students to connect online in real time.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: 'https://s6.imgcdn.dev/xa93O.webp',
    source_code_link: "",
    site_link: '',
  },
  {
    name: "Philippine Daily",
    description:
      "A web-based application that shows information from different news platforms all in one place.",
    tags: [
      {
        name: "symfony",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: 'https://s6.imgcdn.dev/xaVwn.webp',
    source_code_link: "",
    site_link: '',
  },
];

export { services, technologies, experiences, testimonials, projects };
