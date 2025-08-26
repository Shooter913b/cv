'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';
import ParticleBackground from '@/components/ParticleBackground';

const cadSeasons = [
  {
    title: '2024 Into The Deep',
    link: 'https://cad.onshape.com/documents/d2a761d1667a8220e48ec838/w/7a89ea48647a17e283937aee/e/e57740242c43a75198d9f31b?renderMode=0&uiState=68abe4a1a7f80455f1b55774',
    color: 'from-blue-500 to-cyan-500',
    year: '2024',
    status: 'Previous Season',
  },
  {
    title: '2023 Center Stage',
    link: 'https://cad.onshape.com/documents/10b30c532e141096e919012a/w/4531859bbec793b4f8822232/e/9cf08cba415e3c046249d83d?renderMode=0&uiState=68ac062024e9267e0fdeaec6',
    color: 'from-yellow-500 to-orange-500',
    year: '2023',
    status: 'Previous Season',
  },
  {
    title: '2022 Power Play',
    link: 'https://cad.onshape.com/documents/41b17cc8c19a9fd9cb2cb984/w/d82b8431d3bf9a06e87d0583/e/25be1583557a38bd29b7852e?renderMode=0&uiState=68ac06b6df171b25f72c0670',
    color: 'from-green-500 to-emerald-500',
    year: '2022',
    status: 'Previous Season',
  },
];

export default function CADPage() {
  return (
    <div className="min-h-screen bg-bg text-text-base relative">
      <ParticleBackground />
      <div className="section-container py-8 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => window.close()}
            className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Close Tab
          </button>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-bg"
              >
                {/* Solid hexagon */}
                <path
                  d="M12 2L20 7L20 17L12 22L4 17L4 7Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-text-base">
            Techno Maniacs CAD Files
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            Access CAD files for all FTC seasons. Each season contains complete
            robot designs, competition modifications, and development
            iterations.
          </p>

          {/* Stats Bar */}
          <div className="flex justify-center gap-8 text-center">
            <div className="card p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-text-muted">Seasons</div>
            </div>
            <div className="card p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-text-muted">CAD Files</div>
            </div>
            <div className="card p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-accent">100%</div>
              <div className="text-sm text-text-muted">Open Source</div>
            </div>
          </div>
        </motion.div>

        {/* CAD Season Buttons */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {cadSeasons.map((season, index) => (
            <motion.div
              key={season.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <a
                href={season.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="card p-8 hover:scale-105 transition-transform duration-300 hover:shadow-neon">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/30">
                      {season.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm text-text-muted mb-1">
                          {season.year}
                        </div>
                        <h3 className="text-xl font-bold text-text-base">
                          {season.title}
                        </h3>
                      </div>
                      <Download
                        size={20}
                        className="text-text-muted group-hover:text-primary transition-colors"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-text-muted text-sm">
                      <span>Click to open in Onshape</span>
                      <ArrowLeft
                        size={12}
                        className="rotate-180 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-16"
        >
          <div className="card p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-text-base mb-4">
              Need Access to All CAD Files?
            </h3>
            <p className="text-text-muted mb-6">
              The buttons above link to the main robot designs for each season.
              For access to all CAD files including individual components and
              development iterations, please contact:
            </p>
            <a
              href="mailto:infant.elfrick@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              infant.elfrick@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16 text-text-muted text-sm"
        >
          <div className="card p-4 max-w-2xl mx-auto">
            <p className="text-text-muted">
              All CAD files are hosted on Onshape. These designs are open source
              and available for educational use.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
