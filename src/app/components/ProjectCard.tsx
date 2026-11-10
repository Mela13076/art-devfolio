"use client";

import { motion } from "framer-motion";
import Image from 'next/image'
import { useState } from 'react';
import ProjectLinks from './ProjectLinks';
import ProjectDetailsDialog from './ProjectDetailsDialog';
import { Project } from "@/types";
import { fadeInUp, cardHoverSmall } from '@/utils/animations'


export default function ProjectCard (project: Project) {
  const { title, description, technologies, image, details } = project;
  const [detailsOpen, setDetailsOpen] = useState(false);
  const hasDetails = details && Object.values(details).some(value => value?.trim());

  return (
    <>
    <motion.article
      key={title}
      className="bg-white dark:bg-dark/80 rounded-lg shadow-md p-6 border-primary flex flex-col justify-evenly"
      variants={fadeInUp}
      {...cardHoverSmall}
    >
      {/* Project Image */}
      {image && (
        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Project Title */}
      <motion.h3 
        className="text-xl font-semibold mb-2 hover:text-primary transition-colors"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        
        {title}
      </motion.h3>

      {/* Project Description */}
      <motion.p 
        className="text-gray-600 dark:text-gray-300 mb-4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {description}
      </motion.p>

      {/* Project Technologies */}
      <motion.div 
        className="flex flex-wrap gap-2 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {technologies.map((tech) => (
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
     
      <div className="mt-auto space-y-4 pt-2">
        <ProjectLinks {...project} />
        {hasDetails && <button type="button" onClick={() => setDetailsOpen(true)}
          aria-haspopup="dialog" aria-label={`View details about ${title}`}
          className="inline-block rounded-lg bg-primary px-5 py-2 text-white hover:bg-primary/90 transition-colors">
          View Details
        </button>}
      </div>
    </motion.article>
    {detailsOpen && <ProjectDetailsDialog project={project} onClose={() => setDetailsOpen(false)} />}
    </>
  );
};



