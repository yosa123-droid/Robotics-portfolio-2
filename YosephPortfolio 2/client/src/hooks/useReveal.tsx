import { useCallback } from "react";

export const useReveal = () => {
  const setupRevealObserver = useCallback(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return;
    }
    
    const reveal = () => {
      const revealElements = document.querySelectorAll('.reveal');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: "-50px"
      });
      
      revealElements.forEach((element) => {
        observer.observe(element);
      });
    };
    
    reveal();
    
    return () => {
      // Cleanup would be handled by the observer itself
    };
  }, []);
  
  return { setupRevealObserver };
};
