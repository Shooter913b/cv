const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'JavaScript', level: 92 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 75 },
        { name: 'Sass/SCSS', level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 82 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'Firebase', level: 78 },
        { name: 'Object Oriented Programming', level: 85 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Vercel', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'Jest', level: 75 },
        { name: 'CI/CD', level: 70 },
        { name: 'Linux', level: 72 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Additional Technologies & Concepts
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Responsive Design',
              'SEO Optimization',
              'Web Performance',
              'Accessibility (a11y)',
              'Progressive Web Apps',
              'Microservices',
              'Agile/Scrum',
              'Code Reviews',
              'Testing (Unit/Integration)',
              'Version Control',
              'API Design',
              'Database Design',
              'DevOps',
              'Mobile-First Design',
              'Cross-browser Compatibility',
              'Object Oriented Programming',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
