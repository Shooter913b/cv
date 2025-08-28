'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  Users,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import TechPill from '@/components/ui/TechPill';
import { ProjectData } from '@/lib/projects';

interface ProjectsClientProps {
  projects: ProjectData[];
}

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Featured projects get the full card treatment
  if (project.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="group h-full overflow-hidden hover:shadow-neon-sm transition-all duration-300">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />

            {/* Status badge */}
            <div className="absolute top-4 left-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                  project.status === 'active'
                    ? 'bg-blue-500/45 text-blue-300 border border-blue-500/55'
                    : project.slug === 'techno-maniacs'
                      ? 'bg-purple-dark/45 border-2 border-purple-custom/55 techno-maniacs-light-text-debug'
                      : 'bg-purple-dark/45 text-purple-dark border-2 border-purple-custom/55'
                }`}
              >
                {project.status === 'active' ? 'In Development' : 'Completed'}
              </span>
            </div>

            {/* Featured badge */}
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/40">
                Featured
              </span>
            </div>

            {/* Links overlay */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
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
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 text-sm text-text-muted mb-3">
              <Calendar size={14} />
              <span>{project.period}</span>
            </div>

            <h3 className="text-xl font-heading font-bold text-text-base mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-text-muted mb-4 leading-relaxed">
              {project.summary}
            </p>

            {/* Impact metrics */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.impact.slice(0, 2).map((metric: string, i: number) => (
                <TechPill key={i} glow variant="purple" className="text-xs px-2 py-1">
                  {metric}
                </TechPill>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.slice(0, 3).map((tech: string) => (
                <TechPill key={tech} className="text-xs px-2 py-1">
                  {tech}
                </TechPill>
              ))}
              {project.stack.length > 3 && (
                <span className="text-text-muted text-xs px-2 py-1">
                  +{project.stack.length - 3} more
                </span>
              )}
            </div>

            {/* CTA */}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-200 font-medium"
            >
              View Case Study
              <ArrowRight size={16} />
            </Link>
          </div>
        </Card>
      </motion.div>
    );
  }

  // Additional projects get the expandable treatment
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={`group overflow-hidden hover:shadow-neon-sm transition-all duration-300 cursor-pointer`}
      >
        {isExpanded ? (
          // Expanded layout - optimized for small projects
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Thumbnail */}
              <div className="relative h-48 lg:h-64 lg:w-80 overflow-hidden rounded-lg flex-shrink-0">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />

                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      project.status === 'active'
                        ? 'bg-blue-500/45 text-blue-300 border border-blue-500/55'
                        : project.slug === 'techno-maniacs'
                          ? 'bg-purple-dark/45 border-2 border-purple-custom/55 techno-maniacs-light-text-debug'
                          : 'bg-purple-dark/45 text-purple-dark border-2 border-purple-custom/55'
                    }`}
                  >
                    {project.status === 'active'
                      ? 'In Development'
                      : 'Completed'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text-base mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-text-base mb-2">
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech: string) => (
                      <TechPill key={tech} className="text-xs px-2 py-1">
                        {tech}
                      </TechPill>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="font-semibold text-text-base mb-2">
                    Key Achievements
                  </h4>
                  <ul className="text-text-muted text-sm space-y-1">
                    {project.impact.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold text-text-base mb-2">
                    About This Project
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-200 font-medium"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-200 font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setIsExpanded(false);
                    }}
                    className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-all duration-200 font-medium"
                  >
                    <ChevronUp size={16} />
                    Collapse
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Collapsed layout - compact for small projects
          <div
            className="p-6 cursor-pointer"
            onClick={() => setIsExpanded(true)}
          >
            <div className="flex gap-4">
              {/* Thumbnail */}
              <div className="relative h-16 w-16 overflow-hidden rounded-lg flex-shrink-0">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-xs text-text-muted mb-1">
                  <Calendar size={12} />
                  <span>{project.period}</span>
                </div>

                <h3 className="text-lg font-heading font-bold text-text-base mb-1 truncate">
                  {project.title}
                </h3>

                <p className="text-text-muted text-sm line-clamp-2 mb-2">
                  {project.summary}
                </p>

                {/* Quick skills preview */}
                <div className="flex flex-wrap gap-1">
                  {project.stack.slice(0, 3).map((tech: string) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-surface/50 rounded text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-xs px-2 py-1 text-text-muted">
                      +{project.stack.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Expand indicator */}
              <div className="flex-shrink-0 flex items-center">
                <ChevronDown size={16} className="text-text-muted" />
              </div>
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <>
      <Header />
      <main className="relative pt-16">
        <Section
          title="Project Portfolio"
          subtitle="Software & Robotics Engineering"
          className="pt-12"
        >
          <div className="max-w-6xl mx-auto">
            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <div className="mb-16">
                <motion.h3
                  className="text-2xl font-heading font-bold text-text-base mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Featured Projects
                </motion.h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  {featuredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Other Projects */}
            <div>
              <motion.h3
                className="text-2xl font-heading font-bold text-text-base mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Additional Projects
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center py-16"
              >
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-text-base mb-2">
                    Coming Soon
                  </h4>
                  <p className="text-text-muted">
                    More projects are in development. Check back soon for
                    additional showcases of smaller projects and experiments.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center mt-16 pt-12 border-t border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-heading font-semibold text-text-base mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-text-muted mb-6 max-w-2xl mx-auto">
                I'm always working on new projects and looking for opportunities
                to create innovative solutions in robotics, software, and
                open-source hardware.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Get In Touch
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
