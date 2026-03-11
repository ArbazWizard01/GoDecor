import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Every time the pathname changes, instantly scroll to the top left
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render any visible UI
};

export default ScrollToTop;