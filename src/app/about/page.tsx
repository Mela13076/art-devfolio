'use client'

import { FaCode, FaLaptopCode, FaGraduationCap, FaCloud, FaDatabase } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center "
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a software engineer and programming instructor who builds full-stack web
          applications and AI-powered learning tools. My experience includes backend API
          development, cloud migrations, and AI-assisted workflows. At CodePath, I coordinate
          technical course delivery and work with engineering and operations teams to improve
          instructional tools. Teaching and mentoring also inform how I design software for learners.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <ul className="text-secondary space-y-2">
              <li>JavaScript / TypeScript</li>
              <li>Python</li>
              <li>SQL</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>Tailwind CSS</li>
              <li>Responsive Web Design</li>
              <li>Redux</li>
              <li>Framer Motion</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaDatabase className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend &amp; Databases</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js / Express</li>
              <li>Django</li>
              <li>REST APIs</li>
              <li>Prisma</li>
              <li>PostgreSQL / MySQL</li>
              <li>MongoDB</li>
              <li>JWT Authentication / Socket.IO</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI &amp; Data</h3>
            <ul className="text-secondary space-y-2">
              <li>Claude API / Gemini API</li>
              <li>Google Apps Script</li>
              <li>Structured AI Outputs &amp; Prompt Development</li>
              <li>Pandas / NumPy / Scikit-learn</li>
              <li>Data Mining &amp; Analysis</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCloud className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud &amp; DevOps</h3>
            <ul className="text-secondary space-y-2">
              <li>Azure / AWS</li>
              <li>Vercel</li>
              <li>CI/CD Workflows</li>
              <li>Cloudinary</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools &amp; Collaboration</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>VS Code / Postman</li>
              <li>Figma</li>
              <li>Asana / Trello / Notion</li>
              <li>Agile / Scrum Practices</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8 "
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Delivery Coordinator</h3>
            <p className="text-primary mb-2">CodePath • January 2026–Present</p>
            <ul className="text-secondary list-disc list-outside pl-5 space-y-3">
              <li>Coordinate technical testing and delivery for AI110 and AI201. For the inaugural AI110 course, identified curriculum issues, documented launch blockers, and implemented operational improvements before rollout to 3,000+ students.</li>
              <li>Review curriculum and test instructional workflows using AI-assisted analysis. Compared AI-generated grades with human grader outcomes across 2,400+ student submissions to identify failure cases, refine grading prompts, and recommend curriculum changes.</li>
              <li>Debug AI grading failures, test rubric revisions, and document edge cases. Worked with engineering teams to improve grading workflows across four courses serving 4,788 students.</li>
              <li>Built an application review pipeline with JavaScript, Google Apps Script, and the Claude API to evaluate Tech Fellow video transcripts and generate scores and feedback for human reviewers. Added error handling and resumable processing; across 500+ applications, processing failures decreased from 50% to 21% across separate pilot rounds.</li>
            </ul>
            <h4 className="font-semibold mt-6 mb-2">Earlier roles: Tech Fellow Manager and Tech Fellow</h4>
            <p className="text-primary mb-4">June 2023–December 2025</p>
            <ul className="text-secondary list-disc list-outside pl-5 space-y-3">
              <li>Led and mentored 12 Tech Fellows while providing hands-on debugging support to 350+ students working with HTML, CSS, JavaScript, and React.</li>
              <li>Worked with staff to improve curriculum delivery, technical support workflows, and student engagement in large virtual programs.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Full-Stack Software Engineer Intern / Backend Team Lead</h3>
            <p className="text-primary mb-2">GBCS Group • 2024</p>
            <ul className="text-secondary list-disc list-outside pl-5 space-y-3">
              <li>Led a backend team modernizing 100+ REST APIs and contributed to the migration from Firebase to Azure using Node.js, Express, Prisma, and MySQL.</li>
              <li>Designed and implemented REST APIs for internal request-for-proposal (RFP) workflows, document management, and collaboration across departments.</li>
              <li>Integrated Azure Blob Storage for file management and contributed to React frontend development, UI debugging, API integration testing, and application troubleshooting.</li>
              <li>Coordinated development priorities, reviewed pull requests, and managed Git branching and CI/CD workflows to support team development and code quality.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Programming Instructor</h3>
            <p className="text-primary mb-2">CodaKid • 2023–Present</p>
            <ul className="text-secondary list-disc list-outside pl-5 space-y-3">
              <li>Teach programming through game-based projects using Python and Pygame, Java and Minecraft modding, Scratch, and web development.</li>
              <li>Guide students through debugging, logical problem-solving, and building their own projects.</li>
              <li>Adapt lessons and coding exercises to each student&apos;s experience and pace.</li>
            </ul>
          </motion.div>

        </motion.div>
      </motion.section>





      {/* Education Section */}
      <motion.section
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Master of Science in Computer Science</h3>
            <p className="text-primary mb-2">Texas A&amp;M University–Kingsville • 2023–2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Graduated with a 4.0 GPA and selected as the Commencement Speaker for the College of Engineering Graduate Studies.</li>
              <li>Focused on software engineering, full-stack development, cloud computing, artificial intelligence, data mining, and cybersecurity.</li>
              <li>Completed advanced coursework in Operating Systems, Database Systems, Data Science & Analytics, Algorithms, Cyber Intelligence, Cloud Computing, and Computer Networks.</li>
            </ul>
           
            </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Electrical Engineering</h3>
            <p className="text-primary mb-2">Texas A&amp;M University–Kingsville • 2019–2023</p>
             <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Graduated Magna Cum Laude (3.72 GPA) with Minors in Computer Science and Mathematics.</li>
              <li>Developed a strong foundation in programming, software engineering, computer networks, digital systems, and control theory, blending hardware and software expertise.</li>
              <li>Completed senior design projects in Computer Security, Operating Systems, and Network Engineering, applying engineering principles to software development and system design.</li>
              <li>Recognized on the Dean’s List multiple semesters for academic excellence and leadership in the College of Engineering.</li>
            </ul>
            
          </motion.div>
        </motion.div>
        
      </motion.section>
    </div>
  )
} 