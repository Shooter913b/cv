import { Metadata } from 'next';
import ProjectsClient from '@/components/ProjectsClient';
import { getAllProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects - Infant Elfrick Gnanasusairaj',
  description:
    'Open-source software and robotics projects including FTC systems, precision engineering, and innovative solutions.',
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return <ProjectsClient projects={projects} />;
}
