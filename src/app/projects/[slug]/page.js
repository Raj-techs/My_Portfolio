import { getProjectBySlug, projectsData } from '../../data/projectsData';
import ProjectDetailClient from './ProjectDetailClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.name} — Rajesh Puchakayal`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
}
