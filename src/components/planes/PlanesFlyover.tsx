'use client';

import { useLayoutEffect, useState, useEffect } from 'react';
import { PLANES_CONFIG } from '@/lib/planes/config';
import { makePaperPath } from '@/lib/planes/pathGen';
import PlaneTrail from './PlaneTrail';
import PaperPlane from './PaperPlane';

type PathData = {
  d: string;
  points: { x: number; y: number }[];
};

export default function PlanesFlyover({ anchorId }: { anchorId: string }) {
  const [paths, setPaths] = useState<PathData[] | null>(null);
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    const h = document.getElementById(anchorId);
    if (!h) return;

    const r = h.getBoundingClientRect();
    const start = { x: r.left + r.width / 2, y: r.top + 8 };

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const end = { x: vw / 2, y: vh / 2 - 20 }; // mid-screen stop

    const pathDataList = PLANES_CONFIG.seeds.map((seed, i) => {
      return makePaperPath(start, end, seed + i * 17, i);
    });

    setPaths(pathDataList);
  }, [anchorId]);

  useEffect(() => {
    // Auto-cleanup after all animations complete
    const totalTime = Math.max(
      ...PLANES_CONFIG.seeds.map(
        (_, i) =>
          i * 0.55 + // delay
          (PLANES_CONFIG.speed.foldMs +
            PLANES_CONFIG.speed.takeoffMs +
            PLANES_CONFIG.speed.flyMs) /
            1000 + // animation time
          PLANES_CONFIG.trail.lifeMs / 1000 // trail life
      )
    );

    const timer = setTimeout(() => setVisible(false), totalTime * 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!paths || !visible) return null;

  const flyDur = PLANES_CONFIG.speed.flyMs / 1000;

  return (
    <>
      {/* Trails */}
      {paths.map((pathData, i) => (
        <PlaneTrail
          key={`trail-${i}`}
          d={pathData.d}
          color={PLANES_CONFIG.color}
          width={PLANES_CONFIG.trail.width}
          duration={flyDur + i * 0.3} // match flight duration variation
          delay={
            i * 0.8 +
            (PLANES_CONFIG.speed.foldMs +
              i * 100 +
              PLANES_CONFIG.speed.takeoffMs) /
              1000
          } // match plane timing
          fadeMs={PLANES_CONFIG.trail.fadeMs}
        />
      ))}

      {/* Planes */}
      {paths.map((pathData, i) => (
        <PaperPlane
          key={`plane-${i}`}
          d={pathData.d}
          points={pathData.points}
          delay={i * 0.8} // more staggered timing
          foldMs={PLANES_CONFIG.speed.foldMs + i * 100} // vary fold timing
          takeoffMs={PLANES_CONFIG.speed.takeoffMs}
          flyMs={PLANES_CONFIG.speed.flyMs + i * 300} // more varied flight time
          color={PLANES_CONFIG.color}
          size={72 + i * 6} // more size variation
        />
      ))}
    </>
  );
}
