import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: 'Learning Loop AI',
    description:
      'A full-stack learning platform with courses, AI tutoring, guided hints, and generated quizzes.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Gemini API', 'Prisma', 'PostgreSQL', 'Clerk', 'Vercel'],
    links: [
      { label: 'Source Code', url: 'https://github.com/Mela13076/learning-loop-ai' },
      { label: 'Live Site', url: 'https://learning-loop-ai-alpha.vercel.app/' },
    ],
    image: '/projects/learning-loop.png',
    details: {
      problem:'Originally started as CodeAgent, an AI quiz generator for computer science learners. Through my experience teaching programming, I recognized that students needed more than generated answers. I wanted to create a structured learning experience that encourages understanding, practice, and reflection.',
      contribution:'Built a full-stack AI learning platform featuring guided tutoring, contextual explanations, hints, dynamically generated quizzes, AI-assisted grading, and study progress tracking. Developed topic-based learning workflows, authenticated user experiences, and persistent learning data.',
      technicalDecision:'Designed structured AI coaching interactions instead of relying on unrestricted chat, allowing students to request explanations, examples, and hints before seeing answers. Used Gemini for AI-powered learning features, Clerk for authentication, and Prisma with Neon PostgreSQL for type-safe data access and persistent learning progress.',
      status:'MVP deployed on Vercel. Actively developing improvements to guided learning, progress tracking, and the overall study experience.',
      blogUrl: '/blogs/why-i-built-learning-loop-ai',
    },
  },
  {
    title: 'MDBlessings',
    description:
      'A mobile-friendly merchandise showcase for a small business, with product filtering, pricing, and photo galleries.',
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4'],
    links: [
      { label: 'Source Code', url: 'https://github.com/Mela13076/mdblessings' },
      { label: 'Live Site', url: 'https://mdblessings.vercel.app/' },
    ],
    image: '/projects/mdblessings.png',
    details: {
      problem:'A family-owned custom apparel and gift business relied on social media and direct messages to showcase products and coordinate orders. I wanted to create a centralized, mobile-friendly website that made products easier to discover and simplified the custom-order inquiry process.',
      contribution:'Designed and developed a responsive product showcase with category filtering, individual product pages, image galleries, pricing information, and a custom-order inquiry flow. Organized product information using typed TypeScript data structures and reusable React components for easier maintenance and expansion.',
      technicalDecision:'Chose Next.js, TypeScript, and Tailwind CSS for a maintainable, responsive application. Prioritized a product catalog and inquiry-based workflow over full e-commerce checkout because orders require individual customization. Used reusable components and structured product data to keep the initial release manageable while supporting future growth.',
      status:'Initial version deployed on Vercel. Continuing to refine the customer experience and product content, with an admin dashboard planned for future development.',
    },
  },
  {
    title: 'DevFolio',
    description:
      'An open-source portfolio template with configurable content, themes, layouts, and MDX writing.',
    technologies: ['Next.js 16', 'React', 'TypeScript', 'Tailwind CSS 4', 'MDX', 'Vercel'],
    links: [
      { label: 'Source Code', url: 'https://github.com/Mela13076/devfolio-templete' },
      { label: 'Live Site', url: 'https://devfolio-templete.vercel.app/' },
    ],
    image: '/projects/devfolio2.png',
    details: {
      problem:'Developer portfolios often require significant code changes to update content, customize styling, or add projects. I wanted to create an open-source portfolio template that developers could easily personalize while maintaining a modern design, strong performance, and a clean codebase.',
      contribution:'Built and open-sourced a responsive developer portfolio with dynamic project pages, MDX-powered blogs, eight customizable themes, dark and light modes, and a contact form. Developed reusable UI components, centralized configuration, and documentation to help other developers customize the template.',
      technicalDecision:'Used Next.js App Router with React Server Components and static generation to support performance and content-driven pages. Chose MDX for flexible blog content, typed configuration for maintainable customization, and explicit server/client component boundaries to minimize unnecessary client-side JavaScript.',
      status:'Completed, open-sourced, and deployed on Vercel. Currently used as the foundation of my personal developer portfolio.',
    },
  },
  {
    title: 'Secure File Storage System',
    description:
      'A full-stack cybersecurity platform built with React, Django, and AWS that enables secure file uploads and downloads with AES-256 encryption and AWS KMS for key management.',
    technologies: ['React', 'Django', 'AWS S3', 'AWS KMS', 'PostgreSQL', 'JWT', 'RDS'],
    links: [
      { label: 'Source Code', url: 'https://github.com/Mela13076/Secure-File-Storage-System' },
      { label: 'Video Demo', url: 'https://drive.google.com/file/d/1VVDslnzRhalw5_raG6APIiKCsulRFbzI/view?usp=sharing' },
    ],
    image: '/projects/securefilesystem.png',
    details: {
      blogUrl: '/blogs/secure-file-storage',
    },
  },
  {
    title: 'Schedule Savvy',
    description:
      'A full-stack task management web app built for seamless scheduling and productivity. Features dynamic task organization, calendar integration, and full CRUD functionality with a PostgreSQL backend and an intuitive React interface. Practiced professional GitHub workflows with milestones, commits, and pull requests.',
    technologies: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'GitHub', 'REST API'],
    links: [
      { label: 'Source Code', url: 'https://github.com/Mela13076/Schedule-Savvy' },
      { label: 'Screenshots', url: 'https://imgur.com/a/schedule-savvy-app-qpgWbBa' },
    ],
    image: '/projects/schedulesavvy.png',
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A real-time communication platform that enables instant text, image, and video messaging using WebSockets via Socket.IO. Built with React, Node.js, MongoDB, and Cloudinary, it features secure JWT authentication, online presence tracking, and read receipts.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Cloudinary', 'JWT'],
    links: [
      { label: 'Source Code', url: 'https://github.com/Mela13076/ChatterBox/tree/main' },
      { label: 'Video Demo', url: 'https://drive.google.com/file/d/1slERZLmSo74fNhJ_uI4e5iZkmBrPTN8w/view?usp=sharing' },
    ],
    image: '/projects/chatterbox.png',
  },
  {
    title: 'Phishing Detection through URL and Content Analysis',
    description:
      'A machine learning-based system to detect phishing websites using URL and webpage content analysis, featuring advanced feature extraction and classification models for improved accuracy.',
    technologies: ['Python', 'Scikit-learn', 'Random Forest', 'Decision Tree', 'KNN', 'SMOTE'],
    links: [
      { label: 'Source Code', url: 'https://github.com/Mela13076/Phishing-Detection' },
    ],
    image: '/projects/phishing-detection.png',
  },
  {
    title: 'Clustering Analysis of Student Spending Habits',
    description:
      'A clustering project using K-means and PCA to segment students based on spending behavior and provide insights into financial support strategies.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'PCA'],
    // githubLink: 'https://github.com',
    // demoLink: 'https://demo.com',
    image: '/projects/student-spending-clustering.png',
  },
  {
    title: 'Movie Recommendation System',
    description:
      'A machine learning-based recommendation engine combining content-based, collaborative, and demographic filtering to suggest personalized movies using the Kaggle Movies Dataset. Implemented TF-IDF vectorization, cosine similarity, and k-NN for predictive recommendations.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'KNN', 'TF-IDF', 'Cosine Similarity'],
    links: [
      { label: 'Source Code', url: 'https://github.com/Mela13076/Movie-Recommendation-System' },
    ],
    // image: '/projects/movie-recommendation-system.png',
  },
  {
    title: 'Malware Detection through Machine Learning',
    description:
      'A malware classification system for Windows executables leveraging 531 extracted features and ML algorithms to achieve 98% accuracy and an ROC-AUC of 0.99.',
    technologies: ['Python', 'Scikit-learn', 'Random Forest', 'Decision Tree', 'KNN', 'SMOTE'],
    // githubLink: 'https://github.com',
    // demoLink: 'https://demo.com',
    // image: '/projects/malware-detection.png',
  },
  {
    title: 'Credit Card Clustering for Marketing Strategy',
    description:
      'A data-driven analysis of 9,000 credit card users using K-means, hierarchical, and density-based clustering algorithms to identify distinct customer segments and optimize marketing strategies.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'K-means', 'DBSCAN'],
    // githubLink: 'https://github.com',
    // demoLink: 'https://demo.com',
    // image: '/projects/credit-card-clustering.png',
  },
  
];


