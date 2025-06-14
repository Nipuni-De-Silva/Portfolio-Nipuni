"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 max-w-[55rem] mx-auto">
      <SectionHeading>Projects</SectionHeading>
      <p className="text-center text-gray-700 dark:text-white/70 mb-8">
        Here are some of the key projects I've worked on. Each demonstrates different aspects of my technical skills and problem-solving abilities.
      </p>
      <div className="flex flex-col items-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
