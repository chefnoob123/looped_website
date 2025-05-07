'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clockImg from './images/broken-clock.png';
import Door from '@/components/Door';

export default function Home() {
  const [showClue, setShowClue] = useState(false);
  const bufferRef = useRef('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      const char = e.key.length === 1 ? e.key.toLowerCase() : '';
      bufferRef.current += char;

      // Limit buffer size
      if (bufferRef.current.length > 10) {
        bufferRef.current = bufferRef.current.slice(-10);
      }

      if (bufferRef.current.includes('link')) {
        setShowClue(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="page">
      <div className="puzzle-image">
        <p>
        To proceed, just type the word that connects pages — it rhymes with sink.
        </p>
        <Image 
          src={clockImg}
          alt="First puzzle clue" 
          width={500} 
          height={500}
        />
      </div>

      {showClue && (
        <div className="secret-box mt-4 text-green-600 font-semibold">
          The hands of time do more than tell — they point to secrets in plain sight. Numbers you see may not be what they seem.
          Look at the clock. Think in decimals. Now, what if time spoke in base 64?
        </div>
      )}

      <h1>The stars do not begin, they simply are.</h1>
      <p className="hint">The first key to eternity is the one that begins time.</p>

      <div className="main">
        <Door href="/dGhlcmV2ZXJzZWNsb2Nr" no={1} />
        <Door href="/B" no={2} />
        <Door href="/C" no={3} />
      </div>
    </div>
  );
}
