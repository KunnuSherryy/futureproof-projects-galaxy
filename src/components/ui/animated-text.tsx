
import React, { useRef, useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  speed?: 'fast' | 'medium' | 'slow';
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  staggerChildren?: boolean;
  splitBy?: 'letter' | 'word';
}

export function AnimatedText({
  text,
  className = '',
  once = true,
  delay = 0,
  speed = 'medium',
  animation = 'fade-up',
  tag: Tag = 'div',
  staggerChildren = true,
  splitBy = 'word',
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });

  useEffect(() => {
    if (entry?.isIntersecting && !hasAnimated) {
      if (once) setHasAnimated(true);
    }
  }, [entry?.isIntersecting, hasAnimated, once]);

  const isVisible = entry?.isIntersecting || hasAnimated;

  const getAnimationClass = () => {
    let baseAnimation = `animate-${animation}`;
    
    if (speed === 'fast') {
      baseAnimation += ' animate-duration-500';
    } else if (speed === 'slow') {
      baseAnimation += ' animate-duration-2000';
    } else {
      baseAnimation += ' animate-duration-1000';
    }
    
    return baseAnimation;
  };

  const renderContent = () => {
    const elements = splitBy === 'word' ? text.split(' ') : text.split('');
    const separator = splitBy === 'word' ? ' ' : '';

    return elements.map((item, index) => {
      const staggerDelay = staggerChildren ? index * 0.05 : 0;
      const itemDelay = delay + staggerDelay;
      const delayClass = itemDelay > 0 ? `animate-delay-${Math.round(itemDelay * 1000)}` : '';
      
      return (
        <span 
          key={index} 
          className={cn(
            'inline-block opacity-0',
            isVisible && [getAnimationClass(), delayClass]
          )}
          style={{ 
            animationFillMode: 'forwards',
            animationDelay: `${itemDelay}s`
          }}
        >
          {item}{separator}
        </span>
      );
    });
  };

  return (
    <Tag ref={ref} className={cn('overflow-hidden', className)}>
      {renderContent()}
    </Tag>
  );
}
