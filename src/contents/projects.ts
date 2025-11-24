import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: 'Secure File Storage System',
    description:
      'A full-stack cybersecurity platform built with React, Django, and AWS that enables secure file uploads and downloads with AES-256 encryption and AWS KMS for key management.',
    technologies: ['React', 'Django', 'AWS S3', 'AWS KMS', 'PostgreSQL', 'JWT', 'RDS'],
    githubLink: 'https://github.com/Mela13076/Secure-File-Storage-System',
    demoLink: 'https://drive.google.com/file/d/1VVDslnzRhalw5_raG6APIiKCsulRFbzI/view?usp=sharing',
    image: '/projects/securefilesystem.png',
  },
  {
    title: 'Schedule Savvy',
    description:
      'A full-stack task management web app built for seamless scheduling and productivity. Features dynamic task organization, calendar integration, and full CRUD functionality with a PostgreSQL backend and an intuitive React interface. Practiced professional GitHub workflows with milestones, commits, and pull requests.',
    technologies: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'GitHub', 'REST API'],
    githubLink: 'https://github.com/Mela13076/Schedule-Savvy',
    demoLink: 'https://imgur.com/a/schedule-savvy-app-qpgWbBa',
    image: '/projects/schedulesavvy.png',
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A real-time communication platform that enables instant text, image, and video messaging using WebSockets via Socket.IO. Built with React, Node.js, MongoDB, and Cloudinary, it features secure JWT authentication, online presence tracking, and read receipts.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Cloudinary', 'JWT'],
    githubLink: 'https://github.com/Mela13076/ChatterBox/tree/main',
    demoLink: 'https://drive.google.com/file/d/1slERZLmSo74fNhJ_uI4e5iZkmBrPTN8w/view?usp=sharing',
    image: '/projects/chatterbox.png',
  },
  {
    title: 'Phishing Detection through URL and Content Analysis',
    description:
      'A machine learning-based system to detect phishing websites using URL and webpage content analysis, featuring advanced feature extraction and classification models for improved accuracy.',
    technologies: ['Python', 'Scikit-learn', 'Random Forest', 'Decision Tree', 'KNN', 'SMOTE'],
    githubLink: 'https://github.com/Mela13076/Phishing-Detection',
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
    githubLink: 'https://github.com/Mela13076/Movie-Recommendation-System',
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


