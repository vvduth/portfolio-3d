import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  pukedukecrypto,
  admin,
  realestate,
  chatcord,
  ecom,
  chads,
  aiimage,
  uniswap,
  pinterest,
  natourpage,
  tiktok,
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
  tamk,
  telia,
  integrify,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  solididty,
  springboot,
  aws,
  java,
  graphql,
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
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  { name: "solidity", icon: solididty },
  { name: "aws", icon: aws },
  { name: "java", icon: java },
  {
    name: "springboot",
    icon: springboot,
  },
];

const experiences = [
  {
    title: "Teaching Assistant",
    company_name: "Tampere University of Applied Sciences",
    icon: tamk,
    iconBg: "#383E56",
    date: "January 2022 - April 2022",
    points: [
      "Mentored graduate students during their studies and supported them with their course.",
      "Planned and conducted live-coding workshops for graduate students learning JavaScript.",
      "Help students troubleshoot coding issues and errors.",
      "Collaborate with instructors to identify areas where students may need additional support.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Integrify",
    icon: integrify,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Sharpening competence as a Full Stack Developer by collaborating with other developers of different seniorities on a diverse range of projects and real-life challenges.",
      "Focusing on front-end development with JavaScript, TypeScript, React.js, Redux in addition to other technologies and concepts such as accessibility and animations. Building back-end for web-based applications with frameworks such as Node.js",
      "Covering additional concepts such as API development and documentation, unit testing with Jest, SWL and NoSWL databases, and version control with GitHub.",
      "Working with Dev/ps practices (Bash scripting, Docker containers, and CI1CD with GitHub Actions) and Cloud Services with AWS.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Telia",
    icon: telia,
    iconBg: "#383E56",
    date: "August 2022 - Present",
    points: [
      "Designed and developed certificate authorization system using Java and Spring Boot, ensuring secure and reliable access to network resources.",
      "Participated in the development of documentation and training materials for certificate authorization systems and software, supporting internal and external users.",
      "Implemented unit tests using Jest and JUnit5, ensuring code quality and identifying issues early in the development cycle.",
      "Participated in agile development methodologies, including sprint planning, stand-ups, and retrospectives, to maintain project momentum and ensure successful delivery of certificate-related features.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "You have done well, you have learned a lot. Keep learning and keep focusing on learning. There is no rush for you finish your tasks, just make sure that you are doing it as well as you can.",
    name: "Icognito Feedback",
    designation: "Software developer",
    company: "Telia",
    image: telia,
  },
  {
    testimonial:
      "You've been doing good work with the listing. You've also bravely tried your hand at other kinds of tasks. Remember that we don't expect you to be perfect, we just expect you to listen and learn and improve, and show that in your work.",
      name: "Icognito Feedback",
      designation: "Software developer",
      company: "Telia",
      image: telia,
  },
  {
    testimonial:
      "Duc has gotten an ok start with CA work. It's still very early to say much more, but the potential is there to do well, as long as he keeps listening and learning, and asking for assistance when there's something unclear.",
      name: "Icognito Feedback",
      designation: "Software developer",
      company: "Telia",
      image: telia,
  },
  {
    testimonial:
      "Very good start. Remember that you have just began your developer journey, enjoy and try not to stress too much if something doesn't go as planned.",
      name: "Icognito Feedback",
      designation: "Software developer",
      company: "Telia",
      image: telia,
  },
];

const projects = [
  {
    name: "Real Estate",
    description:
      "Looking to sell your property fast? The CRUD real estate app with adverts/promote styles can help! Our app features advanced search and promotion functionalities, allowing you to reach a wider audience and increase the visibility of your listings. With easy-to-use forms and a responsive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "white-text-gradient",
      },
      {
        name: "express",
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
    image: realestate,
    source_code_link: "https://github.com/vvduth/refine-app",
  },
  {
    name: "ISellSpeed",
    description:
      "Introducing our Next.js ecommerce application with seamless Shopify integration! Our app offers a user-friendly shopping experience that allows you to browse and purchase products from multiple vendors in one convenient platform. With Shopify integration, you can easily manage your inventory, orders, and payments.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "shopify",
        color: "green-text-gradient",
      },
      {
        name: "tailwinds",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/vvduth/above_v2",
  },
  {
    name: "Puke Duke Crypto",
    description:
      "Looking for a fast and secure way to transfer your cryptocurrencies? Look no further than our web3 crypto transferring app! Built using React and Ether.js, our app provides a seamless experience for sending and receiving cryptocurrencies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "etherjs",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: pukedukecrypto,
    source_code_link: "https://github.com/vvduth/web3-vite",
  },
  {
    name: "PukeDuke Tok",
    description:
      "Ready to unleash your creativity and share your videos with the world? Our video sharing/TikTok-clone app is the perfect platform for you!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: tiktok,
    source_code_link: "https://github.com/vvduth/tiktok-clone",
  },
  {
    name: "PukeDuke Winterest",
    description:
      "Looking for a visually stunning way to discover and share images? Our image sharing app with the same features as Pinterest is the perfect platform for you! Built using React and Sanity, our app offers an intuitive interface that allows you to browse and save images from millions of users worldwide.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: pinterest,
    source_code_link: "https://github.com/vvduth/pinterest-clone",
  },
  {
    name: "Natours",
    description:
      "Ready to book your next adventure? Our tour-booking landing page is the perfect platform for finding and booking your next tour!",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: natourpage,
    source_code_link: "https://github.com/vvduth/node-natours",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
