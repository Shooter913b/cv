'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechPillProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  onClick?: () => void;
  active?: boolean;
  variant?: 'default' | 'purple';
}

export default function TechPill({
  children,
  className,
  glow = false,
  onClick,
  active = false,
  variant = 'default',
}: TechPillProps) {
  const Component = onClick ? motion.button : motion.span;

  return (
    <Component
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      className={cn(
        variant === 'purple' ? 'impact-pill' : 'tech-pill',
        {
          'cursor-pointer': onClick,
          'hover:shadow-neon-sm': (glow || onClick) && variant === 'default',
          'hover:shadow-purple-sm': (glow || onClick) && variant === 'purple',
          'border-primary/50 bg-primary/20 shadow-neon-sm': active && variant === 'default',
          'border-purple/50 bg-purple/20 shadow-purple-sm': active && variant === 'purple',
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
