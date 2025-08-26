'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  children: ReactNode;
  index?: number;
  technologies?: string[];
  highlights?: string[];
}

interface TimelineProps {
  items: TimelineItemProps[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function TimelineItem({
  title,
  subtitle,
  period,
  location,
  children,
  index = 0,
  technologies = [],
  highlights = [],
}: TimelineItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative flex gap-8 pb-12 last:pb-0"
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
          className="timeline-dot flex-shrink-0"
        />
        <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-4" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="mb-4">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
            <div>
              <h3 className="text-xl font-heading font-bold text-text-base mb-1">
                {title}
              </h3>
              <p className="text-lg font-semibold text-primary mb-2">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-col lg:items-end text-sm text-text-muted">
              <span className="font-medium">{period}</span>
              {location && <span>{location}</span>}
            </div>
          </div>
        </div>

        <div className="mb-6 text-text-muted leading-relaxed">{children}</div>

        {highlights.length > 0 && (
          <ul className="list-none space-y-2 mb-6">
            {highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-text-muted">{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-surface/80 text-primary text-sm rounded-full border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Timeline({ items, className }: TimelineProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn('relative', className)}
    >
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} index={index} />
      ))}
    </motion.div>
  );
}

export { TimelineItem };
