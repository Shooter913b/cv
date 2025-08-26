'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/shooter913b',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/elfrickg/',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:infant.elfrick@gmail.com',
    icon: Mail,
  },
];

const projectLinks = [
  {
    name: 'Open Source Intake',
    href: '/projects/open-source-intake',
  },
  {
    name: 'Linear Odometry',
    href: '/projects/linear-odo',
  },
  {
    name: 'FTC Resources',
    href: 'https://github.com/yourusername/ftc-resources',
    external: true,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 bg-surface/40 border-t border-primary/20">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-bold text-primary">
              Open-Source Ethos
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Robotics advancing through shared knowledge. Building tools that
              empower the next generation of engineers and makers worldwide.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="text-text-muted hover:text-primary transition-colors duration-200 p-2 hover:bg-primary/10 rounded-lg"
                  aria-label={link.name}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-heading font-semibold text-text-base">
              Featured Projects
            </h3>
            <ul className="space-y-2">
              {projectLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-text-muted hover:text-primary transition-colors duration-200 text-sm inline-flex items-center gap-2 group"
                  >
                    {link.name}
                    {link.external && (
                      <ExternalLink
                        size={12}
                        className="opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack & Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-heading font-semibold text-text-base">
              This Portfolio
            </h3>
            <div className="space-y-2 text-sm text-text-muted">
              <p>Built with modern web technologies:</p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map(
                  tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-surface/80 text-primary text-xs rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-primary/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <span>© {currentYear} Infant Elfrick Gnanasusairaj</span>
              <span className="text-primary">•</span>
              <span className="flex items-center gap-1">
                Built with{' '}
                <Heart size={12} className="text-accent fill-current" />
              </span>
            </div>

            <div className="flex items-center gap-6 text-text-muted text-sm">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Resume
              </a>
              <a
                href="mailto:infant.elfrick@gmail.com"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Neon bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
}
