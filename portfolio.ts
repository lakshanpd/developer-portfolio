import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Danuka Lakshan",
  title: "Hi all, I'm Danuka",
  description:
    "I am an enthusiastic undergraduate with a strong passion for web development and machine learning. My skill set includes proficiency in Python, React.js, JavaScript, MySQL, and Express. I am a hardworking individual who excels in time management, always eager to learn and implement new technologies in my projects. I thrive in team environments and am committed to delivering high-quality work efficiently.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "lakshanpd",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:dhanuka.21@cse.mrt.ac.lk",
  linkedin: "https://www.linkedin.com/in/danuka-lakshan-b92b91247/",
  github: "https://github.com/lakshanpd",
  instagram: "",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "ENTHUSIASTIC UNDERGRADUATE WITH A STRONG PASSION FOR WEB DEVELOPMENT AND MACHINE LEARNING",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building Full Stack Web Apllications"),
        emoji("⚡ Data Preprocessing and Model Building in Machine Learning"),
        emoji("⚡ Working with Deep Neural Networks"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },

        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },

        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Lucid Chart",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "70", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "75",
  },
  {
    Stack: "Programming",
    progressPercentage: "90",
  },
  {
    Stack: "Data Preprocessing",
    progressPercentage: "90",
  },
  {
    Stack: "Model Building and Fine Tunning",
    progressPercentage: "80",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Moratuwa, Sri Lanka",
    subHeader: "Bachelor of Science in Computer Science Engineering",
    duration: "2021 - Present",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
];

// export const experience: ExperienceType[] = [];

export const projects: ProjectType[] = [
  {
    name: "HealthBot Plus Web App",
    desc: "AI Powered skin cancer diagnosis application",
    github: "https://github.com/Isara-Li/HealthBot_Plus",
  },
  {
    name: "Pallawala Resort Website",
    desc: "Room reservation website for a business with Email based review system",
    github: "https://github.com/lakshanpd/Pallawala-Resort",
  },
  {
    name: "Nano Processor Design",
    desc: "Simple 4-bit Nano Processor Design with basic operations",
  },
];

// export const feedbacks: FeedbackType[] = [];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Danuka Lakshan",
  description: greetings.description,
  author: "Danuka Lakshan",
  image: "/img/me2.jpg",
  // url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [],
};
