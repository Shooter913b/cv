'use client';

import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { Engine } from 'tsparticles-engine';
import type { ISourceOptions } from 'tsparticles-engine';

// Dynamically import tsparticles to avoid SSR issues
const Particles = dynamic(() => import('react-tsparticles'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-surface pointer-events-none" />
});

export default function ParticleBackground() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Pause particles when tab is hidden for performance
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    setIsLoaded(true);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    const { loadSlim } = await import('tsparticles-slim');
    await loadSlim(engine);
  }, []);

  // Don't render until client-side
  if (!isLoaded) {
    return <div className="fixed inset-0 bg-surface pointer-events-none" />;
  }

  // Reduced density on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? 40 : 60;
  const linkDistance = isMobile ? 100 : 120;

  const particleOptions: ISourceOptions = {
    background: {
      color: {
        value: '#0B0F14',
      },
    },
    fpsLimit: 60,
    detectRetina: true,
    fullScreen: {
      enable: false,
    },
    particles: {
      number: {
        value: particleCount,
        density: {
          enable: true,
          area: 1200,
        },
      },
      color: {
        value: '#00C8FF',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: {
          min: 0.3,
          max: 0.8,
        },
        random: true,
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
      },
      size: {
        value: {
          min: 0.5,
          max: 1.8,
        },
        random: true,
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: linkDistance,
        color: '#00C8FF',
        opacity: 0.15,
        width: 1,
        shadow: {
          enable: true,
          color: '#00C8FF',
          blur: 2,
        },
      },
      move: {
        enable: isVisible,
        speed: 0.3,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'out',
        },
        attract: {
          enable: false,
        },
      },
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: 'connect',
        },
        resize: true,
      },
      modes: {
        connect: {
          distance: 80,
          links: {
            opacity: 0.3,
          },
          radius: 60,
        },
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 30,
            },
            links: {
              distance: 80,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: false,
              },
            },
          },
        },
      },
    ],
  };

  return (
    <Particles
      id="particle-background"
      init={particlesInit}
      options={particleOptions}
      className="fixed inset-0 -z-10 opacity-60 pointer-events-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
}
