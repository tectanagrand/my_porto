'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Icons, { IconLabels } from './IconsList';

const BoxSize = 10;

const GlitchIcons = ({ iconName }: { iconName: keyof typeof Icons }) => {
  const Icon = Icons[iconName];
  const iconRef = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement[]>([]);
  const [dimensionBox, setDimensionBox] = useState([0, 0]);

  useEffect(() => {
    if (!iconRef.current) return;

    const height = iconRef.current.clientHeight;
    const width = iconRef.current.clientWidth;

    setDimensionBox([Math.ceil(height / BoxSize), Math.ceil(width / BoxSize)]);
  }, []);

  const handleMouseEnter = () => {
    gsap.killTweensOf(boxesRef.current);

    gsap.fromTo(
      boxesRef.current,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 0.2,
        scale: 1,
        duration: 0.06,
        stagger: {
          each: 0.04,
          from: 'center',
          grid: 'auto',
        },
        ease: 'bounce.in',
      }
    );
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf(boxesRef.current);

    gsap.to(boxesRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.2,
      stagger: {
        each: 0.09,
        from: 'center',
        grid: 'auto',
      },
      onComplete: () => {
        gsap.set(boxesRef.current, {
          opacity: 0,
          scale: 0,
        });
      },
    });
  };

  return (
    <div
      ref={iconRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative shrink-0 p-10 overflow-visible"
    >
      <Icon className="text-[60pt]" />

      <div
        className="
          absolute left-1/2 top-2 z-100
          -translate-x-1/2
          -translate-y-[80%]
          whitespace-nowrap
          rounded-md
          bg-zinc-900
          px-2 py-1
          text-xs
          text-zinc-100
          opacity-0
          scale-90
          pointer-events-none
          transition-all duration-200
          group-hover:opacity-100
          group-hover:scale-100
          group-hover:-translate-y-[0%]
        "
      >
        {IconLabels[iconName]}
      </div>

      {dimensionBox[0] > 0 && (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="flex flex-col">
            {Array.from({ length: dimensionBox[0] }, (_, row) => (
              <div className="flex" key={`boxrow-${row}`}>
                {Array.from({ length: dimensionBox[1] }, (_, col) => (
                  <div
                    key={`boxcol-${row}-${col}`}
                    ref={(el) => {
                      if (el) {
                        boxesRef.current[row * dimensionBox[1] + col] = el;
                      }
                    }}
                    className="w-[10px] h-[10px] bg-gray-600 opacity-0 scale-0"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlitchIcons;
