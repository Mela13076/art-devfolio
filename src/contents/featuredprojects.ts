import { Project } from "@/types";


export const featuredProjects: Project[] = [
  {
    title: 'Secure File Storage System',
    description:
      'A full-stack cybersecurity platform built with React, Django, and AWS that enables secure file uploads and downloads with AES-256 encryption and AWS KMS for key management.',
    technologies: ['React', 'Django', 'AWS S3', 'AWS KMS', 'PostgreSQL', 'JWT', 'RDS'],
    githubLink: 'https://github.com',
    image: '/projects/securefilesystem.png',
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A real-time communication platform that enables instant text, image, and video messaging using WebSockets via Socket.IO. Built with React, Node.js, MongoDB, and Cloudinary, it features secure JWT authentication, online presence tracking, and read receipts.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Cloudinary', 'JWT'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/chatterbox.png',
  },
  {
    title: 'Schedule Savvy',
    description:
      'Built a full-stack task and scheduling web app using the PERN stack (PostgreSQL, Express.js, React.js, Node.js). Implemented RESTful APIs, dynamic task categorization, and calendar integration for efficient organization. Designed an intuitive React interface with real-time updates and managed the project through GitHub using issues, milestones, commits, and pull requests.',
    technologies: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'GitHub', 'REST API'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/schedule-savvy.png',
  },
  {
    title: 'Movie Recommendation System',
    description:
      'A machine learning-based recommendation engine combining content-based, collaborative, and demographic filtering to suggest personalized movies using the Kaggle Movies Dataset. Implemented TF-IDF vectorization, cosine similarity, and k-NN for predictive recommendations.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'KNN', 'TF-IDF', 'Cosine Similarity'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/movie-recommendation-system.png',
  },
];
