import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import defaultImage from "@/public/Profile.jpg";
// Import your project images here when you add them
// For example:
// import reviewBarImg from "@/public/projects/reviewbar.jpg";
// import workoutBuddyImg from "@/public/projects/workout-buddy.jpg";
// import noteItImg from "@/public/projects/note-it.jpg";
// import uniShareImg from "@/public/projects/uni-share.jpg";
// import localLibraryImg from "@/public/projects/local-library.jpg";

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
  },  {
    title: "Associate Software Engineer",
    location: "Zafer (AI)",
    description:
      "Working as a core member development team specially for AI and R&D teams to design, develop, and deploy production-grade AI features like AI Summarizer, Document Chat, AI Search, AI AutoFill, and AI Insigh, MCP Protocols and A2A Protocolst. Led backend development using Python, Spring Boot, and Microservices.",
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

export const projectsData = [  {
    title: "Final Year Research Project - Knowledge Graph-based Retrieval-Augmented Generation System",
    tags: ["Python", "LangChain", "Neo4j", "FlaskAPI"],
    imageUrl: defaultImage,  // Replace with: knowledgeGraphImg
    githubUrl: "https://github.com/Nipuni-De-Silva/Knowledge-Graph-RAG",
  },
  {
    title: "ReviewBar - Augmented Product Review System",
    tags: ["Vue JS", "Node", "Express JS", "MongoDB"],
    imageUrl: defaultImage,  // Replace with: reviewBarImg
    githubUrl: "https://github.com/Nipuni-De-Silva/ReviewBar.git",
  },
  {
    title: "Workout-Buddy - Personalized Fitness App",
    tags: ["React JS", "Node", "Express JS", "MongoDB"],
    imageUrl: defaultImage,  // Replace with: workoutBuddyImg
    githubUrl: "https://github.com/Nipuni-De-Silva/Workout-Buddy.git",
  },
  {
    title: "Note-it - Note Taking Web Application",
    tags: ["React JS", "Node", "Express JS", "MongoDB"],
    imageUrl: defaultImage,  // Replace with: noteItImg
    githubUrl: "https://github.com/Nipuni-De-Silva/Note-it.git",
  },
  {
    title: "UNI-Share - Blogging Platform for Uni Students",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    imageUrl: defaultImage,  // Replace with: uniShareImg
    githubUrl: "https://github.com/Nipuni-De-Silva/UNI-Share.git",
  },  {
    title: "Local Library - Online Catalog for Local Library",
    tags: ["JavaScript", "Express JS", "MongoDB"],
    imageUrl: defaultImage,  // Replace with: localLibraryImg
    githubUrl: "https://github.com/Nipuni-De-Silva/express-locallibrary.git",
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
