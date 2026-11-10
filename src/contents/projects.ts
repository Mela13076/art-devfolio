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
      problem: 'Started as CodeAgent, an AI quiz generator for computer science learners. The idea grew into Learning Loop AI to support courses and a broader learning experience.',
      contribution: 'Built course-based learning features and integrated the Gemini API for tutoring, contextual explanations, hints, and quizzes. Added authentication and PostgreSQL-backed application data.',
      technicalDecision: 'Used Clerk for authentication and Prisma with PostgreSQL for application data, alongside Gemini-powered learning workflows.',
      status: 'Deployed on Vercel.',
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
      problem: 'The business needs a branded place for customers to browse custom merchandise, see starting prices, and explore product examples.',
      contribution: 'Translated owner requirements into product categories, filtering, pricing displays, and individual product pages with photo galleries.',
      technicalDecision: 'Used typed TypeScript product data and reusable React components for the catalog, keeping the architecture open to future content management features.',
      status: 'In development, with a preview on Vercel. The custom-order inquiry flow is not accepting submissions yet.',
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
      problem: 'Developers need a portfolio they can customize without rewriting the core application components.',
      contribution: 'Built a portfolio platform with Next.js App Router, React Server Components, MDX, and a reusable theme and configuration system. Published it as a documented GitHub template.',
      technicalDecision: 'Separated content, configuration, and presentation so site content and appearance can change independently of the core components.',
      status: 'Published as a GitHub template, with a live demo on Vercel.',
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


