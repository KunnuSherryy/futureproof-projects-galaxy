
import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

interface IntersectionObserverEntry {
  isIntersecting: boolean;
  target: Element;
}

export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = {}
): IntersectionObserverEntry | null {
  const { once = false, ...observerOptions } = options;
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const hasIntersected = useRef(false);

  useEffect(() => {
    if (ref.current && !observer.current) {
      observer.current = new IntersectionObserver(([newEntry]) => {
        // If element has already intersected and once option is true, don't update state
        if (hasIntersected.current && once) return;
        
        if (newEntry.isIntersecting && once) {
          hasIntersected.current = true;
        }
        
        setEntry({
          isIntersecting: newEntry.isIntersecting,
          target: newEntry.target
        });
      }, observerOptions);

      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
    };
  }, [ref, once, observerOptions]);

  return entry;
}
