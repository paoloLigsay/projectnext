import { useState } from 'react';
import { useEffect } from 'react';

const useScreenSize = () => {
  const [isXs, setIsXs] = useState(false);
  const [isXsToSm, setIsXsToSm] = useState(false);
  const [isLg, setIsLg] = useState(false);

  const checkScreenSize = () => {
    const screenSize = window.innerWidth;
    setIsXs(screenSize < 768);
    setIsXsToSm(screenSize < 1081);
    setIsLg(screenSize > 1080);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return { isXs, isXsToSm, isLg };
};

export default useScreenSize;
