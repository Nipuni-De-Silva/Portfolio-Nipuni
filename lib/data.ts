import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import projectImage from "@/public/new.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Information and Communication Technology",
    location: "University of Sri Jayewardenepura, Sri Lanka",
    description:
      "Currently pursuing my degree with a GPA of 3.83/4.00, focusing on software engineering and artificial intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2021 - Present",
  },
  {
    title: "Associate Software Engineer",
    location: "Zafer (AI)",
    description:
      "Working as a core member of the AI and R&D teams to design, develop, and deploy production-grade AI features like AI Summarizer, Document Chat, AI Search, AI AutoFill, and AI Insight. Led backend development using Python, Spring Boot, and Microservices.",
    icon: React.createElement(FaReact),
    date: "Nov 2024 - Present",
  },
  {
    title: "Intern Software Engineer",
    location: "ZorroSign Inc",
    description:
      "Collaborated with cross-functional teams to deliver production-ready code, enhanced the Notification Service with 90% increased code coverage, contributed to AI Document Autofill feature, and built a full-stack IoT Device Management solution.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Oct 2024",
  },
] as const;

export const projectsData = [
  {
    title: "ReviewBar - Augmented Product Review System",
    description:
      "An e-commerce platform that automatically extracts product features and sentiment from customer reviews to help shoppers make informed purchasing decisions.",
    tags: ["Vue.js", "Node.js", "Express.js", "MongoDB"],
    imageUrl: projectImage,
  },
  {
    title: "Workout-Buddy - Personalized Fitness App",
    description:
      "A comprehensive fitness application that allows users to create, track, and manage personalized workout routines based on their fitness goals and preferences.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    imageUrl: projectImage,
  },
  {
    title: "Note-it - Note-taking Web Application",
    description:
      "A feature-rich note-taking application designed for efficiency and organization with tagging, categorization, and search functionality to keep notes accessible across devices.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    imageUrl: projectImage,
  },
  {
    title: "UNI-Share - Blogging Platform for Uni Students",
    description:
      "A dedicated blogging platform tailored for university students to share knowledge, experiences, and resources within their academic community.",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    imageUrl: projectImage,
  },
  {
    title: "Local Library - Online Catalog System",
    description:
      "An online catalog system for local libraries that enables users to browse available books, manage loans, and reserve items for future borrowing.",
    tags: ["JavaScript", "Express.js", "MongoDB"],
    imageUrl: projectImage,
  }
] as const;

export const skillsData = [
  "Java Spring Boot",
  "Python FastAPI",
  "Python FlaskAPI",
  "Angular",
  "HTML/CSS/JS",
  "LLM",
  "RAG",
  "MCP Protocol",
  "A2A Protocol",
  "Prompt Engineering",
  "Microservices",
  "RESTful API",
  "MongoDB",
  "MySQL",
  "VectorDB",
  "Neo4j",
  "Git",
  "Docker",
  "Kubernetes",
  "Apache Kafka",
  "ELK Stack",
  "Unit Testing",
  "Agile/Scrum",
] as const;
