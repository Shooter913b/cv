import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import ParticleBackground from '@/components/ParticleBackground';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Infant Elfrick Gnanasusairaj — Software & Robotics Engineer',
  description:
    'UW–Madison CS + Aerospace · FTC World Top-50 · Open-source innovation',
  keywords:
    'software engineering, robotics, open source, FTC, UW Madison, computer science, aerospace',
  authors: [{ name: 'Infant Elfrick Gnanasusairaj' }],
  creator: 'Infant Elfrick Gnanasusairaj',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Infant Elfrick Gnanasusairaj',
    title: 'Infant Elfrick Gnanasusairaj — Software & Robotics Engineer',
    description:
      'UW–Madison CS + Aerospace · FTC World Top-50 · Open-source innovation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infant Elfrick Gnanasusairaj — Software & Robotics Engineer',
    description:
      'UW–Madison CS + Aerospace · FTC World Top-50 · Open-source innovation',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Infant Elfrick Gnanasusairaj',
  jobTitle: 'Software & Robotics Engineer',
  description:
    'Software & robotics engineer building open source. UW-Madison student specializing in computer science, aerospace systems, and open-source innovation.',
  url: 'https://your-domain.com',
  sameAs: [
    'https://github.com/shooter913b',
    'https://www.linkedin.com/in/elfrickg/',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Wisconsin-Madison',
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Director of Encoder Development',
    occupationLocation: {
      '@type': 'Place',
      name: 'Princeton Apex Labs',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen`}
      >
        <ParticleBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
