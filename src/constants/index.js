import OS_BANK from "../assets/projects/OS_BANK.jpeg";
import FOOTBALL_VISION from "../assets/projects/FOOTBALL_VISION.png";
import GOOD_SHEPHERD_ANGLICAN_SCHOOL from "../assets/projects/GOOD_SHEPHERD_ANGLICAN_SCHOOL.jpeg";
import FOOD_DELIVERY from "../assets/projects/FOOD_DELIVERY.jpeg";

export const ABOUT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With expertise in front-end technologies like React and Next.js and back-end technologies such as Node.js and MongoDB, I've developed impactful solutions that drive business growth. My journey began with a fascination for technology, which has evolved into a career where I continuously seek out new challenges and opportunities to innovate. Outside of coding, I enjoy staying active and exploring the latest tech trends.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "CKODON",
    description: `Developed Create-Read-Update-Delete tools for the platform’s API, which enhanced data management efficiency. Implemented error logging with Sentry.io and configured alerts via Slack, reducing error response time by 30%. Contributed a Python script for auto-generating essential API files, streamlining development processes. Built continuous integration pipelines with GitHub Actions, ensuring a 95% pass rate for pull request tests.`,
    technologies: ["Python", "Django", "Sentry.io", "Postman"]
  },
  {
    year: "2023 - Present",
    role: "Research Assistant",
    company: "Springfield College, Dr. Jeremy Castagno",
    description: ` Creating a front-end system for computer vision research on physics experiments using React with TypeScript and Zustand. Building a responsive dashboard website to conduct experiments, record, store and visualize the data.  Designed the final prototype in Figma after numerous iterations and team meetings, and coding the frontend at the moment`,
    technologies: ["React", "Node.js", "Express.js", "Mangodb", "AWS", "Sentry.io"]
  },
  ,
  {
    year: "2024 - Present",
    role: "Software Engineering Fellow",
    company: "Headstarter AI",
    description: `Built 5+ AI web apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users. Developed projects from design to deployment leading 5+ engineering fellows using MVC design patterns. Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git, and microservice patterns. Mentored by the CEO of Panora.dev`,
  },
  {
    year: "2022 - 2024",
    role: "Full Stack Developer",
    company: "Good Shepherd Anglican School",
    description: `Built and integrated RESTful APIs using Node.js and Express with a React frontend. Utilized MongoDB for database management and Redux for state management. Designed and implemented responsive interfaces with React and styled-components, focusing on usability for students, teachers, and administrators. Managed deployment and maintenance, with real-time monitoring using Sentry and automated deployments via GitHub Actions.`,
    technologies: ["React", "Node.js", "Express.js", "Mangodb", "AWS", "Sentry.io"]
  }
];


export const PROJECTS = [
  {
    title: "Good Shepherd Anglican School Website",
    image: GOOD_SHEPHERD_ANGLICAN_SCHOOL,
    description:
      "Developed a comprehensive school website featuring event management, announcement posting, and user authentication. Improved communication between faculty, students, and parents, resulting in a 40% increase in engagement and access to resources.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Africana Food Delivery",
    image: FOOD_DELIVERY,
    description:
      "Built a full-featured food delivery app with real-time order tracking and user authentication. Enhanced customer experience and streamlined restaurant operations, leading to a 25% increase in user retention.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "OsBank",
    image: OS_BANK,
    description:
      "Banking app with a finance management dashboard that connects multiple bank accounts, displays real-time transactions, and allows you to transfer money to other users on the platform using Next.js 14.",
    technologies: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Chart.js", "Node.js", "MongoDB", "Socket.io", "Stripe"],
  },
  {
    title: "FootballVision",
    image: FOOTBALL_VISION,
    description:
      "This project demonstrates creating a football analysis system using machine learning and computer vision techniques. It employs YOLOv8 for detecting players, referees, and footballs, with custom object detectors and KMeans for accurate player segmentation. The system also utilizes optical flow and perspective transformation to measure player movement and speed.",
    technologies: ["YOLOv8", "Python", "OpenCV"],
  },
];



