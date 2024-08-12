import { capstoneScreenshot, websiteScreenshot } from "../components/assets";

const career = [
  {
    organization: "Kawasaki Robotics",
    title: "Application Engineer",
    tenure: "September 2023 - January 2024",
    info: [
      "Developed a palletizing software package for 4 and 6-axis Kawasaki Robots using the AS programming language and implemented it on-site at multiple customers.",
      "Created robot programs for customer trade show booths that showcased the capabilities of their automation cells.",
      "Conducted reach studies, speed tests, and cycle-time analysis in simulated environments and real-world applications.",
      "Performed software and hardware testing of new robots and created test cells and specialized tooling needed for tests.",
      "Consulted with systems integrators and end-users to develop robotic automation solutions, conducted on-site training on robot programming, and provided remote technical support concerning robot I/O and robot-PLC communication.",
    ],
  },
  {
    organization: "Kawasaki Robotics",
    title: "Field Service Engineer",
    tenure: "April 2023 - September 2023",
    info: [
      "Supported customers on-site and remotely by diagnosing and resolving mechanical, electrical, and software complications related to robot functionality.",
      "Collaborated with the service team and engineering department to develop robotic automation solutions for systems integrators and end-users that improve customer retention and satisfaction.",
    ],
  },
  {
    organization: "Woco Tech USA",
    title: "Design Engineer Intern",
    tenure: "July 2019 - August 2021",
    info: [
      "Created design proposals and updated existing designs to meet customers’ specifications.",
      "Produced technical drawings and presentations for customers.",
      "Reviewed and revised designs for tooling and manufacturing feasibility.",
    ],
  },
  {
    organization: "Woco Tech USA",
    title: "Engineering Intern",
    tenure: "May 2017 - August 2017",
    info: [
      "Ensured that automotive parts were made to specification through tolerance testing.",
      "Responsible for quality review and inspection of both production and prototype parts while adhering to strict time constraints and standards.",
    ],
  },
];

const education = {
  institution: "Michigan State University",
  degree: "BS",
  major: "Computer Science",
  minor: "Business",
  graduated: "December 2022",
};

const projects = [
  {
    title: "Mobile Train Handling Simulator",
    link: "http://www.capstone.cse.msu.edu/2022-08/projects/union-pacific/",
    image: capstoneScreenshot,
    info: [
      "In Michigan State University's computer science capstone course, I led a team of six students to design and build a Mobile Train Handling Simulator for the Union Pacific Railroad Company. Following the Agile methodology throughout the semester, we created the Mobile Train Handling Simulator as a convenient training alternative to the expensive and proprietary equipment currently used by locomotive crews.",
      "The mobile simulator was created for a Microsoft Surface Tablet and implemented with C# using the Unity game engine, Microsoft's .NET framework on Windows, and an API for PS Technology's proprietary train-physics engine.",
    ],
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/Darien-Ford/Portfolio_Website",
    image: websiteScreenshot,
    info: [
      "I created this portfolio/resume website using the React framework and Set up auto-deployment to Hostinger from a repository using GitHub actions.",
    ],
  },
];

export { career, education, projects };
