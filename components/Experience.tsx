import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Mentored junior developers and established best practices',
        'Improved application performance by 40% through optimization',
        'Collaborated with cross-functional teams on product strategy',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations LLC',
      location: 'Austin, TX',
      duration: '2020 - 2022',
      description: [
        'Developed and maintained web applications using React and Express',
        'Implemented responsive designs and improved mobile experience',
        'Integrated third-party APIs and payment processing systems',
        'Participated in agile development processes and code reviews',
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Stripe API', 'Heroku'],
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Studio',
      location: 'Remote',
      duration: '2019 - 2020',
      description: [
        'Built interactive user interfaces for e-commerce platforms',
        'Optimized website performance and SEO rankings',
        'Collaborated with designers to implement pixel-perfect designs',
        'Maintained and updated legacy codebases',
      ],
      technologies: ['JavaScript', 'Vue.js', 'Sass', 'Webpack', 'Git'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                  {index + 1}
                </div>

                {/* Content */}
                <div
                  className="flex-1 card animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 mb-2">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col lg:items-end text-sm text-gray-600">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={16} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
