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
        className="text-4xl font-bold mb-8 text-center"
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
          I&apos;m a passionate Full Stack Developer and technical mentor passionate 
          about building secure, scalable web applications and helping others grow in tech. 
          With experience leading backend teams, developing cloud-based systems, and teaching 
          programming to students of all ages, I combine engineering expertise with a love 
          for creating intuitive, impactful learning experiences.
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
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
              <li>Redux</li>
              <li>Framer Motion</li>
              <li>Figma</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaDatabase className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Django</li>
              <li>RESTful APIs</li>
              <li>JWT Authentication</li>
              <li>Socket.IO</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCloud className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
            <ul className="text-secondary space-y-2">
              <li>Azure</li>
              <li>AWS</li>
              <li>CI/CD Piplines</li>
              <li>Cloudinary</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI/ Data Science & Security</h3>
            <ul className="text-secondary space-y-2">
              <li>Python</li>
              <li>Pandas/NumPy/Scikit-learn</li>
              <li>Cybersecurity Fundamentals</li>
              <li>Data Mining & Analysis</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Collaboration</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Asana/Trello/Notion</li>
              <li>Agile/Scrum Practices</li>
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
            <h3 className="text-xl font-semibold mb-2">Backend Team Lead • Full Stack Web Development Intern</h3>
            <p className="text-primary mb-2">GBCS Group • 2024</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Led a backend team of 10 interns to develop and maintain scalable web APIs using Node.js and Azure.</li>
              <li>Oversaw backend migration from Firebase to Azure, managing cloud infrastructure and secure data handling.</li>
              <li>Collaborated with frontend and DevOps teams to ensure seamless integration and optimized deployment pipelines.</li>
              <li>Implemented role-based authentication, RESTful APIs, and secure file access via Azure Blob Storage.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Tech Fellow Manager</h3>
            <p className="text-primary mb-2">CodePath • 2023 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Manage and mentor a team of Tech Fellows (teaching assistants) supporting student learning in computer science courses.</li>
              <li>Provide direct technical guidance across Web Development, Cybersecurity, and Technical Interview Prep (DSA) programs.</li>
              <li>Coordinate course delivery, student engagement, and feedback systems to enhance learning outcomes for hundreds of students.</li>
              <li>Collaborate with the CodePath team to troubleshoot technical issues, design activities, and support scalable curriculum improvements.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Programming Instructor</h3>
            <p className="text-primary mb-2">CodaKid • 2023 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Teach students ages 5–16 programming fundamentals and advanced concepts through game-based projects.</li>
              <li>Instruct in multiple languages and platforms, including Python (Pygame), Java (Minecraft modding), Scratch, and Web Development.</li>
              <li>Guide over 50 students in developing their logical thinking, debugging, and project-building skills.</li>
              <li>Adapt lessons to each learner’s pace and foster creativity through interactive coding challenges and personalized instruction.</li>
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
            <h3 className="text-xl font-semibold mb-2">Masters of Science in Computer Science</h3>
            <p className="text-primary mb-2">Texas A&M University Kingville • 2023 - 2025</p>
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
            <p className="text-primary mb-2">Texas A&M University Kingville • 2019 - 2023</p>
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