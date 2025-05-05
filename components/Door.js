'use client'
import Link from 'next/link';

export default function Door({ href,no}) {
  return (
    <Link href={href} className="door-wrapper">
      <div className="door">
        <div className="handle"></div>
        <span className="label">Enter</span>
      </div>
    </Link>
  );
}

