'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const hoverVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

export default function Card({
  children,
  className,
  hover = true,
  glow = false,
}: CardProps) {
  return (
    <motion.div
      variants={hover ? hoverVariants : cardVariants}
      initial={hover ? 'rest' : 'hidden'}
      whileInView={hover ? undefined : 'visible'}
      whileHover={hover ? 'hover' : undefined}
      viewport={hover ? undefined : { once: true }}
      className={cn(
        'card',
        {
          'hover:shadow-neon': glow,
        },
        className
      )}
    >
      {children}
    </motion.div>
  );
}
