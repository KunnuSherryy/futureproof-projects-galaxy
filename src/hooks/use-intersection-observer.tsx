
import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
  triggerOnce?: boolean;
}

interface IntersectionObserverEntry {
  isIntersecting: boolean;
  target: Element;
  intersectionRatio: number;
  boundingClientRect: DOMRectReadOnly;
  intersectionRect: DOMRectReadOnly;
  rootBounds: DOMRectReadOnly | null;
  time: number;
}

export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = {}
): IntersectionObserverEntry | null {
  const { once = false, triggerOnce = false, ...observerOptions } = options;
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const hasIntersected = useRef(false);

  useEffect(() => {
    if (ref.current && !observer.current) {
      observer.current = new IntersectionObserver(([newEntry]) => {
        // If element has already intersected and once option is true, don't update state
        if (hasIntersected.current && (once || triggerOnce)) return;
        
        if (newEntry.isIntersecting && (once || triggerOnce)) {
          hasIntersected.current = true;
        }
        
        setEntry(newEntry);
      }, observerOptions);

      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
    };
  }, [ref, once, triggerOnce, observerOptions]);

  return entry;
}
