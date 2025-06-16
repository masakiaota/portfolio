import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold, 
    once: triggerOnce,
    margin: "-100px 0px"
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [isInView, controls, triggerOnce]);

  return { ref, controls, isInView };
};

export const fadeInVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6
    }
  }
};

export const slideInFromLeftVariants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6 
    }
  }
};

export const slideInFromRightVariants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6 
    }
  }
};

export const staggerChildrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const scaleInVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6 
    }
  }
};