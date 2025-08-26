import { Code, Coffee, Heart, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: Heart, label: 'Years Experience', value: '5+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of
              experience creating digital experiences that are not only
              functional but also beautiful and intuitive. My journey in tech
              started with a curiosity about how things work, which led me to
              fall in love with coding.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community. I believe in writing clean, maintainable
              code and creating solutions that make a real difference in
              people's lives.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in modern web technologies including React, Next.js,
              Node.js, and various databases. I'm always eager to learn new
              things and take on challenging projects that push me to grow as a
              developer.
            </p>

            <div className="pt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card text-center group hover:scale-105 transition-transform"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4 group-hover:bg-primary-200 transition-colors">
                  <stat.icon className="text-primary-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
