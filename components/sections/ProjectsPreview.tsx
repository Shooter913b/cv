'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import TechPill from '@/components/ui/TechPill';
import { cn } from '@/lib/utils';
import { ProjectData } from '@/lib/projects';

interface ProjectsPreviewProps {
  projects: ProjectData[];
}

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={cn(
        'grid lg:grid-cols-2 gap-8 lg:gap-12 items-center',
        !isEven && 'lg:grid-flow-col-dense'
      )}
    >
      {/* Image */}
      <div className={cn('relative', !isEven && 'lg:col-start-2')}>
        <div className="project-card group p-0 overflow-hidden">
          <div className="relative h-64 lg:h-80">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />

            {/* Status badge */}
            <div className="absolute top-4 left-4">
              <span
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-medium border',
                  project.status === 'active'
                    ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                    : 'bg-green-500/10 text-green-400 border-green-500/30'
                )}
              >
                {project.status === 'active' ? 'In Development' : 'Completed'}
              </span>
            </div>

            {/* Links overlay */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex gap-2">
                {(project.links.github || project.links.code) && (
                  <a
                    href={project.links.github || project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-surface/80 backdrop-blur-sm rounded-lg text-text-base hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-surface/80 backdrop-blur-sm rounded-lg text-text-base hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-surface/80 backdrop-blur-sm rounded-lg text-text-base hover:text-primary transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                )}
                {project.links.cad && (
                  <a
                    href={project.links.cad}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-surface/80 backdrop-blur-sm rounded-lg text-text-base hover:text-primary transition-colors"
                    title="CAD Files"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      {/* Solid hexagon */}
                      <path
                        d="M12 2L20 7L20 17L12 22L4 17L4 7Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={cn('space-y-6', !isEven && 'lg:col-start-1')}>
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-sm text-text-muted">
            <span>{project.period}</span>
            <span className="w-1 h-1 bg-primary rounded-full" />
            <span className="text-primary">Featured Project</span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text-base">
            {project.title}
          </h3>
        </div>

        <p className="text-text-muted leading-relaxed">{project.summary}</p>

        {/* Impact metrics */}
        <div className="flex flex-wrap gap-2">
          {project.impact.map((metric: string, i: number) => (
            <TechPill key={i} glow variant="purple">
              {metric}
            </TechPill>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech: string) => (
            <TechPill key={tech}>{tech}</TechPill>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="btn-primary inline-flex items-center gap-2 group"
          >
            View Details
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          {(project.links.github || project.links.code) && (
            <a
              href={project.links.github || project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.links.cad && (
            <a
              href={
                project.slug === 'techno-maniacs' ? '/cad' : project.links.cad
              }
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {/* Solid hexagon */}
                <path
                  d="M12 2L20 7L20 17L12 22L4 17L4 7Z"
                  fill="currentColor"
                />
              </svg>
              CAD
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPreview({ projects }: ProjectsPreviewProps) {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Engineering Excellence"
      className="bg-surface/20"
    >
      <div className="space-y-16 lg:space-y-24">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      {/* View all projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-16"
      >
        <div className="neon-divider max-w-xs mx-auto mb-8" />

        <Link
          href="/projects"
          className="btn-secondary inline-flex items-center gap-2 group"
        >
          View All Projects
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>

        <p className="text-text-muted text-sm mt-4">
          Explore the complete portfolio of open-source robotics projects
        </p>
      </motion.div>
    </Section>
  );
}
