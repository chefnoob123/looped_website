'use client'
import RandomNav from "@/components/randomnav.js";
// import ShootingStar from "@/components/shooting_star";
import Image from "next/image";
import clockImg from "./images/broken-clock.png"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
    const [showClue, setShowClue] = useState(false);
    const inputRef = useRef('');
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    useEffect(() => {
      if (!isClient) return;
  
      const handleKeyDown = (event) => {
        inputRef.current += event.key.toLowerCase();
  
        if (inputRef.current.endsWith('link')) {
          setShowClue(true);
        }
  
        if (inputRef.current.length > 20) {
          inputRef.current = '';
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isClient]);
  
  return (
    <div className="page">
      <div  className="puzzle-image">
      <p>The doors may not open until you connect the pieces. Sometimes, all it takes is a single word — the word that connects one page to another</p>
      <Image 
        src={clockImg}
        alt="First puzzle clue" 
        width={500} 
        height={500} 
        
    />
      </div>
      
    {showClue && (
        <div className="secret-box">
          <a className="clue" href="https://v2.cryptii.com/decimal/base64">CLUE</a>
        </div>
      )}
      {/* <ShootingStar/> */}
      <h1>The stars do not begin, they simply are.</h1>
      <p className="hint">The first key to eternity is the one that begins time.</p>
      <RandomNav currentPath="/" className="main"/>
    </div>
  );
}