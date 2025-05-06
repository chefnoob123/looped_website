'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clockImg from './images/broken-clock.png';
import Door from '@/components/Door';

export default function Home() {



  return (
    <div className="page">
      <div className="puzzle-image">
        <p>
        The hands of time do more than tell — they point to secrets in plain sight. Numbers you see may not be what they seem.
        Look at the clock. Think in decimals. Now, what if time spoke in base 64?
        </p>
        <Image 
          src={clockImg}
          alt="First puzzle clue" 
          width={500} 
          height={500}
        />
      </div>

      {/* {showClue && (
        <div className="secret-box">
          <a className="clue" href="https://v2.cryptii.com/decimal/base64" target="_blank" rel="noopener noreferrer">
            CLUE
          </a>
        </div>
      )} */}

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
