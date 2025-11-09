import { Blog } from "@/types";

export const blogs: Blog[] = [
    {
        title: 'Building a Secure File Storage System',
        summary: 'A technical deep dive into designing and implementing a cloud-secure encrypted file storage system using AWS KMS, AES encryption, Django, and professional project management workflows.',
        date: '2025-01-15',
        readTime: '7 min read',
        slug: 'secure-file-storage',
        tags: ["AWS", "Security", "Django", "Cloud Architecture", "Encryption"]
      },
      {
        title: 'Building CodeAgent - Concept Check (Part 1): Designing an AI-Powered Quiz Platform',
        summary: 'A behind-the-scenes look at building CodeAgent — an AI-driven quiz generator for computer science students, exploring the project vision, architecture, early challenges, and lessons learned so far.',
        date: '2025-11-08',
        readTime: '8 min read',      
        slug: 'codeagent-progress-part-1',
        tags: ["Next.js", "Supabase", "OpenAI", "AI", "Education", "Full-Stack", "Project Journal"]
      },
      {
        title: 'Building Responsive Layouts with Tailwind CSS',
        summary: 'Tips and tricks for creating responsive designs using Tailwind CSS.',
        date: '2024-03-05',
        readTime: '6 min read',
        slug: 'building-responsive-layouts-with-tailwind-css',
      },
      {
        title: 'Understanding React Hooks',
        summary: 'A deep dive into React Hooks and how to use them effectively.',
        date: '2024-03-01',
        readTime: '7 min read',
        slug: 'understanding-react-hooks',
      },
        {
            title: 'Deploying Next.js Applications on Vercel',
            summary: 'Step-by-step guide to deploying your Next.js applications on Vercel.',
            date: '2024-02-25',
            readTime: '4 min read',
            slug: 'deploying-nextjs-applications-on-vercel',
        },
        {
            title: 'Building a RESTful API with Node.js and Express',
            summary: 'Learn how to create a RESTful API using Node.js and Express.',
            date: '2024-02-20',
            readTime: '10 min read',
            slug: 'building-a-restful-api-with-nodejs-and-express',
        },
  ];