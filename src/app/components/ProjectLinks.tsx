import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project, ProjectLink } from '@/types';

export default function ProjectLinks({ links, githubLink, demoLink }: Pick<Project, 'links' | 'githubLink' | 'demoLink'>) {
  // Keep older project data compatible while new entries use explicit labels.
  const projectLinks: ProjectLink[] = links ?? [
    ...(githubLink ? [{ label: 'Source Code' as const, url: githubLink }] : []),
    ...(demoLink ? [{ label: 'Live Site' as const, url: demoLink }] : []),
  ];

  if (!projectLinks.length) return null;

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-3">
      {projectLinks.map(({ label, url }) => (
        <a key={`${label}-${url}`} href={url} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
          {label === 'Source Code' ? <FaGithub aria-hidden="true" /> : <FaExternalLinkAlt aria-hidden="true" />}
          {label}<span className="sr-only"> (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}
