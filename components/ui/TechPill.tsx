'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechPillProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  onClick?: () => void;
  active?: boolean;
}

export default function TechPill({
  children,
  className,
  glow = false,
  onClick,
  active = false,
}: TechPillProps) {
  const Component = onClick ? motion.button : motion.span;

  return (
    <Component
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      className={cn(
        'tech-pill',
        {
          'cursor-pointer': onClick,
          'hover:shadow-neon-sm': glow || onClick,
          'border-primary/50 bg-primary/20 shadow-neon-sm': active,
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
