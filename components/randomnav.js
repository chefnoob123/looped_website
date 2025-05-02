import Link from 'next/link';
import { getRandomLinks } from '../utils/randomLinks';

export default function RandomNav({ currentPath }) {
  const links = getRandomLinks(currentPath);
  const labels = [
    'Venture into another spiral',
    'Gaze into a silent star',
    'Search the curved path'
  ];

  return (
    <nav>
      {links.map((href, i) => (
        <Link key={href} href={href}>{labels[i]}</Link>
      ))}
    </nav>
  );
}
