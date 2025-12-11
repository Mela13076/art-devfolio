import { notFound } from 'next/navigation'
import {projects} from '@/contents/projects'
export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
    const { slug } = await params;
    const project = projects.find(proj => proj.slug === slug);
    if (!project) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">ProjectPage</h1>
    </main>
  )
}