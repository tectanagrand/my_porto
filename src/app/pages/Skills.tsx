'use client';

import { useEffect, useRef } from 'react';
import GlitchIcons from '../components/icons/GlitchIcons';
import Icons from '../components/icons/IconsList';

const Skills = () => {
  const names = Object.keys(Icons) as Array<keyof typeof Icons>;

  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const isHovering = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let raf: number;

    const animate = () => {
      if (!isDragging.current && !isHovering.current) {
        container.scrollLeft += 0.5;

        const half = container.scrollWidth / 2;

        if (container.scrollLeft >= half) {
          container.scrollLeft = 0;
        }
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    isDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || !isDragging.current) return;

    e.preventDefault();

    const distance = e.pageX - startX.current;
    container.scrollLeft = startScrollLeft.current - distance;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <div className="flex flex-col m-4">
      <p>{'> Skills'}</p>

      <div
        ref={containerRef}
        onMouseEnter={() => {
          isHovering.current = true;
        }}
        onMouseLeave={() => {
          isHovering.current = false;
          stopDragging();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        className="
          w-full
          overflow-x-auto
          cursor-grab
          active:cursor-grabbing
          select-none
          scrollbar-none
        "
      >
        <div className="flex w-max gap-2">
          {[...names, ...names].map((name, index) => (
            <GlitchIcons iconName={name} key={`${name}-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
