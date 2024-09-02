'use client';
 import { useState, useEffect } from 'react';

const ShowScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-[80px] left-0 w-full h-1 bg-gray-200 z-2">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ShowScrollProgress;
