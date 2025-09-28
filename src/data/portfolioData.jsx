import { 
  FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaDatabase, FaCode, 
  FaHtml5, FaAws, FaDocker, FaAmazon
} from 'react-icons/fa';

import { 
  SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiPython 
} from 'react-icons/si';

export const personalInfo = {
  name: "Himanshu Verma",
  title: "Software Developer | Full Stack Engineer",
  email: "himansuuverma@gmail.com",
  linkedin: "https://linkedin.com/in/himansuuverma",
  github: "https://github.com/himansuuverma",
  resumeLink: "/himansuuverma/resume.pdf", 
  bio: "Experienced in designing and delivering scalable, high-performance applications. Passionate about solving complex problems, building robust systems, and driving innovation through clean architecture and best practices.",
  shortBio: "I get things done."
};

export const education = [
  {
    institution: "IIIT Kota",
    degree: "Bachelor of Technology in Computer Science",
    duration: "Aug 2019 – Aug 2023",
  }
];

export const projects = [
  {
    title: "SaveAsoul",
    tech: ["React Native", "Expo", "TypeScript"],
    description: "SaveASoul (SAS) is a community-powered safety app designed to connect people who need help with those who are nearby and ready to assist. Our mission is to build a faster, more responsive, and more human safety net for everyone.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/himansuuverma/saveasoul",
    liveLink: null,
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>,
    image: 'https://media.licdn.com/dms/image/v2/D5622AQFywv07KZlWuw/feedshare-shrink_800/B56ZlY4k5aKEB0-/0/1758132851019?e=1761782400&v=beta&t=9tw63xPbwfYkSR1nDQEGyA9udfRKejrULSdQVweC9vY'
  }
];

export const skills = {
  languages: [
    { name: "Java", icon: <FaCode /> },
    { name: "Python", icon: <SiPython /> },
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "SQL/NoSQL", icon: <FaDatabase /> },
    { name: "HTML/CSS", icon: <FaHtml5 /> },
  ],
  frameworksAndLibraries: [
    { name: "React.js", icon: <FaReact /> },
    { name: "React Native", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Spring Boot", icon: <FaCode /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JUnit", icon: <FaCode /> },
  ],
  toolsAndPlatforms: [
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> },
    { name: "IntelliJ", icon: <FaCode /> },
    { name: "Jira & Confluence", icon: <FaCode /> },
    { name: "Redis Cache", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
  coreCompetencies: [
    "Problem Solving",
    "Agile Methodologies",
    "Team Leadership",
    "Mentorship",
    "Presentations & Oratory",
    "Full-Stack Application Design",
    "Cloud-Native Architecture",
    "CI/CD Pipeline Implementation"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "Software Development Engineer (SDE)",
    organization: "Amazon",
    duration: "Jan 2024 – Present",
    points: [
      "Designed and implemented single-click multi-region deployment framework using AWS Lambda, Step Functions, API Gateway, CloudWatch, and Route 53, reducing deployment time by 80%.",
      "Automated expansion of 85+ microservices and CI/CD pipelines across AWS regions, cutting manual effort from 90 weeks to 9 days.",
      "Engineered fault-tolerant, high-availability services (99.99%) leveraging SQS, SNS, KMS, and DynamoDB, ensuring business continuity at scale.",
      "Optimized pipeline orchestration and deployment workflows, reducing downtime by 40% while maintaining Tier 1 service SLAs.",
      "Collaborated across distributed teams in a remote-first Agile/Scrum environment, ensuring seamless delivery of AWS Q Business suite expansion worldwide."
    ],
    icon: <FaAmazon />,
  },
  {
    role: "Software Engineer Intern",
    organization: "Amazon",
    duration: "2023",
    points: [
      "Collaborated with cross-functional teams to identify and resolve bugs, implement OAuth 2.0 authentication for REST APIs, and optimize storage management system using Async Code in Java for Tier 1 and Tier 2 services.",
      "Enhanced worker safety within Amazon Fulfillment Centers by introducing a new feature, resulting in a 5% reduction in workplace incidents.",
      "Orchestrated collaborative efforts within a cross-functional team to create low-level designs, fostering innovation and problem-solving; increased team efficiency and reduced time-to-market by 15%.",
      "Thrived in a fast-paced environment, applying best coding practices, and delivering results within strict timeframes while ensuring maintainability and code quality."
    ],
    icon: <FaAmazon /> ,
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
};
