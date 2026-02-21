import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — applique une animation CSS quand l'élément entre dans le viewport
 * @param {object} options
 * @param {string} options.animation  — classe CSS à ajouter (default: 'scroll-reveal--visible')
 * @param {number} options.threshold  — % de l'élément visible avant déclenchement (default: 0.15)
 * @param {number} options.delay      — délai en ms (default: 0)
 */
const useScrollReveal = ({ threshold = 0.15, delay = 0 } = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('scroll-reveal--visible');
          observer.unobserve(el); // déclenche une seule fois
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return ref;
};

export default useScrollReveal;
