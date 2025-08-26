'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatProps {
  value: string | number;
  label: string;
  description?: string;
  accent?: boolean;
  className?: string;
}

export default function Stat({
  value,
  label,
  description,
  accent = false,
  className,
}: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn('text-center p-4', className)}
    >
      <div
        className={cn(
          'text-3xl md:text-4xl font-heading font-bold mb-2',
          accent ? 'text-accent glow-text' : 'text-primary glow-text'
        )}
      >
        {value}
      </div>
      <div className="text-text-base font-semibold mb-1">{label}</div>
      {description && (
        <div className="text-text-muted text-sm">{description}</div>
      )}
    </motion.div>
  );
}
