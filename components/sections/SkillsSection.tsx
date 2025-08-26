'use client';

import { motion } from 'framer-motion';
import { Code, Cpu, Wrench, Brain } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import TechPill from '@/components/ui/TechPill';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    description: 'Programming languages and core development skills',
    skills: [
      { name: 'Java', proficiency: 95, experience: '6 years' },
      { name: 'Python', proficiency: 90, experience: '4 years' },
      { name: 'C++', proficiency: 60, experience: '1 year' },
      { name: 'TypeScript', proficiency: 88, experience: '2 years' },
      { name: 'JavaScript', proficiency: 85, experience: '3 years' },
    ],
  },
  {
    title: 'Frameworks & Tools',
    icon: Cpu,
    description: 'Development frameworks and software platforms',
    skills: [
      { name: 'Next.js', proficiency: 90, experience: '2 years' },
      { name: 'React', proficiency: 88, experience: '2 years' },
      { name: 'Android Studio', proficiency: 92, experience: '5 years' },
      { name: 'Unity', proficiency: 80, experience: '2 years' },
      { name: 'Git', proficiency: 85, experience: '6 years' },
    ],
  },
  {
    title: 'CAD & Manufacturing',
    icon: Wrench,
    description: 'Mechanical design and fabrication expertise',
    skills: [
      { name: 'Onshape', proficiency: 85, experience: '5 years' },
      { name: 'Fusion 360', proficiency: 75, experience: '3 years' },
      { name: '3D Printing', proficiency: 95, experience: '6 years' },
      { name: 'CNC Machining', proficiency: 80, experience: '3 years' },
      { name: 'CAD/CAM', proficiency: 80, experience: '4 years' },
    ],
  },
  {
    title: 'AI & Computer Vision',
    icon: Brain,
    description: 'Machine learning and computer vision technologies',
    skills: [
      { name: 'PyTorch', proficiency: 50, experience: '1 year' },
      { name: 'TensorFlow', proficiency: 75, experience: '4 years' },
      { name: 'OpenCV', proficiency: 85, experience: '3 years' },
      { name: 'Computer Vision', proficiency: 82, experience: '3 years' },
      { name: 'Machine Learning', proficiency: 50, experience: '1 year' },
    ],
  },
];

const additionalSkills = [
  'Control Systems',
  'Autonomous Navigation',
  'Sensor Fusion',
  'Real-time Systems',
  'Technical Writing',
  'Team Leadership',
  'Mentorship',
  'Project Management',
  'PCB Design',
  'Precision Engineering',
  'Manufacturing Processes',
  'Quality Assurance',
  'Documentation',
  'Open Source Development',
  'Community Building',
  'Public Speaking',
];

const SkillCard = ({ category, index }: { category: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="h-full"
  >
    <Card className="h-full p-6 group hover:border-primary/40">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <category.icon className="text-primary" size={20} />
        </div>
        <h3 className="text-lg font-heading font-semibold text-text-base">
          {category.title}
        </h3>
      </div>

      <p className="text-text-muted text-sm mb-6 leading-relaxed">
        {category.description}
      </p>

      <div className="space-y-4">
        {category.skills.map((skill: any, skillIndex: number) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.1 + skillIndex * 0.05,
            }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center text-sm">
              <span className="text-text-base font-medium">{skill.name}</span>
              <span className="text-text-muted text-xs">
                {skill.experience}
              </span>
            </div>
            <div className="relative h-2 bg-surface rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.proficiency}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.1 + skillIndex * 0.1 + 0.5,
                  ease: 'easeOut',
                }}
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
              />
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  </motion.div>
);

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Technical Expertise"
      subtitle="Skills & Technologies"
      className="bg-surface/10"
    >
      {/* Core Skills Grid */}
      <div className="grid lg:grid-cols-2 gap-6 mb-16">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <div className="neon-divider max-w-xs mx-auto mb-8" />

        <h3 className="text-xl font-heading font-semibold text-text-base mb-6">
          Additional Competencies
        </h3>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.6 + index * 0.03,
                ease: 'easeOut',
              }}
            >
              <TechPill className="bg-surface/60 hover:bg-surface/80">
                {skill}
              </TechPill>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-text-muted mt-8 max-w-2xl mx-auto"
        >
          Continuously expanding expertise through hands-on projects, research,
          and collaboration with the global robotics and open-source
          communities.
        </motion.p>
      </motion.div>
    </Section>
  );
}
