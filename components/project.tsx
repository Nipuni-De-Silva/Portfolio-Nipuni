"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import defaultImage from "@/public/Profile.jpg";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  tags,
  imageUrl,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 w-full max-w-[42rem]"
    >
      <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[18rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">{title}</h3>
            {githubUrl && (
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer" 
                className="text-gray-700 hover:text-black dark:text-white/70 dark:hover:text-white/100 transition-colors">
                <FaGithub className="w-6 h-6" />
              </Link>
            )}
          </div>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-3 text-gray-900 dark:text-white/90">Tech Stack:</h4>
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}            </ul>
          </div>
        </div>{/* If custom image exists, or no GitHub URL, use normal image */}
        {(imageUrl !== defaultImage || !githubUrl) ? (
          <>
            <Image
              src={imageUrl}
              alt={`${title} project thumbnail`}
              quality={95}
              className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40
            
            object-cover h-auto"
            />
            
            <div className="sm:hidden w-full mt-4 px-5 pb-5">
              <Image
                src={imageUrl}
                alt={`${title} project thumbnail`}
                quality={90}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </>
        ) : (
          <>            {/* GitHub Repository Preview */}
            <div className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-[12rem] rounded-t-lg shadow-2xl
              bg-white dark:bg-gray-800 p-5 overflow-hidden
              transition 
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2

              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2

              group-even:right-[initial] group-even:-left-40">              <div className="flex items-center mb-4">
                <FaGithub className="w-6 h-6 mr-3 text-black dark:text-white" />
                <span className="text-base font-medium truncate dark:text-white">
                  {githubUrl.replace('https://github.com/', '').replace('.git', '')}
                </span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 overflow-hidden">
                <p className="mb-3">View code repository on GitHub</p>
                <p className="text-blue-500 hover:underline">
                  {githubUrl}
                </p>
              </div>
            </div>
              <div className="sm:hidden w-full mt-4 px-5 pb-5">
              <div className="rounded-lg shadow-md bg-white dark:bg-gray-800 p-4">
                <div className="flex items-center mb-2">
                  <FaGithub className="w-5 h-5 mr-2 text-black dark:text-white" />
                  <span className="text-sm font-medium truncate dark:text-white">
                    {githubUrl.replace('https://github.com/', '').replace('.git', '')}
                  </span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                  <p>View on GitHub</p>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </motion.div>
  );
}
