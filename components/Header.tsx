'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Contact', href: '#contact', id: 'contact' },
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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '#home') {
      return pathname === '/';
    }
    // For hash links, we'll consider them active if we're on the homepage
    return pathname === '/' && href.startsWith('#');
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass-header shadow-lg shadow-primary/5'
            : 'bg-transparent'
        )}
      >
        <nav className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-heading font-bold text-primary hover:glow-text transition-all duration-200"
            >
              IEG
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={pathname === '/' ? item.href : `/${item.href}`}
                  className={cn(
                    'nav-link font-medium px-3 py-2 rounded-lg transition-all duration-200',
                    isActive(item.href)
                      ? 'active text-primary'
                      : 'hover:text-primary hover:bg-primary/5'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden lg:flex items-center space-x-4">
              {socialLinks.map(link => (
                <a
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
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-text-muted hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden bg-surface/95 backdrop-blur-md border-t border-primary/20"
        >
          <div className="section-container py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={pathname === '/' ? item.href : `/${item.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-left px-4 py-2 rounded-lg transition-all duration-200',
                    isActive(item.href)
                      ? 'text-primary bg-primary/10 border-l-2 border-primary'
                      : 'text-text-muted hover:text-primary hover:bg-primary/5'
                  )}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-primary/20">
                {socialLinks.map(link => (
                  <a
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
                  >
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
