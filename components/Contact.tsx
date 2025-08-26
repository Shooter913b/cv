'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email services like EmailJS, Formspree, etc.
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'infant.elfrick@gmail.com',
      href: 'mailto:infant.elfrick@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Madison, WI',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/shooter913b',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/elfrickg/',
      label: 'LinkedIn',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-surface/20">
      <div className="section-container">
        <h2 className="section-title text-text-base">Get In Touch</h2>

        <div className="text-center mb-12">
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects.
            Whether you want to work together or just say hi, feel free to reach
            out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-text-base mb-6">
              Let's Connect
            </h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface/40 transition-colors group border border-primary/20"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-text-base">
                      {info.label}
                    </div>
                    <div className="text-text-muted">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-text-base mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-surface/40 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors border border-primary/20"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-surface/40 border border-primary/20">
            <h3 className="text-2xl font-bold text-text-base mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-base mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-surface/60 text-text-base placeholder-text-muted"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-base mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-surface/60 text-text-base placeholder-text-muted"
                    placeholder="example@domain.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-base mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-surface/60 text-text-base placeholder-text-muted"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-base mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none bg-surface/60 text-text-base placeholder-text-muted"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled
                className="w-full btn-primary inline-flex items-center justify-center gap-2 bg-primary/50 hover:bg-primary/50 text-white/50 font-medium py-3 px-6 rounded-lg transition-colors cursor-not-allowed"
              >
                <Send size={20} />
                Send Message (Coming Soon)
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
