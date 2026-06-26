'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DASH_HEIGHT = 14;
const GAP = 10;
const LINE_LEFT = '1ch';

interface TimelineItemProps {
  children: React.ReactNode;
}

function TimelineItem({ children }: TimelineItemProps) {
  return (
    <div className="grid grid-cols-[6ch_1fr]">
      <div className="relative">
        <div
          className="absolute top-1/2 z-10 -translate-y-1/2 whitespace-pre timeline-cursor"
          style={{ left: '2ch' }}
        >
          \_*
        </div>
      </div>

      <div className="timeline-card ">{children}</div>
    </div>
  );
}

interface TimelineProps {
  children: React.ReactNode;
}

export default function Timeline({ children }: TimelineProps) {
  const scope = useRef<HTMLDivElement>(null);
  const [dashCount, setDashCount] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  const items = React.Children.toArray(children);

  useLayoutEffect(() => {
    if (!scope.current) return;

    const update = () => {
      const timelineHeight = scope.current!.clientHeight;
      const cards = scope.current!.querySelectorAll('.timeline-card');
      const lastCard = cards[cards.length - 1] as HTMLElement | undefined;

      if (!lastCard) return;

      const lastCardHeight = lastCard.offsetHeight;

      const nextLineHeight = timelineHeight - lastCardHeight / 2;

      setLineHeight(nextLineHeight);
      setDashCount(Math.ceil(nextLineHeight / (DASH_HEIGHT + GAP)));
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(scope.current);

    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      if (dashCount === 0) return;

      const tl = gsap.timeline();

      tl.from('.timeline-dash', {
        scaleY: 0,
        opacity: 0,
        transformOrigin: 'top',
        duration: 0.1,
        stagger: 0.04,
        ease: 'power2.out',
      })
        .fromTo(
          '.timeline-cursor',
          { opacity: 0, x: -8 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: 'power2.out',
          },
          '-=0.2'
        )
        .fromTo(
          '.timeline-card',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
          },
          '-=0.15'
        );
    },
    {
      scope,
      dependencies: [dashCount],
      revertOnUpdate: true,
    }
  );

  return (
    <div ref={scope} className="relative flex flex-col font-mono">
      <div
        className="absolute overflow-hidden"
        style={{
          left: LINE_LEFT,
          top: 0,
          height: lineHeight,
        }}
      >
        <div className="flex flex-col gap-[10px]">
          {Array.from({ length: dashCount }).map((_, i) => (
            <div key={i} className="timeline-dash h-[14px] w-[1ch] shrink-0 leading-none">
              |
            </div>
          ))}
        </div>
      </div>

      {items.map((child, index) => (
        <TimelineItem key={index}>{child}</TimelineItem>
      ))}
    </div>
  );
}
