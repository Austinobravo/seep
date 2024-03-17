"use client"
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children, direction }:any) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-50px 0px', // Adjust this based on your design
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);

  return (
    <div ref={ref} className={`fade-in-section w-full ${isVisible ? 'is-visible' : ''} ${direction}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
