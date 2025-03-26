import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'staggered';
  threshold?: number;
  delay?: number;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  animation = 'fade-in', 
  threshold = 0.1,
  delay = 0,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay the visibility change if needed
          if (delay) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(true);
          }
          // Once it's visible, stop observing
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in':
        return isVisible ? 'animate-fade-in' : 'opacity-0';
      case 'slide-up':
        return isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8';
      case 'slide-down':
        return isVisible ? 'animate-slide-down' : 'opacity-0 -translate-y-8';
      case 'slide-left':
        return isVisible ? 'animate-slide-left' : 'opacity-0 translate-x-8';
      case 'slide-right':
        return isVisible ? 'animate-slide-right' : 'opacity-0 -translate-x-8';
      case 'staggered':
        return isVisible ? 'staggered-appear is-visible' : 'staggered-appear';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{ 
        animationDelay: delay ? `${delay}ms` : undefined,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation; 