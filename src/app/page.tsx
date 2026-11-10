import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
// import Newsletter from "./components/Newsletter";
import ProjectSection from "./components/ProjectSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectSection />
      <ExperienceSection />
      <Blogs />
      {/* <Newsletter /> */}
    </main>
  );
} 