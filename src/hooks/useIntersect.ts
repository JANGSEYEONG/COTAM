import { useCallback, useEffect, useRef } from 'react';

type IntersectHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;

const useIntersect = (onIntersect: IntersectHandler, options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        onIntersect(entry, observer);
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!ref.current) return;
    // #20241007.syjang, 서버사이드에서 window는 문자열 'undefined'를 반환함. 문자열로 수정
    if (typeof window === 'undefined' || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options, callback]);

  return ref;
};

export default useIntersect;
