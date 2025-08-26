import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Experience - Infant Elfrick Gnanasusairaj',
  description:
    'Professional experience in software development, robotics engineering, and open-source technical leadership.',
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <Section
          title="Professional Experience"
          subtitle="Leadership & Development"
          className="min-h-screen pt-20"
        >
          <div className="text-center">
            <p className="text-text-muted text-lg">
              Detailed experience page coming soon...
            </p>
            <p className="text-text-muted mt-4">
              For now, check out the experience preview on the home page.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
