import Link from 'next/link';

export default function ExperienceSection() {
  return (
    <section aria-labelledby="experience-highlights" className="py-20 container mx-auto px-6">
      <h2 id="experience-highlights" className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Experience Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
        <article className="bg-white dark:bg-dark/80 rounded-lg shadow-md p-6 border-primary">
          <h3 className="text-xl font-semibold mb-2">Backend development at GBCS</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Led a backend team modernizing 100+ REST APIs and contributed to a Firebase-to-Azure migration.
          </p>
        </article>
        <article className="bg-white dark:bg-dark/80 rounded-lg shadow-md p-6 border-primary">
          <h3 className="text-xl font-semibold mb-2">AI tooling at CodePath</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Built and improved an AI-assisted application review pipeline tested across 500+ applications, with scores and feedback for human reviewers.
          </p>
        </article>
      </div>
      <div className="text-center mt-12">
        <Link href="/about" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
          Learn More About Me
        </Link>
      </div>
    </section>
  );
}
