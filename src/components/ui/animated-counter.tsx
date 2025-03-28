
import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  prefix = '',
  suffix = '',
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const counterRef = useIntersectionObserver(ref, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (counterRef?.isIntersecting) {
      setIsIntersecting(true);
    }
  }, [counterRef?.isIntersecting]);

  useEffect(() => {
    if (!isIntersecting) return;

    let start = 0;
    const step = end / 50;
    const delayTimeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        start += step;
        if (start > end) {
          setCount(end);
          clearInterval(intervalId);
        } else {
          setCount(Math.floor(start));
        }
      }, duration / 50);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [end, duration, delay, isIntersecting]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
