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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Team Management",
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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Python Inter",
    company_name: "IIT KGP",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2024",
    points: [
      "Led the development of a comprehensive web application for hospitals using Python, optimizing workflows and enhancing user experience.",
      "Collaborated closely with cross-functional teams, including designers, backend developers, and project managers, to deliver high-quality, scalable solutions.",
      "Engineered responsive and adaptive web designs, ensuring seamless functionality across multiple devices and platforms.",
      "Provided insightful code reviews and mentorship, fostering a culture of continuous improvement and high coding standards.",
    ],
  },
  {
    title: "ML Intern",
    company_name: "IIT KGP",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2024",
    points: [
      "Led the development of a comprehensive web application for hospitals using Python, optimizing workflows and enhancing user experience.",
      "Collaborated closely with cross-functional teams, including designers, backend developers, and project managers, to deliver high-quality, scalable solutions.",
      "Engineered responsive and adaptive web designs, ensuring seamless functionality across multiple devices and platforms.",
      "Provided insightful code reviews and mentorship, fostering a culture of continuous improvement and high coding standards."
    ],
  },
  {
    title: "Social Intern",
    company_name: "Prachetas",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2024",
    points: [
      "Managing team , connecting the people , crowding handling",
      "Collaborating with unknow person for social working , leading them around get work efficency ",
      "Implementing positive aura , and make happy faces of poor and needed people",
      "conducting social awarness camps , persenting idea infornt of political leader for funding .",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Aditya Shindekar",
    designation: "Artices",
    company: "Aditya interprises",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Shruti",
    designation: "Founder",
    company: "interest",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Mayur",
    designation: "CEo",
    company: "ML Groups",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Chat BOT",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Community Chat APP",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Socket",
        color: "green-text-gradient",
      },
      {
        name: "TailWind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Event Sphere",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "REactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Free Base",
        color: "green-text-gradient",
      },
      {
        name: "Python Flask",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
