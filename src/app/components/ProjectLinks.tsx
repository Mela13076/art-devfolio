import Link from 'next/link';
import { FaBookOpen, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project, ProjectLink } from '@/types';

export default function ProjectLinks({ links, githubLink, demoLink, details }: Pick<Project, 'links' | 'githubLink' | 'demoLink' | 'details'>) {
  const blogUrl = details?.blogUrl?.trim();
  // Keep older project data compatible while new entries use explicit labels.
  const projectLinks: ProjectLink[] = links ?? [
    ...(githubLink ? [{ label: 'Source Code' as const, url: githubLink }] : []),
    ...(demoLink ? [{ label: 'Live Site' as const, url: demoLink }] : []),
  ];

  if (!projectLinks.length && !blogUrl) return null;

  const linkClassName = 'inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors';

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-3">
      {projectLinks.map(({ label, url }) => (
        <a key={`${label}-${url}`} href={url} target="_blank" rel="noopener noreferrer"
          className={linkClassName}>
          {label === 'Source Code' ? <FaGithub aria-hidden="true" /> : <FaExternalLinkAlt aria-hidden="true" />}
          {label}<span className="sr-only"> (opens in a new tab)</span>
        </a>
      ))}
      {blogUrl && (
        <Link href={blogUrl} className={linkClassName}>
          <FaBookOpen aria-hidden="true" />
          Read the blog
        </Link>
      )}
    </div>
  );
}
