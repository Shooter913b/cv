'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Stat from '@/components/ui/Stat';
import Timeline from '@/components/ui/Timeline';

const keyExperiences = [
  {
    title: 'FTC Team Captain',
    subtitle: 'Techno Maniacs · Acton, MA',
    period: 'Sept 2018 – Present',
    location: 'Acton, MA',
    children: 'Led competitive robotics team to global success while mentoring students and engaging with the community.',
    highlights: [
      'Top-50 globally (7,000+ teams), #1 New England',
      'Earned 25+ awards including Think, Design, and Connect Awards',
      'Mentored 20+ students in Computer Programming, Computer Aided Design (CAD), and Engineering Principles',
      'Reached 5,000+ youth through outreach and community engagement',
    ],
    technologies: [
      'Java',
      'Android Studio',
      'CAD',
      'Onshape',
      '3D Printing',
      'OpenCV',
    ],
  },
  {
    title: 'Director of Encoder Development',
    subtitle: 'Princeton Apex Labs · Princeton, NJ',
    period: 'Aug 2024 – Present',
    location: 'Princeton, NJ',
    children: 'Leading research and development for high-precision encoder systems used in FTC robotics odometry.',
    highlights: [
      'Leading R&D for high-precision encoder systems for FTC odometry',
      'Designed manufacturable systems with comprehensive documentation',
      'Collaborating with manufacturing team for production feasibility',
    ],
    technologies: ['CAD/CAM', 'Fusion 360', 'Manufacturing', 'PCB Design'],
  },
];

const impactStats = [
  {
    icon: Award,
    value: '25+',
    label: 'Awards',
    description: 'Competition honors',
  },
  {
    icon: Users,
    value: '20+',
    label: 'Students',
    description: 'Mentored directly',
  },
  {
    icon: Target,
    value: 'Top-50',
    label: 'Global Rank',
    description: 'Out of 7,000+ teams',
  },
  {
    icon: Zap,
    value: '5,000+',
    label: 'Youth Reached',
    description: 'Through outreach',
  },
];

export default function ExperiencePreview() {
  return (
    <Section
      id="experience"
      title="Experience & Impact"
      subtitle="Leadership & Innovation"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Timeline items={keyExperiences} />
        </motion.div>

        {/* Right: Impact Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-heading font-bold text-text-base mb-6">
              Impact by Numbers
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="text-center p-6 hover:shadow-neon-sm transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                      <stat.icon className="text-primary" size={24} />
                    </div>
                    <Stat
                      value={stat.value}
                      label={stat.label}
                      description={stat.description}
                    />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-6">
              <h4 className="text-lg font-heading font-semibold text-text-base mb-4">
                Leadership Philosophy
              </h4>
              <p className="text-text-muted leading-relaxed mb-6">
                Building technical excellence through mentorship and open
                collaboration. Every innovation should elevate the entire
                community, creating lasting impact beyond individual
                achievements.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-muted text-sm">
                    <strong className="text-text-base">
                      Mentorship-First:
                    </strong>{' '}
                    Developing next generation of technical leaders
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-muted text-sm">
                    <strong className="text-text-base">Open Innovation:</strong>{' '}
                    Sharing knowledge to accelerate collective progress
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-muted text-sm">
                    <strong className="text-text-base">
                      Systems Thinking:
                    </strong>{' '}
                    Building sustainable, scalable solutions
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center lg:text-left"
          >
            <Link
              href="/experience"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Full Experience
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
