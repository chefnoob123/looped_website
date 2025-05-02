
'use client'
import { useState, useEffect } from 'react';
import RandomNav from '@/components/randomnav';

export default function PageC() {
  const [showClue, setShowClue] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === '`') {
        setShowClue(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="page">
      <h1>There’s a silence here...</h1>
      <p className="hint">Press the key that curves like a spiral. It’s how the wise bend space.</p>
      <RandomNav currentPath="/c" />
      {showClue && (
        <div className="secret-box">
          <p>To break the loop, write the unbroken word in the stars...</p>
          <p className="hint">Try placing it at the end of the journey.</p>
        </div>
      )}
    </div>
  );
}