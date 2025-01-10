import { useState } from 'react';

import useIntersect from './useIntersect';

const useIsVisible = (options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useIntersect((entry) => {
    if (entry.isIntersecting) {
      return setIsVisible(true);
    }

    if (!entry.isIntersecting) {
      return setIsVisible(false);
    }
  }, options);

  return { isVisible, ref };
};

export default useIsVisible;
