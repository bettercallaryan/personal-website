import { Link } from "./types";

import {
  XSVG,
  ThreadsSVG,
  InstagramSVG,
  ChatgptSVG,
  EmailSVG,
  GithubSVG,
  GoogleSVG,
  LinkedinSVG,
} from "@/components/icons";

export const LINKS: Link[] = [
  {
    title: "X: alvaro_Aryan",
    href: "https://x.com/alvaro_Aryan",
    icon: <XSVG />,
    text: "alvaro_Aryan",
    rel: "noopener noreferrer external",
  },
  {
    title: "Threads: bettercall_alvaro",
    href: "https://www.threads.net/@bettercall_alvaro",
    icon: <ThreadsSVG />,
    text: "bettercall_alvaro",
    rel: "me",
  },
  {
    title: "Instagram: bettercall_alvaro",
    href: "https://www.instagram.com/bettercall_alvaro",
    icon: <InstagramSVG />,
    text: "bettercall_alvaro",
    rel: "noopener noreferrer external",
  },
  {
    title: "LinkedIn: Aryan Sen",
    href: "www.linkedin.com/in/alvaro2003",
    icon: <LinkedinSVG />,
    text: "Aryan Sen",
    rel: "noopener noreferrer external",
  },
  {
    title: "GitHub: bettercallaryan",
    href: "https://github.com/bettercallaryan",
    icon: <GithubSVG />,
    text: "bettercallaryan",
    rel: "noopener noreferrer external",
  },
  {
    title: "Google",
    href: "https://www.google.com/search?q=Aryan+Sen",
    icon: <GoogleSVG />,
    text: "Google Search",
    rel: "noopener noreferrer external",
  },
  {
    title: "ChatGPT",
    href: "https://chatgpt.com/?q=Aryan%20Sen",
    icon: <ChatgptSVG />,
    text: "ChatGPT",
    rel: "noopener noreferrer external",
  },
  {
    title: "Email",
    href: "mailto:itsaryanofficial2003@gmail.com",
    icon: <EmailSVG />,
    text: "Email",
    rel: "noopener noreferrer external",
  },
];

export const KEYWORDS = [
  "Aryan Sen",
  "Student",
  "Data Science Student",
  "AI Enthusiast",
  "Artificial Intelligence",
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "GitHub Projects",
  "Programming",
  "JavaScript",
  "Python",
  "Open Source Contributor",
  "Tech Projects",
  "Tech Trends",
  "Latest Technologies",
  "Machine Learning",
  "Deep Learning",
  "Web Applications",
  "Software Development",
  "Coding",
  "Technology Enthusiast",
  "Software Engineering",
  "Resume",
  "Professional Experience",
  "Tech Skills",
  "Project Showcase",
  "Personal Portfolio",
  "Professional Portfolio",
  "Tech Opportunities",
  "Career Opportunities",
  "Student Projects",
  "Academic Projects",
  "Coding Projects",
  "API Development",
  "Innovative Technologies",
  "Tech Blogs",
  "Digital Transformation",
  "Problem Solving",
  "Programming Languages",
  "Tech Industry",
  "Team Collaboration",
  "Agile Development",
  "Software Solutions",
  "Personal Website",
  "Learning New Technologies",
  "Technology Updates",
  "Career Growth",
  "Tech Community",
];

export const DESCRIPTION =
  "I am a dedicated Data Science student pursuing an Integrated MTech in AI at VIT Bhopal with 3+ years of coding experience. Skilled in Python, JavaScript, and C++, and proficient in Git, Docker, AWS, and MongoDB. Passionate about leveraging data for insights and innovation.";

export const TITLE = "Aryan Sen’s personal website";
export const BLOG_PAGE_TITLE = "Aryan Sen’s personal blog";


export const GET_ALL_BLOGS_QUERY = `query Publication {
      publication(host: "alvaro10.hashnode.dev") {
        isTeam
        title
        posts(first: 10) {
          edges {
            node {
              title
              publishedAt
              brief
              url
            }
          }
        }
      }
    }`;
