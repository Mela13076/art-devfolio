"use client";

import { motion } from "framer-motion";
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Project } from "@/types";
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

// export interface Project {
//   title: string;
//   description: string;
//   technologies: string[];
//   githubLink?: string;
//   demoLink?: string;
//   image: string;
// }

export const ProjectCard = ({ title, description, technologies, image, githubLink, demoLink }: Project) => {
  return (
    <motion.article
      key={title}
      className="bg-white dark:bg-dark/95 rounded-lg shadow-md p-6"
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
        className="text-xl font-semibold mb-2 text-primary"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        
        {title}
      </motion.h3>

      {/* Project Description */}
      <motion.p 
        className="text-gray-600 dark:text-gray-300 mb-4"
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
     
      {/* Project Links */}
      <motion.div 
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {githubLink && (
          <motion.a
            href={githubLink}
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
        {demoLink && (
          <motion.a
            href={demoLink}
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





// export const ProjectCard = ({ title, description, technologies, image, githubLink, demoLink }: Project) => {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       transition={{ duration: 0.3 }}
//       className="bg-white dark:bg-dark/95 rounded-2xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
//     >
//       {image && (
//         <div className="mb-4 rounded-xl overflow-hidden">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//       )}

//       <div className="flex-1">
//         <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
//         <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>

//         <div className="flex flex-wrap gap-2 mb-4">
//           {technologies.map((t, i) => (
//             <span
//               key={i}
//               className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="flex gap-4 mt-auto">
//         {githubLink && (
//           <a
//             href={githubLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
//           >
//             <FaGithub className="h-5 w-5" /> Code
//           </a>
//         )}
//         {demoLink && (
//           <a
//             href={demoLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
//           >
//             <FaExternalLinkAlt className="h-5 w-5" /> Live Demo
//           </a>
//         )}
//       </div>
//     </motion.div>
//   );
// };
