import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import TechPill from '@/components/ui/TechPill';
import Gallery from '@/components/ui/Gallery';
import { ExternalLink, Github, ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface ProjectData {
  title: string;
  slug: string;
  period: string;
  status: string;
  summary: string;
  description: string;
  role: string;
  teamSize: string;
  stack: string[];
  links: Record<string, string>;
  impact: string[];
  featured: boolean;
  image: string;
  gallery: Array<{
    type: 'image' | 'video';
    src: string;
    alt?: string;
    title?: string;
    description?: string;
  }>;
  tags: string[];
  seo?: {
    type: string;
    applicationCategory: string;
    operatingSystem: string;
  };
}

const projects = [
  'techno-maniacs',
  'comsafe',
  'open-source-intake',
  'linear-odo',
  'swerve-drive',
]; // Available projects

async function getProject(slug: string) {
  if (!projects.includes(slug)) {
    return null;
  }

  try {
    const projectsDirectory = join(process.cwd(), 'content/projects');
    const fullPath = join(projectsDirectory, `${slug}.mdx`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      frontMatter: data as ProjectData,
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getProject(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const { frontMatter } = project;

  return {
    title: `${frontMatter.title} - Projects`,
    description: frontMatter.description || frontMatter.summary,
    keywords: [...(frontMatter.stack || []), ...(frontMatter.tags || [])].join(
      ', '
    ),
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.description || frontMatter.summary,
      type: 'website',
      images: frontMatter.image ? [frontMatter.image] : [],
    },
  };
}

export async function generateStaticParams() {
  return projects.map(slug => ({
    slug,
  }));
}

const PlaceholderHero = ({ title }: { title: string }) => (
  <div className="relative h-64 bg-gradient-to-br from-surface/60 to-bg rounded-xl overflow-hidden border border-primary/20">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
    <svg
      className="absolute inset-0 w-full h-full opacity-10"
      viewBox="0 0 400 200"
    >
      {/* Blueprint grid */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="#00C8FF"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Stylized map with pins */}
      <g transform="translate(100, 50)">
        {/* Map base */}
        <rect
          x="0"
          y="0"
          width="200"
          height="100"
          fill="none"
          stroke="#00C8FF"
          strokeWidth="2"
          rx="8"
        />

        {/* Streets */}
        <path
          d="M 20 20 L 180 20 M 20 50 L 180 50 M 20 80 L 180 80"
          stroke="#00C8FF"
          strokeWidth="1"
          opacity="0.6"
        />
        <path
          d="M 50 0 L 50 100 M 100 0 L 100 100 M 150 0 L 150 100"
          stroke="#00C8FF"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Location pins */}
        <circle cx="75" cy="35" r="4" fill="#00C8FF" />
        <circle cx="125" cy="65" r="4" fill="#34D399" />
        <circle cx="160" cy="25" r="4" fill="#00C8FF" />
        <circle cx="40" cy="75" r="4" fill="#34D399" />

        {/* Pin stems */}
        <line
          x1="75"
          y1="35"
          x2="75"
          y2="45"
          stroke="#00C8FF"
          strokeWidth="2"
        />
        <line
          x1="125"
          y1="65"
          x2="125"
          y2="75"
          stroke="#34D399"
          strokeWidth="2"
        />
        <line
          x1="160"
          y1="25"
          x2="160"
          y2="35"
          stroke="#00C8FF"
          strokeWidth="2"
        />
        <line
          x1="40"
          y1="75"
          x2="40"
          y2="85"
          stroke="#34D399"
          strokeWidth="2"
        />
      </g>
    </svg>

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <h3 className="text-2xl font-heading font-bold text-text-base mb-2">
          {title}
        </h3>
        <p className="text-text-muted text-sm">Interactive Demo Available</p>
      </div>
    </div>
  </div>
);

const DemoCredentials = () => (
  <Card className="border-accent/30 bg-accent/5 p-6 mb-8">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <AlertCircle className="text-accent" size={24} />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-heading font-semibold text-text-base mb-3">
          Demo Credentials
        </h4>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <div>
            <span className="text-text-muted text-sm block">Username:</span>
            <code className="text-accent font-mono text-sm bg-accent/10 px-2 py-1 rounded">
              infant.elfrick@gmail.com
            </code>
          </div>
          <div>
            <span className="text-text-muted text-sm block">Password:</span>
            <code className="text-accent font-mono text-sm bg-accent/10 px-2 py-1 rounded">
              password
            </code>
          </div>
        </div>
        <p className="text-text-muted text-sm">
          <strong>Security Notice:</strong> These are demo-only credentials.
          Rotate or remove in production deployments.
        </p>
      </div>
    </div>
  </Card>
);

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  const { frontMatter, content } = project;

  // Image paths are now correct in MDX files, no fixing needed
  const fixedImage = frontMatter.image || null;
  const fixedGallery = frontMatter.gallery || [];

  // Generate JSON-LD for SEO
  const jsonLd = frontMatter.seo
    ? {
        '@context': 'https://schema.org',
        '@type': frontMatter.seo.type,
        name: frontMatter.title,
        description: frontMatter.description || frontMatter.summary,
        applicationCategory: frontMatter.seo.applicationCategory,
        operatingSystem: frontMatter.seo.operatingSystem,
        url: `https://your-domain.com/projects/${frontMatter.slug}`,
        creator: {
          '@type': 'Person',
          name: 'Infant Elfrick Gnanasusairaj',
        },
        dateCreated: frontMatter.period,
        programmingLanguage: frontMatter.stack,
      }
    : null;

  // Convert links object to array format for easier handling
  const linksArray = frontMatter.links
    ? Object.entries(frontMatter.links)
        .filter(
          ([_, url]) => url && typeof url === 'string' && url.trim()
        ) // Filter out empty/null URLs
        .map(([key, url]) => ({
          type: key,
          href: url,
          label:
            key === 'repo'
              ? 'Repository'
              : key === 'cad'
                ? 'CAD Files'
                : key === 'guide'
                  ? 'Build Guide'
                  : key === 'demo'
                    ? 'Demo'
                    : key === 'youtube'
                      ? 'YouTube'
                      : key === 'robot_reveal'
                        ? 'Robot Reveal'
                        : key.charAt(0).toUpperCase() + key.slice(1),
        }))
    : [];

  // For Techno Maniacs, prioritize the robot reveal video as primary
  const primaryLink =
    frontMatter.slug === 'techno-maniacs'
      ? linksArray.find(link => link.type === 'robot_reveal') ||
        linksArray.find(link => link.type === 'demo')
      : linksArray.find(link => link.type === 'demo') ||
        linksArray.find(link => link.type === 'cad') ||
        linksArray.find(link => link.type === 'repo') ||
        linksArray[0] ||
        null;

  const secondaryLink =
    frontMatter.slug === 'techno-maniacs'
      ? linksArray.find(link => link.type === 'youtube') ||
        linksArray.find(link => link.type === 'demo')
      : linksArray.find(link => link.type === 'code') ||
        linksArray.find(link => link.type === 'guide') ||
        linksArray.find(link => link.type === 'github') ||
        null;

  return (
    <>
      <Header />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <main className="relative pt-16">
        {/* Hero Section */}
        <Section className="pt-12 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Projects
            </Link>

            {/* Project Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted mb-4">
                <span>{frontMatter.period}</span>
                <span className="w-1 h-1 bg-primary rounded-full" />
                <span>{frontMatter.role}</span>
                <span className="w-1 h-1 bg-primary rounded-full" />
                <span>Team of {frontMatter.teamSize}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    frontMatter.status === 'completed'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}
                >
                  {frontMatter.status === 'completed'
                    ? 'Completed'
                    : 'In Progress'}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-heading font-bold text-text-base mb-4">
                {frontMatter.title}
              </h1>

              <p className="text-xl text-text-muted leading-relaxed mb-8">
                {frontMatter.description || frontMatter.summary}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {primaryLink && primaryLink.href && primaryLink.label && (
                  <a
                    href={primaryLink.href}
                    target={
                      primaryLink.href && primaryLink.href.startsWith('http') ? '_blank' : undefined
                    }
                    rel={
                      primaryLink.href && primaryLink.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="btn-primary inline-flex items-center gap-2 group"
                  >
                    <ExternalLink
                      size={16}
                      className="group-hover:scale-110 transition-transform"
                    />
                    {primaryLink.label}
                  </a>
                )}

                {secondaryLink && secondaryLink.href && secondaryLink.type && secondaryLink.label && (
                  <a
                    href={secondaryLink.href}
                    target={
                      secondaryLink.href &&
                      secondaryLink.href.startsWith('http')
                        ? '_blank'
                        : undefined
                    }
                    rel={
                      secondaryLink.href &&
                      secondaryLink.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    {secondaryLink.type === 'github' ||
                    secondaryLink.type === 'code' ? (
                      <Github size={16} />
                    ) : secondaryLink.type === 'cad' ? (
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
                    ) : null}
                    {secondaryLink.label}
                  </a>
                )}

                {/* Additional buttons for Techno Maniacs */}
                {frontMatter.slug === 'techno-maniacs' &&
                  (frontMatter.links as any)?.github && (
                    <a
                      href={(frontMatter.links as any).github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}

                {frontMatter.slug === 'techno-maniacs' && (
                  <a
                    href="/cad"
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

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {(frontMatter.stack || []).map(tech => (
                  <TechPill key={tech} glow>
                    {tech}
                  </TechPill>
                ))}
              </div>
            </div>

            {/* Project Image/Placeholder */}
            <div className="mb-12">
              {fixedImage ? (
                <img
                  src={fixedImage}
                  alt={`${frontMatter.title || 'Project'} screenshot`}
                  className="w-full h-64 md:h-96 object-cover rounded-xl border border-primary/20"
                />
              ) : (
                <PlaceholderHero
                  title={
                    frontMatter.title
                      ? frontMatter.title.split('—')[0]
                      : 'Project'
                  }
                />
              )}
            </div>

            {/* Impact Metrics */}
            {frontMatter.impact && Array.isArray(frontMatter.impact) && (
              <div className="grid sm:grid-cols-3 gap-4 mb-12">
                {frontMatter.impact.map((metric, index) => (
                  <Card key={index} className="text-center p-4">
                    <div className="stat-badge mx-auto">{metric}</div>
                  </Card>
                ))}
              </div>
            )}

            {/* Demo Credentials for ComSafe */}
            {frontMatter.slug === 'comsafe' && <DemoCredentials />}

            {/* Gallery Section */}
            {fixedGallery && fixedGallery.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-text-base mb-6">
                  Gallery
                </h2>
                <Gallery items={fixedGallery} columns={3} />
              </div>
            )}

            {/* Project Content */}
            <div className="prose prose-invert max-w-none">
              <div
                className="[&>h2]:text-2xl [&>h2]:font-heading [&>h2]:font-bold [&>h2]:text-text-base [&>h2]:mt-12 [&>h2]:mb-6 
                             [&>h3]:text-xl [&>h3]:font-heading [&>h3]:font-semibold [&>h3]:text-text-base [&>h3]:mt-8 [&>h3]:mb-4
                             [&>p]:text-text-muted [&>p]:leading-relaxed [&>p]:mb-6
                             [&>ul]:text-text-muted [&>ul]:mb-6 [&>li]:mb-2
                             [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:italic
                             [&>code]:bg-surface [&>code]:text-primary [&>code]:px-2 [&>code]:py-1 [&>code]:rounded
                             [&>strong]:text-text-base"
              >
                <MDXRemote
                  source={content}
                  components={{
                    Gallery: (props: any) => <Gallery {...props} items={fixedGallery} />,
                  }}
                />
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
