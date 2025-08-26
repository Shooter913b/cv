'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import TechPill from '@/components/ui/TechPill';

const techStack = [
  'Java',
  'Python',
  'C++',
  'TypeScript',
  'React',
  'Next.js',
  'CAD/CAM',
  'Onshape',
  'Unity',
  'PyTorch',
  'OpenCV',
];

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

// SVG animation for mecanum wheel construction and rotation
const MecanumWheelMotif = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [constructionComplete, setConstructionComplete] = useState(false);

  // 12 rollers for more realistic mecanum wheel like goBILDA
  const numRollers = 12;
  const rollerDistance = 60;

  useEffect(() => {
    // Construction completes after all rollers are placed
    const timer = setTimeout(() => {
      setConstructionComplete(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-full h-96 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width="400"
        height="300"
        viewBox="0 0 400 300"
        className="w-full h-full max-w-md"
      >
        <defs>
          {/* Enhanced gradients for realistic depth */}
          <radialGradient id="hubGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#2D3748" />
            <stop offset="50%" stopColor="#1A202C" />
            <stop offset="100%" stopColor="#0B0F14" />
          </radialGradient>

          <linearGradient
            id="rollerGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#4A5568" />
            <stop offset="30%" stopColor="#2D3748" />
            <stop offset="70%" stopColor="#1A202C" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Enhanced filters for realistic effects */}
          <filter id="hubShadow">
            <feDropShadow
              dx="2"
              dy="2"
              stdDeviation="4"
              floodColor="#00C8FF"
              floodOpacity="0.4"
            />
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="8"
              floodColor="#00C8FF"
              floodOpacity="0.2"
            />
          </filter>

          <filter id="rollerShadow">
            <feDropShadow
              dx="1"
              dy="1"
              stdDeviation="3"
              floodColor="#00C8FF"
              floodOpacity="0.3"
            />
          </filter>

          <filter id="glowFilter">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Master rotation group - entire wheel rotates as one unit */}
        <motion.g
          animate={
            constructionComplete
              ? {
                  rotate: 360,
                }
              : {}
          }
          transition={
            constructionComplete
              ? {
                  duration: isHovered ? 1.5 : 2, // Much faster rotation: 1.5-2 seconds
                  ease: 'linear',
                  repeat: Infinity,
                  delay: 0.5,
                }
              : {}
          }
          style={{ transformOrigin: '200px 150px' }}
        >
          {/* Central hub (rotates with wheel) */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Main hub body - solid design like real mecanum wheels */}
            <circle
              cx="200"
              cy="150"
              r="32"
              fill="url(#hubGradient)"
              stroke="#00C8FF"
              strokeWidth="2"
              filter="url(#hubShadow)"
            />

            {/* Hub mounting plate (outer ring) */}
            <circle
              cx="200"
              cy="150"
              r="26"
              fill="none"
              stroke="#00C8FF"
              strokeWidth="1"
              opacity="0.6"
            />

            {/* Central mounting hole */}
            <circle
              cx="200"
              cy="150"
              r="8"
              fill="#0B0F14"
              stroke="#00C8FF"
              strokeWidth="1"
              opacity="0.9"
            />

            {/* Motor mounting bolts (like real hardware) */}
            {Array.from({ length: 4 }, (_, i) => {
              const angle = i * 90 * (Math.PI / 180);
              const boltX = 200 + Math.cos(angle) * 20;
              const boltY = 150 + Math.sin(angle) * 20;

              return (
                <circle
                  key={i}
                  cx={boltX}
                  cy={boltY}
                  r="2.5"
                  fill="#4A5568"
                  stroke="#00C8FF"
                  strokeWidth="0.5"
                />
              );
            })}

            {/* Hub surface details */}
            <circle
              cx="200"
              cy="150"
              r="15"
              fill="none"
              stroke="#00C8FF"
              strokeWidth="0.5"
              opacity="0.4"
            />
          </motion.g>

          {/* Curved mounting arms like your red drawing */}
          {Array.from({ length: numRollers }, (_, i) => {
            const baseAngle = i * 30 * (Math.PI / 180);

            // Dual hub connection points for two spokes (offset a bit)
            const hubInnerX = 200 + Math.cos(baseAngle + 0.12) * 32;
            const hubInnerY = 150 + Math.sin(baseAngle + 0.12) * 32;
            const hubOuterX = 200 + Math.cos(baseAngle - 0.12) * 32;
            const hubOuterY = 150 + Math.sin(baseAngle - 0.12) * 32;

            const rollerCenterX = 200 + Math.cos(baseAngle) * rollerDistance;
            const rollerCenterY = 150 + Math.sin(baseAngle) * rollerDistance;

            // Calculate connection points to roller ends (45° tilt)
            const rollerTiltAngle = baseAngle + Math.PI / 4; // 45° tilt
            const rollerSideOffset = 8;

            // Two connection points on roller ends like your drawing
            const rollerInnerX =
              rollerCenterX +
              Math.cos(rollerTiltAngle + Math.PI / 2) * rollerSideOffset;
            const rollerInnerY =
              rollerCenterY +
              Math.sin(rollerTiltAngle + Math.PI / 2) * rollerSideOffset;

            const rollerOuterX =
              rollerCenterX +
              Math.cos(rollerTiltAngle - Math.PI / 2) * rollerSideOffset;
            const rollerOuterY =
              rollerCenterY +
              Math.sin(rollerTiltAngle - Math.PI / 2) * rollerSideOffset;

            // Elbow points near hub for 2-segment spokes (one per spoke)
            const elbowDistance = 42; // just outside hub ring
            const elbowInnerAngle = baseAngle + 0.22;
            const elbowOuterAngle = baseAngle - 0.22;
            const elbowInnerX = 200 + Math.cos(elbowInnerAngle) * elbowDistance;
            const elbowInnerY = 150 + Math.sin(elbowInnerAngle) * elbowDistance;
            const elbowOuterX = 200 + Math.cos(elbowOuterAngle) * elbowDistance;
            const elbowOuterY = 150 + Math.sin(elbowOuterAngle) * elbowDistance;

            // Consistent mapping around wheel: make OUTER end the "top" spoke
            const topHubX = hubOuterX;
            const topHubY = hubOuterY;
            const bottomHubX = hubInnerX;
            const bottomHubY = hubInnerY;
            const topElbowAngle = elbowOuterAngle;
            const topElbowDistance = 52; // make first segment longer for top spoke
            const topElbowX = 200 + Math.cos(topElbowAngle) * topElbowDistance;
            const topElbowY = 150 + Math.sin(topElbowAngle) * topElbowDistance;
            const topEndX = rollerOuterX;
            const topEndY = rollerOuterY;
            const bottomEndX = rollerInnerX;
            const bottomEndY = rollerInnerY;
            // Control point to curve bottom spoke inward toward center
            const bottomControlRadius = (elbowDistance + rollerDistance) * 0.55;
            const bottomControlX =
              200 + Math.cos(baseAngle) * bottomControlRadius;
            const bottomControlY =
              150 + Math.sin(baseAngle) * bottomControlRadius;

            return (
              <motion.g
                key={`spoke-${i}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 1.4 + i * 0.12,
                  duration: 0.3,
                  ease: 'easeOut',
                }}
              >
                {/* Top spoke: longer first segment (hub -> elbow) then to top roller end */}
                <line
                  x1={topHubX}
                  y1={topHubY}
                  x2={topElbowX}
                  y2={topElbowY}
                  stroke="#00C8FF"
                  strokeWidth="2.5"
                  opacity="0.9"
                  strokeLinecap="round"
                />
                <line
                  x1={topElbowX}
                  y1={topElbowY}
                  x2={topEndX}
                  y2={topEndY}
                  stroke="#00C8FF"
                  strokeWidth="2.5"
                  opacity="0.9"
                  strokeLinecap="round"
                />

                {/* Bottom spoke: gentle inward curve from hub to bottom roller end */}
                <path
                  d={`M ${bottomHubX} ${bottomHubY} Q ${bottomControlX} ${bottomControlY} ${bottomEndX} ${bottomEndY}`}
                  stroke="#00C8FF"
                  strokeWidth="2.5"
                  fill="none"
                  opacity="0.9"
                  strokeLinecap="round"
                />

                {/* Elbow joint visual for top spoke */}
                <circle
                  cx={topElbowX}
                  cy={topElbowY}
                  r="1.6"
                  fill="#4A5568"
                  stroke="#00C8FF"
                  strokeWidth="0.6"
                />

                {/* Hub mounting points (two offsets) */}
                <circle
                  cx={hubInnerX}
                  cy={hubInnerY}
                  r="2"
                  fill="#1A365D"
                  stroke="#00C8FF"
                  strokeWidth="0.8"
                  opacity="0.9"
                />
                <circle
                  cx={hubOuterX}
                  cy={hubOuterY}
                  r="2"
                  fill="#1A365D"
                  stroke="#00C8FF"
                  strokeWidth="0.8"
                  opacity="0.9"
                />

                {/* Connection points where spokes touch rollers */}
                <circle
                  cx={rollerInnerX}
                  cy={rollerInnerY}
                  r="1.5"
                  fill="#00C8FF"
                  stroke="#FFFFFF"
                  strokeWidth="0.5"
                  opacity="0.9"
                />

                <circle
                  cx={rollerOuterX}
                  cy={rollerOuterY}
                  r="1.5"
                  fill="#00C8FF"
                  stroke="#FFFFFF"
                  strokeWidth="0.5"
                  opacity="0.9"
                />

                {/* Visual connection indicators - small attachment plates */}
                <rect
                  x={rollerInnerX - 2}
                  y={rollerInnerY - 1}
                  width="4"
                  height="2"
                  fill="#1A365D"
                  stroke="#00C8FF"
                  strokeWidth="0.3"
                  opacity="0.8"
                />

                <rect
                  x={rollerOuterX - 2}
                  y={rollerOuterY - 1}
                  width="4"
                  height="2"
                  fill="#1A365D"
                  stroke="#00C8FF"
                  strokeWidth="0.3"
                  opacity="0.8"
                />
              </motion.g>
            );
          })}

          {/* Sequential roller formation - all static once placed */}
          {Array.from({ length: numRollers }, (_, index) => {
            const baseAngle = index * 30 * (Math.PI / 180); // 30° spacing for 12 rollers
            const rollerX = 200 + Math.cos(baseAngle) * rollerDistance;
            const rollerY = 150 + Math.sin(baseAngle) * rollerDistance;

            // Left-slant mecanum: rollers angled down-right when viewed from deep side
            const rollerTiltAngle = baseAngle * (180 / Math.PI) + 45;

            return (
              <motion.g
                key={index}
                initial={{ scale: 0, opacity: 0, y: -30 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.2, // All rollers assemble simultaneously
                  duration: 0.4,
                  ease: [0.25, 0.8, 0.5, 1], // Custom ease for realistic drop
                }}
              >
                {/* Static roller - cylindrical like real mecanum wheels */}
                <g>
                  {/* Main roller body - more cylindrical like real hardware */}
                  <ellipse
                    cx={rollerX}
                    cy={rollerY}
                    rx="16"
                    ry="8"
                    fill="url(#rollerGradient)"
                    stroke="#00C8FF"
                    strokeWidth="1"
                    opacity="0.9"
                    transform={`rotate(${rollerTiltAngle} ${rollerX} ${rollerY})`}
                    filter="url(#rollerShadow)"
                  />

                  {/* Roller surface/tread pattern */}
                  <ellipse
                    cx={rollerX}
                    cy={rollerY}
                    rx="14"
                    ry="6"
                    fill="none"
                    stroke="#00C8FF"
                    strokeWidth="0.5"
                    opacity="0.4"
                    transform={`rotate(${rollerTiltAngle} ${rollerX} ${rollerY})`}
                  />

                  {/* Simple mounting brackets (less cluttered) */}
                  <g>
                    {/* Side brackets */}
                    <rect
                      x={rollerX - 8}
                      y={rollerY - 9}
                      width="16"
                      height="3"
                      fill="#4A5568"
                      stroke="#00C8FF"
                      strokeWidth="0.5"
                      opacity="0.8"
                      rx="1"
                      transform={`rotate(${rollerTiltAngle} ${rollerX} ${rollerY})`}
                    />

                    <rect
                      x={rollerX - 8}
                      y={rollerY + 6}
                      width="16"
                      height="3"
                      fill="#4A5568"
                      stroke="#00C8FF"
                      strokeWidth="0.5"
                      opacity="0.8"
                      rx="1"
                      transform={`rotate(${rollerTiltAngle} ${rollerX} ${rollerY})`}
                    />

                    {/* Mounting bolts - simplified */}
                    {[-6, 6].map((offsetX, boltIndex) => (
                      <circle
                        key={boltIndex}
                        cx={rollerX + offsetX}
                        cy={rollerY - 7}
                        r="1"
                        fill="#666"
                        stroke="#00C8FF"
                        strokeWidth="0.3"
                        transform={`rotate(${rollerTiltAngle} ${rollerX} ${rollerY})`}
                      />
                    ))}

                    {[-6, 6].map((offsetX, boltIndex) => (
                      <circle
                        key={`bottom-${boltIndex}`}
                        cx={rollerX + offsetX}
                        cy={rollerY + 7}
                        r="1"
                        fill="#666"
                        stroke="#00C8FF"
                        strokeWidth="0.3"
                        transform={`rotate(${rollerTiltAngle} ${rollerX} ${rollerY})`}
                      />
                    ))}
                  </g>
                </g>
              </motion.g>
            );
          })}
        </motion.g>

        {/* Outer structural ring */}
        <motion.circle
          cx="200"
          cy="150"
          r="78"
          fill="none"
          stroke="#00C8FF"
          strokeWidth="1.5"
          opacity="0.4"
          strokeDasharray="8,4"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 0.4,
          }}
          transition={{
            delay: 4.2,
            duration: 0.6,
            ease: 'easeOut',
          }}
        />

        {/* Directional movement indicators (show mecanum capabilities) */}
        {constructionComplete && (
          <>
            {/* Forward/Back movement arrows */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 5.5, duration: 0.5 }}
            >
              <path
                d="M 180 120 L 185 115 L 190 120 L 185 125 Z"
                fill="#34D399"
                opacity="0.8"
              />
              <path
                d="M 210 180 L 215 175 L 220 180 L 215 185 Z"
                fill="#34D399"
                opacity="0.8"
                transform="rotate(180 215 180)"
              />
            </motion.g>

            {/* Side strafe arrows (unique to mecanum) */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 6, duration: 0.5 }}
            >
              <path
                d="M 160 145 L 155 150 L 160 155 L 165 150 Z"
                fill="#00C8FF"
                opacity="0.8"
              />
              <path
                d="M 240 145 L 235 150 L 240 155 L 245 150 Z"
                fill="#00C8FF"
                opacity="0.8"
                transform="rotate(180 240 150)"
              />
            </motion.g>

            {/* Diagonal arrows (showing omnidirectional capability) */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 6.5, duration: 0.5 }}
            >
              <path
                d="M 170 130 L 165 125 L 175 125 L 170 135 Z"
                fill="#00C8FF"
                opacity="0.6"
              />
              <path
                d="M 230 170 L 225 165 L 235 165 L 230 175 Z"
                fill="#00C8FF"
                opacity="0.6"
                transform="rotate(180 230 170)"
              />
            </motion.g>
          </>
        )}

        {/* Enhanced hover effects */}
        {isHovered && constructionComplete && (
          <>
            {/* Pulsing omnidirectional glow */}
            <motion.circle
              cx="200"
              cy="150"
              r="95"
              fill="none"
              stroke="#00C8FF"
              strokeWidth="1"
              opacity="0.3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Motion blur lines (showing speed increase) */}
            {Array.from({ length: 8 }, (_, i) => (
              <motion.line
                key={i}
                x1="110"
                y1={125 + i * 6}
                x2="290"
                y2={125 + i * 6}
                stroke="#00C8FF"
                strokeWidth="0.8"
                opacity="0.3"
                strokeDasharray="6,4"
                initial={{ x1: 110, x2: 110 }}
                animate={{
                  x1: [110, 290],
                  x2: [110, 290],
                }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.8,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}
          </>
        )}
      </svg>
    </div>
  );
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, I'm Elfrick! Software & robotics engineer{' '}
                <span className="text-primary glow-text">
                  building open source
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-text-muted leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                UW–Madison CS + Aerospace · FTC World Top-50 · Open-source
                innovation
              </motion.p>
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-text-muted font-medium">Core Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                  >
                    <TechPill glow>{tech}</TechPill>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                See Projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="text-text-muted text-sm">Connect:</span>
              {socialLinks.map((link, index) => (
                <motion.a
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.3 }}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Mecanum Wheel Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative"
          >
            <MecanumWheelMotif />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
