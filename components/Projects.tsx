import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard. Built with modern technologies for scalability and performance.',
      image: '/api/placeholder/400/250',
      technologies: [
        'Next.js',
        'TypeScript',
        'Stripe',
        'PostgreSQL',
        'Tailwind CSS',
      ],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example/project',
      featured: true,
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example/project',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather dashboard that provides detailed weather information, forecasts, and beautiful data visualizations for multiple locations.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS Grid'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example/project',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing projects and skills with smooth animations and excellent performance scores.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example/project',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>

        {/* Featured Projects */}
        <div className="space-y-16 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="card group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
