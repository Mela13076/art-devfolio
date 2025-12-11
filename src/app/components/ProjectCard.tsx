"use client";

import { motion } from "framer-motion";
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Project } from "@/types";
import { fadeInUp, cardHoverSmall } from '@/utils/animations'
import Link from "next/link";


//export const ProjectCard = ({ title, description, technologies, image, githubLink, demoLink }: Project) => {
export default function ProjectCard ({ project }: { project: Project }) {
  return (
    
    <motion.article
      key={project.title}
      className="bg-white dark:bg-dark/80 rounded-lg shadow-md p-6 border-primary flex flex-col justify-evenly"
      variants={fadeInUp}
      {...cardHoverSmall}
    >
      {/* Project Image */}
      {project.image && (
        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Project Title */}
      <Link href={`/projects/${project.slug}`}>
        <motion.h3 
          className="text-xl font-semibold mb-2 hover:text-primary transition-colors"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          
          {project.title}
        </motion.h3>
      </Link>

      {/* Project Description */}
      <motion.p 
        className="text-gray-600 dark:text-gray-300 mb-4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {project.description}
      </motion.p>

      {/* Project Technologies */}
      <motion.div 
        className="flex flex-wrap gap-2 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {project.technologies.map((tech) => (
          <motion.span
            key={tech}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
     
      {/* Project Links */}
      <motion.div 
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {project.githubLink && (
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="h-5 w-5" />
            <span>Code</span>
          </motion.a>
        )}
        {project.demoLink && (
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt className="h-5 w-5" />
            <span>Live Demo</span>
          </motion.a>
        )}
      </motion.div>
    </motion.article>
  );
};



