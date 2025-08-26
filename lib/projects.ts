import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface ProjectData {
  title: string;
  slug: string;
  period: string;
  status: string;
  summary: string;
  description: string;
  role: string;
  teamSize: string | number;
  stack: string[];
  links: Record<string, string>;
  impact: string[];
  featured: boolean;
  image: string;
  gallery?: Array<{
    type: 'image' | 'video';
    src: string;
    alt?: string;
    title?: string;
    description?: string;
    link?: string;
  }>;
  tags: string[];
  seo?: {
    type: string;
    applicationCategory: string;
    operatingSystem: string;
  };
}

const projectSlugs = [
  'techno-maniacs',
  'comsafe',
  'open-source-intake',
  'linear-odo',
  'swerve-drive',
];

export async function getAllProjects(): Promise<ProjectData[]> {
  const projects: ProjectData[] = [];

  for (const slug of projectSlugs) {
    try {
      const projectsDirectory = join(process.cwd(), 'content/projects');
      const fullPath = join(projectsDirectory, `${slug}.mdx`);
      const fileContents = readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      // Add slug to the data
      const projectData = {
        ...data,
        slug,
      } as ProjectData;

      projects.push(projectData);
    } catch (error) {
      console.error(`Error loading project ${slug}:`, error);
    }
  }

  // Sort by featured first, then by period (newest first)
  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
}

export async function getFeaturedProjects(): Promise<ProjectData[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter(project => project.featured);
}

export async function getProject(slug: string): Promise<ProjectData | null> {
  try {
    const projectsDirectory = join(process.cwd(), 'content/projects');
    const fullPath = join(projectsDirectory, `${slug}.mdx`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      ...data,
      slug,
    } as ProjectData;
  } catch (error) {
    console.error(`Error loading project ${slug}:`, error);
    return null;
  }
}

export function getProjectSlugs(): string[] {
  return projectSlugs;
}
