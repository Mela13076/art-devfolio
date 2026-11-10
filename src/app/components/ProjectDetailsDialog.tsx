"use client";

import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import type { Project } from '@/types';
import ProjectLinks from './ProjectLinks';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetailsDialog({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, []);

  const sections = [
    { title: 'The problem', text: project.details?.problem },
    { title: 'What I built', text: project.details?.contribution },
    { title: 'Technical decisions', text: project.details?.technicalDecision },
  ].filter(section => section.text?.trim());

  return createPortal(
    <dialog ref={dialogRef} aria-labelledby={titleId}
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-3xl max-h-[90dvh] overflow-y-auto rounded-xl border-primary bg-white text-gray-900 dark:bg-dark dark:text-white p-0 shadow-xl backdrop:bg-black/70">
      <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-dark p-6">
        <div>
          <h2 id={titleId} className="text-2xl font-bold">{project.title}</h2>
          {project.details?.status && <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.details.status}</p>}
        </div>
        <button type="button" autoFocus onClick={onClose} aria-label={`Close ${project.title} details`}
          className="shrink-0 rounded-lg px-3 py-2 text-xl hover:bg-gray-100 dark:hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-primary">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="space-y-6 p-6">
        {project.image && <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image src={project.image} alt={`${project.title} screenshot`} fill className="object-contain" sizes="(max-width: 768px) 100vw, 768px" />
        </div>}
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>
        {sections.map(section => <section key={section.title}>
          <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
          <p className="leading-relaxed text-gray-600 dark:text-gray-300">{section.text}</p>
        </section>)}
        <section>
          <h3 className="text-lg font-semibold mb-3">Technologies</h3>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map(tech => <li key={tech} className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm">{tech}</li>)}
          </ul>
        </section>
        <ProjectLinks {...project} />
      </div>
    </dialog>,
    document.body,
  );
}
