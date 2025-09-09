import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const previousPathRef = useRef(null);
  const {pathname, hash} = useLocation();

  useEffect(() => {
    if(previousPathRef.current !== null) {
      if(pathname !== previousPathRef.current && !hash) {
        window.scroll(0, 0);
      }
    }

    previousPathRef.current = pathname;
  }, [pathname, hash]);

  return null;
}