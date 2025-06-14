"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Software Engineer</span> with experience in developing and 
        deploying full-stack software solutions, including production-grade AI features. 
        I have a strong focus on <span className="font-medium">system architecture design</span> and 
        hands-on expertise across the entire software development life cycle. 
        <span className="italic"> I'm known for quickly learning and adapting</span> to new technologies, 
        with consistent recognition for writing <span className="underline">clean, scalable, and stable code</span>.
      </p>

      <p className="mb-3">
        My core technical skills include{" "}
        <span className="font-medium">
          Java Spring Boot, Python FastAPI, Python FlaskAPI, Angular, and AI/ML technologies
        </span> (RAG, LLM, Prompt Engineering, MCP, A2A, Vector DBs and Knowledge Graphs)
        . I'm experienced with microservices architecture, RESTful API design, and 
        various database technologies. I demonstrate the ability to lead and contribute 
        effectively within cross-functional teams, driven by a passion for delivering impactful, 
        user-centric solutions in fast-paced, dynamic environments.
      </p>

      <p>
        <span className="italic">Currently</span>, I'm pursuing my Bachelor of Information and Communication 
        Technology degree with a strong academic record (GPA 3.83/4.00). I enjoy learning new things in 
        <span className="font-medium"> emerging trends especially in AI/ML</span>.
      </p>
    </motion.section>
  );
}
