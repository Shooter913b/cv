'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
  withDivider?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Section({
  id,
  title,
  subtitle,
  className,
  children,
  withDivider = true,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-20 lg:py-32 relative', className)}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {(title || subtitle) && (
            <motion.div variants={itemVariants} className="text-center mb-16">
              {subtitle && (
                <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
                  {subtitle}
                </p>
              )}
              {title && <h2 className="section-title">{title}</h2>}
              {withDivider && (
                <div className="neon-divider max-w-xs mx-auto mt-8" />
              )}
            </motion.div>
          )}

          <motion.div variants={itemVariants}>{children}</motion.div>
        </motion.div>
      </div>
    </section>
  );
}
