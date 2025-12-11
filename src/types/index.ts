export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  image?: string;
  slug: string;
  overview?: string;
  features?: string[];
  techStack?: string[];
  screenshots?: string[];
  role?: string;
  duration?: string;
  challenges?: string[];
  lessons?: string[];
  futurePlans?: string[];
  lastUpdated?: string;
  videoLink?: string;
  documentLink?: string[];
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