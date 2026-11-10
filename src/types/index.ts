export interface ProjectLink {
  label: 'Live Site' | 'Video Demo' | 'Screenshots' | 'Source Code';
  url: string;
}

export interface ProjectDetails {
  problem?: string;
  contribution?: string;
  technicalDecision?: string;
  status?: string;
  blogUrl?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  image?: string;
  links?: ProjectLink[];
  details?: ProjectDetails;
}

export interface Blog {
  title: string;
  summary: string;
  date: string;
  readTime: string;
  slug: string;
  tags?: string[];
}

export interface BlogLayoutProps {
    title: string;
    date: string;
    readTime?: string;
    tags?: string[];
    slug?: string;
    lastUpdated?: string;

}